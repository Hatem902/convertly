from fastapi import APIRouter, UploadFile
from services import pdf
router = APIRouter()


@router.post("/pdf/docx", tags=["pdf"])
async def convert_to_docx(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    pdf.convert_pdf2docx('uploads/file.pdf','results/file.docx')
    return {"file_name": file.filename,
    "file_url": "./s/sqsf"}

@router.post("/pdf/extract-text", tags=["pdf"])
async def extract_text(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    result = pdf.extract_text('uploads\\file.pdf')
    return {"file_name": file.filename,
            "file_url": "./s/sqsf"}

@router.post("/pdf/html", tags=["pdf"])
async def convert_to_html(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    pdf.convert_pdf_to_html('uploads\\file.pdf')
    return {"file_name": file.filename,
    "file_url": "./s/sqsf"}


@router.post("/pdf/images", tags=["pdf"])
async def convert_to_images(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    pdf.convert_pdf_to_images('uploads/file.pdf')
    return {"file_name": file.filename,
    "file_url": "./s/sqsf"}



@router.post("/pdf/powerpoint", tags=["pdf"])
async def convert_to_powerpoint(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    pdf.convert_pdf2pptx('uploads/file.pdf')
    return {"file_name": file.filename,
    "file_url": "./s/sqsf"}



@router.post("/pdf/excel", tags=["pdf"])
async def convert_to_excel(file: UploadFile):
    content = await file.read()
    open('uploads/file.pdf.','wb+').write(content)
    pdf.convert_pdf2excel('uploads/file.pdf')
    return {"file_name": file.filename,
    "file_url": "./s/sqsf"}


