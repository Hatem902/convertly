import { Component, OnInit } from '@angular/core';
import { HttpMethods } from 'src/app/shared/models/httpMethods.enum';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pdfEndpoints= [{
    method : HttpMethods.POST,
    route : '/pdf/docx',
    description : 'Convert To Word Document',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      }
    ]
  },
  {
    method : HttpMethods.POST,
    route : '/pdf/txt',
    description : 'Extract text from PDF document',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      }
    ]

  },
  {
    method : HttpMethods.POST,
    route : '/pdf/images',
    description : 'Convert to images in a user specified extension',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      },
      {   
      name : "extension",
      type : "string",
      required : false
      }
    ]

  },
  {
    method : HttpMethods.POST,
    route : '/pdf/html',
    description : 'Convert to a HTML file',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      }
    ]

  },
  {
    method : HttpMethods.POST,
    route : '/pdf/powerpoint',
    description : 'Convert To Powerpoint Document',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      }
    ]

  },
  {
    method : HttpMethods.POST,
    route : '/pdf/excel',
    description : 'Convert To Excel Document',
    body : [
      {
        name : "file",
        type : "string($binary)",
        required : true
      }
    ]

  }]

  docxEndpoints = [
    {
      method : HttpMethods.POST,
      route : '/docx/pdf',
      description : 'Convert To PDF Document',
      body : [
        {
          name : "file",
          type : "string($binary)",
          required : true
        }
      ]
  
    },
    {
      method : HttpMethods.POST,
      route : '/docx/image',
      description : 'Convert To PNG images',
      body : [
        {
          name : "file",
          type : "string($binary)",
          required : true
        }
      ]
  
    },
    {
      method : HttpMethods.POST,
      route : '/docx/text',
      description : 'Extract text',
      body : [
        {
          name : "file",
          type : "string($binary)",
          required : true
        }
      ]
  
    }
  ]
  pngEndpoints = [{
    method : HttpMethods.POST,
    route : '/png/{type}',
    description : 'Convert a PNG image to any other image extension',
    body : []

  }]

}
