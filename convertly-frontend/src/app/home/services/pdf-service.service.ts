import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileResponse } from 'src/app/shared/models/fileResponse.interface';
import { FileRequest } from 'src/app/shared/models/fileRequest.interface';

const pdfUrl = environment.backUrl + '/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor(private http:HttpClient) { }

  
convert_to_docx(body:any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/docx',body)
}

extract_text(body: any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/extract-text',body)
}

convert_to_html(body: any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/html',body)
}
convert_to_images(body: any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/images',body)
}
convert_to_powerpoint(body: any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/powerpoint',body)
}
convert_to_excel(body: any):Observable<FileResponse>{
  return this.http.post<FileResponse>(pdfUrl + '/excel',body)
}
}
