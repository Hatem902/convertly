from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routers import pdf
from routers import docx
from routers import png
from routers import image_to_text
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pdf.router)
app.include_router(docx.router)
app.include_router(png.router)
app.include_router(image_to_text.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}