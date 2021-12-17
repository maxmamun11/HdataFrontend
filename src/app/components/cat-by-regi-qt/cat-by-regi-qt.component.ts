import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CatByRegiQTService } from 'src/app/cat-by-regi-qt.service';

@Component({
  selector: 'app-cat-by-regi-qt',
  templateUrl: './cat-by-regi-qt.component.html',
  styleUrls: ['./cat-by-regi-qt.component.css']
})
export class CatByRegiQTComponent implements OnInit {
  [x: string]: any;
  categoryiesregiQthree: any[] = [];// step one
  adadTwintyoneCtgregiThree = new Chart('adadTwintyoneCtgregiThree',{})//step 1 chart

  constructor(private cbriqt: CatByRegiQTService) { }

  ngOnInit(): void {
    this.initTwintyOneCtgByRegithree()
  }

  // API Functions top 10 2021 Category step three
getAllTwintyoneCtgByRegithree(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.cbriqt.maxTwintyOneRegi()
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

async initTwintyOneCtgByRegithree(){
  await this.getAllTwintyoneCtgByRegithree().then((data:any[])=>{
    let x: any[] = [];
    let y: any[] = [];
    this.categoryiesregiQthree = data;
    console.log(this.categoryiesregiQthree);
    this.categoryiesregiQthree.forEach((topTwintyOneCtgregithree: {_id: any; Q3: any;}) =>{
      x.push(topTwintyOneCtgregithree._id.category); 
      y.push(topTwintyOneCtgregithree.Q3); 
    });
    this.addTwintyOneCtgRegiThreeChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}

addTwintyOneCtgRegiThreeChartFunction(x :any, y :any) {
  console.log('region Q3',x)
  console.log('region Q3 valu',y)
this.adadTwintyoneCtgregiThree.data.datasets?.pop();

  this.adadTwintyoneCtgregiThree = new Chart('adadTwintyoneCtgregiThree', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Category by Region at Q3 in 2021',
        data: y,
        backgroundColor: [
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          'rgba(126, 81, 9  ,5)',
          
          
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
