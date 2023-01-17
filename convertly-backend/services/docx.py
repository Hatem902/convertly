import aspose.words as aw
from services import azure_storage_blob

def convert_docx_to_pdf(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/PDF.pdf")
    result = azure_storage_blob.store_file_in_azure_from_path("./converted_files/PDF.pdf",'pdf')
    if result!=False:
        return {
            "file_name":"file.pdf",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}

def convert_docx_to_images(input_file : str):
    doc = aw.Document(input_file)          
    for page in range(0, doc.page_count):
        extractedPage = doc.extract_pages(page, 1)
        extractedPage.save(f"./converted_files/Output_{page + 1}.jpg") #should be a list of images
    return {
            "status_code":204, # nothing to return, improve in the future
            "message": "files stored in server"}    

def convert_docx_to_text(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/out.txt")
    result = azure_storage_blob.store_file_in_azure_from_path("./converted_files/out.txt",'txt')
    if result!=False:
        return {
            "file_name":"file.txt",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}

def convert_docx_to_html(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/out.html")
    result = azure_storage_blob.store_file_in_azure_from_path("./converted_files/out.html",'html')
    if result!=False:
        return {
            "file_name":"file.html",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}