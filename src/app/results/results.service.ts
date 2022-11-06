import html2canvas from 'html2canvas';
import { RulesService } from '../rules/rules.service';
import { Injectable } from '@angular/core';

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
    // let DATA: any = document.getElementsByClassName('pdf-container');
    window.print();
  }
}
