import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CatByEnvQTService } from 'src/app/cat-by-env-qt.service';

@Component({
  selector: 'app-cat-by-env-qt',
  templateUrl: './cat-by-env-qt.component.html',
  styleUrls: ['./cat-by-env-qt.component.css']
})
export class CatByEnvQTComponent implements OnInit {
  [x: string]: any;
  categoryiesevnQthree: any[] = [];// step one
  adadTwintyoneCtgevnThree = new Chart('adadTwintyoneCtgevnThree',{})//step 1 chart

  constructor(private cbeqs: CatByEnvQTService ) { }

  ngOnInit(): void {
    this.initTwintyOneCtgByEvnthree()
  }

  // API Functions top 10 2021 Category step three
getAllTwintyoneCtgByEvnthree(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.cbeqs.maxTwintyOneE()
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

async initTwintyOneCtgByEvnthree(){
  await this.getAllTwintyoneCtgByEvnthree().then((data:any[])=>{
    let x: any[] = [];
    let y: any[] = [];
    this.categoryiesevnQthree = data;
    console.log(this.categoryiesevnQthree);
    this.categoryiesevnQthree.forEach((topTwintyOneCtgevnthree: {_id: any; Q3: any;}) =>{
      x.push(topTwintyOneCtgevnthree._id.category); 
      y.push(topTwintyOneCtgevnthree.Q3); 
    });
    this.addTwintyOneCtgEvnThreeChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}

addTwintyOneCtgEvnThreeChartFunction(x :any, y :any) {
  console.log('environment Q3',x)
  console.log('environment Q3 valu',y)
this.adadTwintyoneCtgevnThree.data.datasets?.pop();

  this.adadTwintyoneCtgevnThree = new Chart('adadTwintyoneCtgevnThree', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Category by environment at Q3 in 2021',
        data: y,
        backgroundColor: [
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',
          'rgba(192, 57, 43 , 5)',



          
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
