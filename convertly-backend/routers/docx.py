from fastapi import APIRouter,File, UploadFile
from services import docx
router = APIRouter()
import aspose.words as aw
@router.post("/docx/pdf", tags=["docx"])
async def convert_to_pdf(file:UploadFile):
    content = file.file.read()
    open('uploads/file.docx.','wb').write(content)
    doc=aw.Document('uploads/file.docx');
    docx.convert_docx_to_pdf(doc)
    return {"filename": "done!"}

@router.post("/docx/{image}", tags=["docx"])
async def convert_to_images(file: UploadFile):
    content = await file.read()
    open('uploads/file.docx.','wb').write(content)
    return docx.convert_docx_to_images('uploads/file.docx')


@router.post("/docx/text", tags=["docx"])
async def convert_to_text(file: UploadFile):
    content = await file.read()
    open('uploads/file.docx.','wb').write(content)
    return docx.convert_docx_to_text('uploads/file.docx')
     

@router.post("/docx/html", tags=["docx"])
async def convert_to_html(file: UploadFile):
    content = await file.read()
    open('uploads/file.docx.','wb').write(content)
    return docx.convert_docx_to_html('uploads/file.docx')
    