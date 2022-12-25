import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FileResponse } from 'src/app/shared/models/fileResponse.interface';
import { environment } from 'src/environments/environment';

const convertUrl = environment.backUrl;

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  files$ = new BehaviorSubject<any>(null);
  allType$ = new BehaviorSubject<any>('...');

  constructor(private http: HttpClient) {}

  getFiles(): Observable<any> {
    return this.files$;
  }

  chooseFiles(event: any) {
    this.files$.next(Array.from(event.currentTarget.files));
    this.allType$.next(null);
  }

  addFiles(event: any) {
    const newFiles = Array.from(event.currentTarget.files);
    const restOfFiles = this.files$.getValue().filter((file: any) => {
      return !newFiles.find(
        (added: any) =>
          added.name == file.name &&
          added.type == file.type &&
          added.size == file.size
        // how to test on content?
      );
    });

    this.files$.next([...newFiles, ...restOfFiles]);
  }

  setType(type: string, name?: string) {
    if (name != 'convertAll') {
      var file: any = this.files$
        .getValue()
        .find((file: any) => file.name == name);

      file.ctype = type;
    } else {
      console.log(type);
      var temp = this.files$.getValue();
      temp.forEach((file: any) => (file.ctype = type));
      this.files$.next(temp);
      this.allType$.next(type);
    }
    console.log(this.files$.getValue());
  }

  getAllType(): Observable<any> {
    return this.allType$;
  }

  deleteFile(name: string) {
    this.files$.next(
      this.files$.getValue().filter((file: any) => file.name != name)
    );
    console.log(Array.from(this.files$.getValue()).length);
  }
  filesExist(): boolean {
    return Array.from(this.files$.getValue()).length > 0;
  }
  typesAreValid(): boolean {
    {
      return !!(
        this.filesExist() &&
        this.files$
          .getValue()
          .every((file: any) => file.ctype && file.ctype != '')
      );
    }
  }

  sendFilesV1(): void {
    this.files$.getValue().forEach((file: any) => {
      let formData = new FormData();
      formData.append('file', file);

      this.http.post<FileResponse>(
        convertUrl + '/' + file.type + '/' + file.ctype,
        formData
      );
    });
  }

  sendFilesV2(): void {
    const sendFile = (
      file: any,
      type: any,
      ctype: any
    ): Observable<FileResponse> => {
      return this.http.post<FileResponse>(
        convertUrl + '/' + type + '/' + ctype,
        file
      );
    };

    this.files$.getValue().forEach((file: any) => {
      let formData = new FormData();
      formData.append('file', file);
      sendFile(formData, file.type, file.ctype);
    });
  }
}
