import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TwintyOneCatThreeService } from 'src/app/twinty-one-cat-three.service';


@Component({
  selector: 'app-twinty-one-cat-three',
  templateUrl: './twinty-one-cat-three.component.html',
  styleUrls: ['./twinty-one-cat-three.component.css']
})
export class TwintyOneCatThreeComponent implements OnInit {
  [x: string]: any;
  categoryiesQthree: any[] = [];// step one
  adadTwintyoneCtgThree = new Chart('adadTwintyoneCtgThree',{})//step 1 chart

  constructor(private tocts: TwintyOneCatThreeService) { }

  ngOnInit(): void {
    this.initTwintyOneCtgthree();
  }

// API Functions top 10 2021 Category step three
getAllTwintyoneCtgthree(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.tocts.maxTwintyOnetttt()
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

async initTwintyOneCtgthree(){
  await this.getAllTwintyoneCtgthree().then((data:any[])=>{
    let x: any[] = [];
    let y: any[] = [];
    this.categoryiesQthree = data;
    console.log(this.categoryiesQthree);
    this.categoryiesQthree.forEach((topTwintyOneCtgthree: {_id: any; Q3: any;}) =>{
      x.push(topTwintyOneCtgthree._id); 
      y.push(topTwintyOneCtgthree.Q3); 
    });
    this.addTwintyOneCtgThreeChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}


addTwintyOneCtgThreeChartFunction(x :any, y :any) {
  console.log('ctgQthree2021',x)
  console.log('ctgQthree2021 valu',y)
this.adadTwintyoneCtgThree.data.datasets?.pop();

  this.adadTwintyoneCtgThree = new Chart('adadTwintyoneCtgThree', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Category Q3 in 2021',
        data: y,
        backgroundColor: [
          'rgba(100, 30, 22 , 5)',
          'rgba(123, 36, 28  , 5)',
          'rgba(146, 43, 33 , 5)',
          'rgba(169, 50, 38, 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(205, 97, 85 , 5)',
          'rgba(217, 136, 128, 5)',
          'rgba( 230, 176, 170 , 5)',
          'rgba(242, 215, 213, 5)',
          'rgba(209, 242, 235 , 5)',
          'rgba(249, 235, 234, 3)',
          
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
