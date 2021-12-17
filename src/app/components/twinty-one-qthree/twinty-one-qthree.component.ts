import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TwintyOneQthreeService } from 'src/app/twinty-one-qthree.service';


@Component({
  selector: 'app-twinty-one-qthree',
  templateUrl: './twinty-one-qthree.component.html',
  styleUrls: ['./twinty-one-qthree.component.css']
})
export class TwintyOneQThreeComponent implements OnInit {
  [x: string]: any;
  adverts: any[] = []; // step one 
  adTwintyThree = new Chart('adTwintythree', {}); // step 2 chart variable diclaration

  constructor(private toqs: TwintyOneQthreeService) { }

  ngOnInit(): void {
    this.initAdvertisers()
  }
// API Functions top 10 2021 Advertisers step three
  getAllProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this .toqs.maxTwintyOnet()
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

  async initAdvertisers() {
    await this.getAllProducts().then((data: any[]) => {
      let x: any[] = [];
      let y: any[] = [];

      this.adverts = data;
      console.log(this.adverts);
      this.adverts.forEach((topAdvertisers: {_id: any; Q3: any;}) => {
        x.push(topAdvertisers._id);
        y.push(topAdvertisers.Q3);
      });
      this.addAdvertisersChartFunction(x, y);
    }).catch((_err: any) => {
          //Error message
    })
  }
  //step five 
  addAdvertisersChartFunction(x: any, y: any) {
    console.log('Q3 data' , x)
    console.log('Q3 data', y) 

    this.adTwintyThree.data.datasets?.pop();

    this.adTwintyThree = new Chart('adTwintyThree', {
      type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Advertisers of Q3 in 2021',
        data: y,
        backgroundColor: [
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',
          'rgba(24, 106, 59  , 5)',

          // 'rgba(14, 102, 85  , 5)',
          // 'rgba(17, 122, 101 , 5)',
          // 'rgba(19, 141, 117, 5)',
          // 'rgba(34, 153, 84 , 5)',
          // 'rgba(82, 190, 128, 3)',
          // 'rgba(125, 206, 160 , 5)',
          // 'rgba(212, 239, 223  , 5)',
          // 'rgba(212, 239, 223 , 5)',
          // 'rgba(233, 247, 239, 5)',
          
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
