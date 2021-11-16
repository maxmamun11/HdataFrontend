import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopQuatwinService } from 'src/app/top-quatwin.service';



@Component({
  selector: 'app-top-quater-one-twinty',
  templateUrl: './top-quater-one-twinty.component.html',
  styleUrls: ['./top-quater-one-twinty.component.css']
})
export class TopQuaterOneTwintyComponent implements OnInit {
  quaterst:any[]=[];
  adQarTwoChart = new Chart('aqTwoChat', {}); // step 1 chart variable diclaration 


  constructor(private tqs: TopQuatwinService) { }

  ngOnInit(): void {
    this.initQuatert();
  }
   // API Functions top 5 2019 Q2.   step three
   getQuater(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tqs.maxQuatert()
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
  async initQuatert() {
    await this.getQuater().then(data => {
      let x: any[] = [];
      let y: any[] = [];

      this.quaterst = data;
      console.log( 'data',this.quaterst);

      this.quaterst?.forEach(qurtert => {
         x.push(qurtert._id);
         y.push(qurtert.Q2);
      });

      this.aQuartChartFunction(x, y);
    }).catch(_err => {
      // Error message
    });
  }

//step five
aQuartChartFunction(x :any, y :any) {
  // console.log(x)
  // console.log(y)
this.adQarTwoChart.data.datasets?.pop();

  this.adQarTwoChart = new Chart('adQtChart', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Brands/Products of Q2 in 2019',
        data: y,
        backgroundColor: [
          'rgba(100, 30, 22 , 5)',
          'rgba(146, 43, 33 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(217, 136, 128 , 5)',
          'rgba(242, 215, 213, 5)',
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
