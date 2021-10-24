import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { AdvertiserService } from 'src/app/advertiser.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quaters? : any[];
  adQarChart = new Chart('aqChat', {});

  constructor(private as: AdvertiserService) { }

  ngOnInit(): void {
   
    this.initQuater();
  }
  
       // quater statistic for Q!
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
        
      },
      
    })
  } 





}
