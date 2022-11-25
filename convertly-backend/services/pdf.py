from pdf2docx import  Converter
import PyPDF2
import aspose.words as aw
from pdf2image import convert_from_path
import aspose.slides as slides

def convert_pdf_to_html(input_file : str):
    doc = aw.Document(input_file)
    doc.save("document.html")


def convert_pdf_to_images(input_file : str):

    images = convert_from_path(input_file)
    for i in range(len(images)):
        images[i].save('page' + str(i) + '.jpg', 'JPEG')


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
    return { 'result' : text}

def convert_pdf2docx(input_file: str, output_file: str):
    """Converts pdf to docx"""
    pdf_file = input_file
    docx_file = output_file
    cv = Converter(pdf_file)
    cv.convert(docx_file)
    cv.close()


def convert_pdf2pptx(input_file : str):
    with slides.Presentation() as pres:
        pres.slides.remove_at(0)
        pres.slides.add_from_pdf(input_file)
        pres.save("output_file.pptx", slides.export.SaveFormat.PPTX)

def convert_pdf2excel(input_file : str):
    doc = aw.Document(input_file)
    doc.save("document.xls")