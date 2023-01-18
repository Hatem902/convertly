For the backend, we used fastApi which is a python framework.
user chooses the file aswell as the conversion type.
the file is sent, converted and stored in azure storage.
we used Azure blob storage  to store the files and we configured the spacename of the blob as blob only, that means that we only can check for the specific URL and not the whole container,  we configured the container to delete files after 24h from the upload date.
we preferred azure storage and not s3 because it gives us free trial without credit card.
The response contains the name and the download url of the conversion result.
We can only check for the specific url .. for security purposes.