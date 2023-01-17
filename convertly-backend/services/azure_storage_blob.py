import os, uuid
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
import io

def store_file_in_azure(data,extension,container_name):
    try:
        print("Storing ...")

        # you need to export it : 
        #linux : export AZURE_STORAGE_CONNECTION_STRING="<yourconnectionstring>"
        #windows (cmd): setx AZURE_STORAGE_CONNECTION_STRING "<yourconnectionstring>"
        connect_str = "DefaultEndpointsProtocol=https;AccountName=convertlyaymenproject;AccountKey=mfPJQpFOkzCYTTdvB0nRNX1stDVQcAq5j6zIPECHenvH2poXx/vyZ8Z1/Yz8S8PIUC6zrblS0wTw+AStRy4H4w==;EndpointSuffix=core.windows.net"
        print(connect_str)
        # Create the BlobServiceClient object
        blob_service_client = BlobServiceClient.from_connection_string(connect_str)
        remote_file_name = str(uuid.uuid4()) + "." + extension
        all_containers = blob_service_client.list_containers()
        already_exists=False
        for container in all_containers:
            print(container.name)
            if container_name==container.name:
                already_exists=True
        
        if(already_exists==False):
            blob_service_client.create_container(container_name)
        
        # Create a blob client using the local file name as the name for the blob
        blob_client = blob_service_client.get_blob_client(container=container_name, blob=remote_file_name)
        print("\nUploading to Azure Storage as blob:\n\t" + remote_file_name)

        # Upload the created file
        blob_client.upload_blob(data)
        return blob_client.url #the image url on azure storage blob
    except Exception as ex:
        print('Exception:')
        print(ex)
        return False

def store_file_in_azure_from_path(file_path,extension):
    try:
        with open(file_path, "rb") as fh:
            buf = io.BytesIO(fh.read())
            result = store_file_in_azure(buf,extension=extension,container_name=extension)
            return result
    except Exception as ex:
        print('Exception:')
        print(ex)
        return False
    