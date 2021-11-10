import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopQuaNinService } from 'src/app/top-qua-nin.service';


@Component({
  selector: 'app-top-quater-one-nine',
  templateUrl: './top-quater-one-nine.component.html',
  styleUrls: ['./top-quater-one-nine.component.css']
})
export class TopQuaterOneNineComponent implements OnInit {
  [x: string]: any;
  quaters: any[]=[];
  adQarChart = new Chart('aqChat', {}); // step 1 chart variable diclaration 

  constructor(private tqns: TopQuaNinService) { }

  ngOnInit(): void {
    this.initQuater();
  }

  
   // API Functions top 5 2019 Q1.   step three
   getAllQuater(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tqns.maxQuater()
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
// step 4  x and y data diclaration
  async initQuater() {
    await this.getAllQuater().then(data => {
      let x: any[] = [];
      let y: any[] = [];

      this.quaters = data;
      console.log( 'data',this.quaters);

      this.quaters?.forEach(qurter => {
         x.push(qurter._id);
         y.push(qurter.Q1);
      });

      this.aQuarChartFunction(x, y);
    }).catch(_err => {
      // Error message
    });
  }

  //step five
  aQuarChartFunction(x :any, y :any) {
    // console.log(x)
    // console.log(y)
 this.adQarChart.data.datasets?.pop();
  
    this.adQarChart = new Chart('adQChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 5 Brands/Products of Q1 in 2019',
          data: y,
          backgroundColor: [
            'rgba(27, 79, 114 , 5)',
            'rgba(40, 116, 166 , 5)',
            'rgba(52, 152, 219, 5)',
            'rgba(133, 193, 233, 5)',
            'rgba( 214, 234, 248, 5)',
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
