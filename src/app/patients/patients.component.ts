import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

declare var $;
@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
  })
export class PatientsComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  makePdf() {
    let doc = new jsPDF();
    doc.addHTML(this.content.nativeElement, function () {
      doc.save("obrz.pdf");
    });
  }

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  constructor() { }
  ngOnInit(): void {
    this.dtOptions = {
      /* columnDefs*/
      "": [{
        "targets": [0],
        "visible": false,
        "searchable": false
      }, {
        "targets": [1],
        "visible": false
      }]
    };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }
}
