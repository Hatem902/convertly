from fastapi import APIRouter, UploadFile
from services import pdf
router = APIRouter()


@router.post("/pdf-2-docx", tags=["pdf"])
async def read_users(file: UploadFile):
    content = await file.read()
    open('file.pdf.','wb').write(content)
    pdf.convert_pdf2docx('file.pdf','file.docx')
    return {"filename": file.filename}


@router.get("/pdf/me", tags=["pdf"])
async def read_user_me():
    return {"username": "fakecurrentuser"}


@router.get("/pdf/{username}", tags=["pdf"])
async def read_user(username: str):
    return {"username": username}