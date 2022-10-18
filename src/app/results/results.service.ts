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

  public openPDF(): void {
    let DATA: any = document.getElementById('pdfData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
