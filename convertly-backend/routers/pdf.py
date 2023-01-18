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
    res = pdf.convert_pdf2docx(teporaryFolder+"file.pdf",destinatonFolder+"file.docx")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  

@router.post("/pdf/txt", tags=["pdf"])
async def extract_text(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    res = pdf.extract_text(teporaryFolder+"file.pdf")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  

@router.post("/pdf/html", tags=["pdf"])
async def convert_to_html(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    res = pdf.convert_pdf_to_html(teporaryFolder+"file.pdf")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  


@router.post("/pdf/images", tags=["pdf"])
async def convert_to_images(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    res = pdf.convert_pdf_to_images(teporaryFolder+"file.pdf")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  

@router.post("/pdf/powerpoint", tags=["pdf"])
async def convert_to_powerpoint(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    res = pdf.convert_pdf2pptx(teporaryFolder+"file.pdf")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  

@router.post("/pdf/excel", tags=["pdf"])
async def convert_to_excel(file: UploadFile):
    content = await file.read()
    open(teporaryFolder+"file.pdf",'wb+').write(content)
    res = pdf.convert_pdf2excel(teporaryFolder+"file.pdf")
    if "file_name" in res:
        res["file_name"] = file.filename
    return res  



