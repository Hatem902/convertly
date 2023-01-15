import { Component, Input, OnInit } from '@angular/core';
import { HttpMethods } from 'src/app/shared/models/httpMethods.enum';
import { HttpParam } from 'src/app/shared/models/httpParam.interface';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  constructor() { }
  @Input('method') method : HttpMethods = HttpMethods.POST
  @Input('route') route : string = "/"
  @Input('description') description : string = ""
  @Input('body') body : HttpParam[] = []
  ngOnInit(): void {
  }

}
