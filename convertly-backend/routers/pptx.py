from fastapi import APIRouter, UploadFile
import aspose.slides as slides
from services import azure_storage_blob

router = APIRouter()

@router.post("/pptx/pdf", tags=["pptx"])
async def convert_to_pdf(file: UploadFile):
    content = await file.read()
    open('uploads/file.pptx','wb').write(content)
    pres = slides.Presentation("uploads/file.pptx")
    pres.save("pptx-to-pdf.pdf", slides.export.SaveFormat.PDF)
    result = azure_storage_blob.store_file_in_azure_from_path("pptx-to-pdf.pdf",'pdf')
    if result!=False:
        return {
            "file_name":"file.pdf",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}

@router.post("/pptx/html", tags=["pptx"])
async def convert_to_html(file: UploadFile):
    content = await file.read()
    open('uploads/file.pptx','wb').write(content)
    pres = slides.Presentation("uploads/file.pptx")
    pres.save("pptx-to-html.html", slides.export.SaveFormat.HTML5) 
    result = azure_storage_blob.store_file_in_azure_from_path("pptx-to-html.html",'html')
    if result!=False:
        return {
            "file_name":"file.html",
            "file_url": result}
    else:
        return {
            "status_code":500,
            "message": "something went wrong when storing the file"}




