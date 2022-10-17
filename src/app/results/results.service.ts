import html2canvas from 'html2canvas';
import { RulesService } from '../rules/rules.service';
import { Injectable } from '@angular/core';
import { Result } from '../models/result.models';

import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor(private rulesService: RulesService) {}

  generatePDF() {
    const doc = new jsPDF();
  }
  public convertToPDF() {
    // html2canvas(document.body).then((canvas) => {
    //   const contentDataURL = canvas.toDataURL('image/png');
    //   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = (canvas.height * width) / canvas.width;
    //   pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
    //   pdf.save('output.pdf'); // Generated PDF
    // });
  }
}
