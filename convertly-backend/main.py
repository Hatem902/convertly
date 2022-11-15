from fastapi import FastAPI


from routers import pdf

app = FastAPI()


app.include_router(pdf.router)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}