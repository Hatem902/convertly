from fastapi import FastAPI


from routers import pdf
from routers import docx

app = FastAPI()


app.include_router(pdf.router)
app.include_router(docx.router)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}