from fastapi import APIRouter, UploadFile, HTTPException
from services import image_to_text
router = APIRouter()


@router.post("/image_to_text",tags=["Image to Text"])
async def convert_to_any(file: UploadFile):
    content = await file.read()
    url=image_to_text.convert_img_to_string(content)
    return {"text":url}
    




