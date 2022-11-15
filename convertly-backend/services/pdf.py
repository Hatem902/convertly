from pdf2docx import  Converter


def convert_pdf2docx(input_file: str, output_file: str):
    """Converts pdf to docx"""
    pdf_file = input_file
    docx_file = output_file
    cv = Converter(pdf_file)
    cv.convert(docx_file)  # all pages by default
    cv.close()


