from fastapi import APIRouter, UploadFile

router = APIRouter()


@router.post("/pdf-2-docx", tags=["pdf"])
async def read_users(file: UploadFile):
    content = await file.read()
    open('file.png.','wb').write(content)
    return {"filename": file.filename}


@router.get("/pdf/me", tags=["pdf"])
async def read_user_me():
    return {"username": "fakecurrentuser"}


@router.get("/pdf/{username}", tags=["pdf"])
async def read_user(username: str):
    return {"username": username}