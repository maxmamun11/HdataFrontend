import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TwintyOneCtgService } from 'src/app/twinty-one-ctg.service';

@Component({
  selector: 'app-twinty-one-ctg',
  templateUrl: './twinty-one-ctg.component.html',
  styleUrls: ['./twinty-one-ctg.component.css']
})
export class TwintyOneCtgComponent implements OnInit {
  [x: string]: any;
  categoriess: any[] = []; // step one
  adTwintyoneCtg = new Chart('adTwintyoneCtg', {}); // step 1 chart variable diclaration 


  constructor(private tocs: TwintyOneCtgService) { }

  ngOnInit(): void {
      this.initTwintyOneCtg();
  }

  // API Functions top 10 2021 Category step three
  getAllTwintyoneCtg(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.tocs.maxTwintyOnett()
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

async initTwintyOneCtg(){
  await this.getAllTwintyoneCtg().then((data:any[])=>{
    let x: any[] = [];
    let y: any[] = [];
    this.categoriess = data;
    console.log(this.categoriess);
    this.categoriess.forEach((topTwintyOneCtg: {_id: any; Total: any;}) =>{
      x.push(topTwintyOneCtg._id); 
      y.push(topTwintyOneCtg.Total); 
    });
    this.addTwintyOneCtgChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}


addTwintyOneCtgChartFunction(x :any, y :any) {
  console.log('ctg2021',x)
  console.log('ctg valu',y)
this.adTwintyoneCtg.data.datasets?.pop();

  this.adTwintyoneCtg = new Chart('adTwintyoneCtg', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Category in 2021',
        data: y,
        backgroundColor: [
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          'rgba(100, 30, 22 , 5)',
          
          
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
