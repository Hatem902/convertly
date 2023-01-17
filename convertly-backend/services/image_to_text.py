from PIL import Image
from pytesseract import pytesseract
import io

def convert_img_to_string(input_file : str):
    #Define path to tessaract.exe
    #if in windows you must change the path :) , it s for ubuntu here.
    path_to_tesseract = r'C://Program Files//Tesseract-OCR'
    #Point tessaract_cmd to tessaract.exe
    pytesseract.tesseract_cmd = path_to_tesseract

    #Open image with PIL
    img  = Image.open(io.BytesIO(input_file))
    
    #Extract text from image
    return pytesseract.image_to_string(img)

