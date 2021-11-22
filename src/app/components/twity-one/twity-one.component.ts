import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TwityOnService } from 'src/app/twity-on.service';


@Component({
  selector: 'app-twity-one',
  templateUrl: './twity-one.component.html',
  styleUrls: ['./twity-one.component.css']
})
export class TwityOneComponent implements OnInit {
  [x: string]: any;
  advers: any[] = []; // step one
  adTwintyone = new Chart('adTwintyone', {}); // step 1 chart variable diclaration 


  constructor(private tcs: TwityOnService) { }

  ngOnInit(): void {
    this.initAdvertiser()
  }
  // API Functions top 10 2021 Advertisers step three
 getAllProduct(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.tcs.maxTwintyOne()
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

// step four
async initAdvertiser() {
  await this.getAllProduct().then((data: any[]) =>{
    let x: any[] = [];
    let y: any[] = [];

    this.advers = data;
    console.log(this.advers);

    this.advers.forEach((topAdvertiser: { _id: any; Total: any;}) =>{
      x.push(topAdvertiser._id);
      y.push(topAdvertiser.Total);
    });
    this.addAdvertiserChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}
   //step five
addAdvertiserChartFunction(x :any, y :any) {
  console.log('advertiser2021',x)
  console.log('Advertiser valu',y)
this.adTwintyone.data.datasets?.pop();

  this.adTwintyone = new Chart('adTwintyone', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Advertisers in 2021',
        data: y,
        backgroundColor: [
          'rgba(126, 81, 9 , 5)',
          'rgba(156, 100, 12   , 5)',
          'rgba(185, 119, 14 , 5)',
          'rgba(214, 137, 16 , 5)',
          'rgba(243, 156, 18 , 5)',
          'rgba(248, 196, 113, 3)',
          'rgba(240, 178, 122   , 5)',
          'rgba(250, 229, 211 , 5)',
          'rgba(253, 235, 208  , 5)',
          'rgba(254, 245, 231, 3)',
          
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
