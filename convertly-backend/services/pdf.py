from typing import Tuple

from pdf2docx import parse, Converter


def convert_pdf2docx(input_file: str, output_file: str, pages: Tuple = None):
    """Converts pdf to docx"""
    pdf_file = input_file
    docx_file = output_file
    # convert pdf to docx
    cv = Converter(pdf_file)
    cv.convert(docx_file)  # all pages by default
    cv.close()