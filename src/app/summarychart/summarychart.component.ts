import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';

import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-summarychart',
  templateUrl: './summarychart.component.html',
  styleUrls: ['./summarychart.component.css']
})
export class SummarychartComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  makePdf() {
    let doc = new jsPDF();
    doc.addHTML(this.content.nativeElement, function () {
      doc.save("obrz.pdf");
    });
  }


  chart: Chart;
  name = 'Summary chart';
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Allergies', 'Diagnosis', 'Courses', 'Sites'],
        datasets: [{
          label: ' patients ',
          data: [
            100, 200, 300, 400
          ],
          backgroundColor: ['#0074D9', '#2ECC40', '#FF4136', 'darkred']
        }]
      },
      options: {
        title: {
          display: false,
          text: 'Color patients'
        },
        legend: {
          position: 'left',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 11
          }
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}
