from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routers import pdf

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


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}