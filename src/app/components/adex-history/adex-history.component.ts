import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdvertiserService } from 'src/app/advertiser.service';



@Component({
  selector: 'app-adex-history',
  templateUrl: './adex-history.component.html',
  styleUrls: ['./adex-history.component.css']
})
export class AdexHistoryComponent implements OnInit {
  [x: string]: any;
  quaters? : any[];
  categories: any[] = [];
  cats: any[] = [];

  adQarChart = new Chart('aqChat', {}); // step 1 chart variable diclaration 
  adCatChart = new Chart('acatChat', {}); // step 1 chart variable diclaration 
  adCattChart = new Chart('acattChat', {}); // step 1 chart variable diclaration 



  constructor(private as: AdvertiserService) { }

  ngOnInit(): void {
    this.initQuater();
    // this.initCategory();
    this.initCatt();

  }

       // step 2  x and y data diclaration
       async initQuater() {
        await this.getAllQuater().then(data => {
          let x: any[] = [];
          let y: any[] = [];
    
          this.quaters = data;
          //console.log( 'data',this.quaters);
    
          this.quaters?.forEach(qurter => {
             x.push(qurter._id);
             y.push(qurter.quater_1_RM);
          });
    
          this.aQuarChartFunction(x, y);
        }).catch(_err => {
          // Error message
        });
      }
      // async initCategory() {
      //   await this.getCategory().then((data: any[]) =>{
      //     let x: any[] = [];
      //     let y: any[] = [];
    
      //     this.categories = data;
      //     console.log(this.catagories);
    
      //     this.categories.forEach((Bro: { _id: any; Total: any;}) =>{
      //       x.push(Bro._id);
      //       y.push(Bro.Total);
      //     });
      //     this.adCategoryChartFunction(x, y);
      //   }).catch((_err: any) => {
      //     //Error message
      //   })
    
      // }
      async initCatt() {
        await this.getAllCatt().then((data: any[]) =>{
          let x: any[] = [];
          let y: any[] = [];
    
          this.cats = data;
          // console.log(this.cats);
    
          this.cats.forEach((Catt: { _id: any; Total: any;}) =>{
            x.push(Catt._id);
            y.push(Catt.Total);
          });
          this.adCattChartFunction(x, y);
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
            // console.log(response);
          }
        }, err => {
          if (err) {
            reject(err);
          }
        });
    });
  }
  
// // API Functions top 5 2019 categories
//  getCategory(): Promise<any> {
//   return new Promise((resolve, reject) => {
//     this.as.maxCat()
//       .subscribe((response: any) => {
//         if (response) {
//           resolve(response);
//           console.log(response);
//         }
//       }, (err: any) => {
//         if (err) {
//           reject(err);
//         }
//       });
//   });
// }
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
    // console.log(x)
    // console.log(y)
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
            label:function(tooltipItem : any, _data: any){
              return `RM${(parseFloat(tooltipItem.value).toLocaleString())}`;
            }
          }
        }
      }
    })
  } 
//   adCategoryChartFunction(x :any, y :any) {
//     // console.log(x)
//     // console.log(y)
//  this.adCatChart.data.datasets?.pop();
  
//     this.adCatChart = new Chart('Chart', {
//       type: 'bar',
//       data: {
//         datasets: [{
//           label: 'Top 5 Category in 2019',
//           data: y,
//           backgroundColor: [
//             'rgba(255, 99, 132, 5)',
//             'rgba(54, 162, 235, 5)',
//             'rgba(255, 206, 86, 5)',
//             'rgba(75, 192, 192, 5)',
//             'rgba(153, 102, 255, 5)',
//             'rgba(255, 159, 64, 3)',
            
//         ],
//         borderColor: [
//       ],
//       borderWidth: 2
//         }],
//         labels: x
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         tooltips:{
//           callbacks:{ 
//             label:function(tooltipItem : any, _data: any){
//               return `RM${(parseFloat(tooltipItem.value).toLocaleString())}`;

//             }
//           }
//         }
//       }
//     })
//   } 
  adCattChartFunction(x :any, y :any) {
    // console.log(x)
    // console.log(y)
 this.adCatChart.data.datasets?.pop();
  
    this.adCatChart = new Chart('myChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 5 Category in 2020',
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
            label:function(tooltipItem : any, _data: any){
              return `RM${(parseFloat(tooltipItem.value).toLocaleString())}`;

            }
          }
        }
      }
    })
  } 
  
 
  

}
