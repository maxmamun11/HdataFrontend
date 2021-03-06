import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdvertiserService } from 'src/app/advertiser.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quaters? : any[];
  categories: any[] = [];
  adQarChart = new Chart('aqChat', {}); // step 1 chart variable diclaration 
  adCatChart = new Chart('acatChat', {});

  constructor(private as: AdvertiserService) { }

  ngOnInit(): void {
    this.initQuater();
    this.initCategory();
  }
  
       // step 2  x and y data dic
       async initQuater() {
        await this.getAllQuater().then(data => {
          let x: any[] = [];
          let y: any[] = [];
    
          this.quaters = data;
          console.log( 'data',this.quaters);
    
          this.quaters?.forEach(qurter => {
             x.push(qurter._id);
             y.push(qurter.quater_1_RM);
          });
    
          this.aQuarChartFunction(x, y);
        }).catch(err => {
          // Error message
        });
      }
      async initCategory() {
        await this.getCategory().then((data: any[]) => {
          let x: any[] = [];
          let y: any[] = [];

          this.categories = data;
          console.log(this.categories);

          this.categories.forEach((topCategoryNineen: {_id: any; Total: any;}) => {
            x.push(topCategoryNineen._id);
            y.push(topCategoryNineen.Total);
          });
          this.adCategoryChartFunction(x,y);
        }).catch((_err: any) => {
          //Error message
        })
      }
  
   // API Functions
   getAllQuater(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.as.maxQuater()
        .subscribe(response => {
          if (response) {
            resolve(response);
            console.log(response);
          }
        }, err => {
          if (err) {
            reject(err);
          }
        });
    }); 
  }
  getCategory(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.as.maxCat()
      .subscribe((response: any) => {
        if (response) {
          resolve(response);
          console.log(response);
        }
      }, (err: any) => {
        if (err) {
          reject(err);
        }
      });
    });
  }

  // API Functions top 5 2020 categories
  
  getAllCatt(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.as.maxCatt()
      .subscribe(response => {
        if (response) { 
          resolve(response);
          // console.log(response);
        }
      }, err => {
        if (err) {
          reject(err);
        }
      });
    });
}

  
  aQuarChartFunction(x :any, y :any) {
    console.log(x)
    console.log(y)
 this.adQarChart.data.datasets?.pop();
  
    this.adQarChart = new Chart('adQChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 5 Brands/Products in Q1',
          data: y,
          backgroundColor: [
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 3)',
            
        ],
        borderColor: [
      ],
      borderWidth: 2
        }],
        labels: x
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips:{
          callbacks:{ 
            label:function(tooltipItem : any, data: any){

            
              return `RM${(parseFloat(tooltipItem.value).toLocaleString())}`;

            }
          }
        }
      }
    })
  } 


adCategoryChartFunction(x : any, y :any) {
  console.log(x)
  console.log(y)

  this.adCatChart.data.datasets?.pop();
  this.adCatChart = new Chart('Chart', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 5 Category in 2019',
        data: y,
        backgroundColor: [
          'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 3)',
        ],
        borderColor: [

        ],
        borderWidth: 2
      }],
      labels: x
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        callbacks:{
          label: function(tooltipItem: any, _data: any){
            return `RM${(parseFloat(tooltipItem.value).toLocaleString())}`;
          }
        }
      }

    }

  })
}

//Export function
onDownloadPdf() {
  const element = document.getElementById('export-pdf');
  var date = moment().toDate();
  if (element) {
      html2canvas(element, {
          scale: 4
      }).then((canvas: { width: any; height: any; toDataURL: (arg0: string, arg1: number) => any; }) => {
          console.log(canvas);
          var contentWidth = canvas.width;
          var contentHeight = canvas.height;
          var pageHeight = contentWidth / 595.28 * 841.89;
          var leftHeight = contentHeight;
          var position = 0;
          var imgWidth = 595.28;
          var imgHeight = 595.28 / contentWidth * contentHeight;
          var pageData = canvas.toDataURL('image/jpeg', 1.0);
          var pdf = new jsPDF('p', 'pt', 'a4');
          if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          } else {
              while (leftHeight > 0) {
                  pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                  leftHeight -= pageHeight;
                  position -= 841.89;
                  if (leftHeight > 0) {
                      pdf.addPage()
                  }
              }
          }
          pdf.setFont("arial");
          pdf.setFontSize(10);
          pdf.text(`Note: This is system generated form and does not require signature`, 10, 835);
          pdf.save('Report' + '-' + date);
      });
  }
}

}
