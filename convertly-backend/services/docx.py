import aspose.words as aw

def convert_docx_to_pdf(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/PDF.pdf")

def convert_docx_to_images(input_file : str):
    doc = aw.Document(input_file)          
    for page in range(0, doc.page_count):
        extractedPage = doc.extract_pages(page, 1)
        extractedPage.save(f"./converted_files/Output_{page + 1}.jpg") #should be a list of images

def convert_docx_to_text(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/out.txt")

def convert_docx_to_html(input_file : str):
    doc = aw.Document(input_file)
    doc.save("./converted_files/out.html")