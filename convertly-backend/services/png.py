from PIL import Image
import io
from services import azure_storage_blob
# pip install azure-storage-blob azure-identity
# works for PNG, JPEG, PPM, GIF, TIFF, and BMP, EPS (that's what I tested it can work for more.)
def convert_to_extension(im,extension):
    with io.BytesIO() as f:
        im.save(f, format=extension)
        return f.getvalue()

def convert_any_img_to_any(image_data : str, extension : str):
    image = Image.open(io.BytesIO(image_data))
    if image.mode in ("RGBA", "P"): image= image.convert("RGB")
    complete_string="randomStuff"+extension
    imageObj=convert_to_extension(image,extension)
    print(imageObj)
    # we will send it to cloud after this.
    result = azure_storage_blob.store_file_in_azure(imageObj,extension=extension,container_name=extension)
    return result

