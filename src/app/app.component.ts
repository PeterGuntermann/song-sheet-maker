import { Component, HostBinding } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Create PDF tutorial:
// https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss'],
           })
export class AppComponent {
  private readonly documentDefinition = {
    content: 'This is an sample PDF printed with pdfMake',
  };

  downloadPdf() {
    pdfMake.createPdf(this.documentDefinition).download();
  }

  openPdfInNewWindow() {
    pdfMake.createPdf(this.documentDefinition).open();
  }

  openPdfInSameWindow() {
    pdfMake.createPdf(this.documentDefinition).open({}, window);
  }

  printPdf() {
    pdfMake.createPdf(this.documentDefinition).print();
  }
}
