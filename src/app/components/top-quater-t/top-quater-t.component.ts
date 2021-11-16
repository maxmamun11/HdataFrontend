import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopQuateTService } from 'src/app/top-quate-t.service';


@Component({
  selector: 'app-top-quater-t',
  templateUrl: './top-quater-t.component.html',
  styleUrls: ['./top-quater-t.component.css']
})
export class TopQuaterTComponent implements OnInit {
  [x: string]: any;
  quatersrs:any[]=[];
  adQarTq1Chart = new Chart('adQtChart', {}); // step 1 chart variable diclaration 


  constructor(private tqts: TopQuateTService) { }

  ngOnInit(): void {
    this.initQuaterr();
  }

  // API Functions top 5 2020 Q1.   step three
  getQuaterr(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tqts.maxQuaterr()
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
  async initQuaterr() {
    await this.getQuaterr().then(data => {
      let x: any[] = [];
      let y: any[] = [];

      this.quatersrs = data;
      console.log( 'data',this.quatersrs);

      this.quatersrs?.forEach(quatersrs => {
         x.push(quatersrs._id);
         y.push(quatersrs.Q1);
      });

      this.aQQuarttCharttFunction(x, y);
    }).catch(_err => {
      // Error message
    });
  }
  //step five
aQQuarttCharttFunction(x :any, y :any) {
  // console.log(x)
  // console.log(y)
this.adQarTq1Chart.data.datasets?.pop();

  this.adQarTq1Chart = new Chart('bar', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Brands/Products of Q1 in 2020',
        data: y,
        backgroundColor: [
          'rgba(74, 35, 90 , 5)',
          'rgba(108, 52, 131, 5)',
          'rgba(125, 60, 152  , 5)',
          'rgba(165, 105, 189 , 5)',
          'rgba(187, 143, 206, 5)',
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
