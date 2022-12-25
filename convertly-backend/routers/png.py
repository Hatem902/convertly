from fastapi import APIRouter, UploadFile, HTTPException
from services import png
router = APIRouter()

# works for PNG, JPEG, PPM, GIF, TIFF, and BMP, EPS 
# (that's what I tested it can work for more.)
@router.post("/png/{type_needed}", tags=["png"])
async def convert_to_any(type_needed,file: UploadFile):
    content = await file.read()
    url=png.convert_any_img_to_any(content,type_needed)
    if url!=False:
        return {"file_url": url}
    else:
        raise HTTPException(status_code=500, detail="Internal Server Error")




