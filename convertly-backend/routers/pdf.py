from fastapi import APIRouter, UploadFile
from services import pdf
import aspose.slides as slides
import os

router = APIRouter()
destinatonFolder = os.environ.get('DESTINATION_FOLDER', 'results/')
teporaryFolder = os.environ.get('TEMPORARY_FOLDER', 'uploads/')

@router.post("/pdf/docx", tags=["pdf"])
async def convert_to_docx(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.convert_pdf2docx(teporaryFolder+"file.pdf",destinatonFolder+"file.docx")

@router.post("/pdf/extract-text", tags=["pdf"])
async def extract_text(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.extract_text(teporaryFolder+"file.pdf")

@router.post("/pdf/html", tags=["pdf"])
async def convert_to_html(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.convert_pdf_to_html(teporaryFolder+"file.pdf")


@router.post("/pdf/images", tags=["pdf"])
async def convert_to_images(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.convert_pdf_to_images(teporaryFolder+"file.pdf")

@router.post("/pdf/powerpoint", tags=["pdf"])
async def convert_to_powerpoint(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.convert_pdf2pptx(teporaryFolder+"file.pdf")

@router.post("/pdf/excel", tags=["pdf"])
async def convert_to_excel(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    return pdf.convert_pdf2excel(teporaryFolder+"file.pdf")



