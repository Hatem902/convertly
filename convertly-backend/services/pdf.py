from pdf2docx import  Converter
import PyPDF2
import aspose.words as aw
from pdf2image import convert_from_path
import aspose.slides as slides
from services import azure_storage_blob

def convert_pdf_to_html(input_file : str):
    doc = aw.Document(input_file)
    doc.save("results/document.html")
    result = azure_storage_blob.store_file_in_azure_from_path("results/document.html",'html')
    if result!=False:
        return {
            "file_name":"file.html",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}

def convert_pdf_to_images(input_file : str):

    images = convert_from_path(input_file,poppler_path="C://Users//idriss//poppler-0.68.0//bin")
    for i in range(len(images)):
        images[i].save('results/page' + str(i) + '.jpg', 'JPEG')

# note: install poppler on docker image and change the poppler path

def extract_text(input_file : str):
    pdfFileObj = open(input_file, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    print(pdfReader.numPages)
    text = ""
    for i in range(pdfReader.numPages):
        pageObj = pdfReader.getPage(i)
        text = text + pageObj.extractText()
        file = open('file.txt','w')
        file.write(text)
    pdfFileObj.close()
    with open('results/result.txt', 'w+') as f:
        f.write(text)
    result = azure_storage_blob.store_file_in_azure_from_path("results/result.txt",'txt')
    if result!=False:
        return {
            "file_name":"file.txt",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}

def convert_pdf2docx(input_file: str, output_file: str):
    """Converts pdf to docx"""
    pdf_file = input_file
    docx_file = output_file
    cv = Converter(pdf_file)
    cv.convert(docx_file)
    result = azure_storage_blob.store_file_in_azure_from_path(docx_file,'docx')
    if result!=False:
        return {
            "file_name":"file.docx",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}



def convert_pdf2pptx(input_file : str):
    with slides.Presentation() as pres:
        pres.slides.remove_at(0)
        pres.slides.add_from_pdf(input_file)
        pres.save("results/output_file.pptx", slides.export.SaveFormat.PPTX)
    result = azure_storage_blob.store_file_in_azure_from_path("results/output_file.pptx",'pptx')
    if result!=False:
        return {
            "file_name":"file.pptx",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}    

def convert_pdf2excel(input_file : str):
    doc = aw.Document(input_file)
    doc.save("results/document.xls")
    result = azure_storage_blob.store_file_in_azure_from_path("results/document.xls",'xls')
    if result!=False:
        return {
            "file_name":"file.xls",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}