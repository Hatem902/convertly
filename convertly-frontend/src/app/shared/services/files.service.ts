import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  files$ = new BehaviorSubject<any>([]);
  allType$ = new BehaviorSubject<any>('...');

  getFiles(): Observable<any> {
    return this.files$;
  }

  chooseFiles(event: any) {
    this.files$.next(Array.from(event.currentTarget.files));
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
    console.log(this.files$);
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
  }
  typesAreValid(): boolean {
    {
      return this.files$
        .getValue()
        .every((file: any) => file.ctype && file.ctype != '');
    }
  }
}
