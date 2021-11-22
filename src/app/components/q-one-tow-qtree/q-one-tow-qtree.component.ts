import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { QOneTowQtreeService } from 'src/app/q-one-tow-qtree.service';

@Component({
  selector: 'app-q-one-tow-qtree',
  templateUrl: './q-one-tow-qtree.component.html',
  styleUrls: ['./q-one-tow-qtree.component.css']
})
export class QOneTowQtreeComponent implements OnInit {
  [x: string]: any;
  qtwoqcombin: any[] = []; // step one
  adTwintyoneStack = new Chart('adTwintyoneStack', {}); // step 1 chart variable diclaration 


  constructor(private qotqtrs: QOneTowQtreeService ) { }

  ngOnInit(): void {
    this.initTwintyOneStack();

  }
  // API Functions top 10 2021 Category step three
  getAllTwintyoneStack(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qotqtrs.maxTwintyOnettt()
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
  async initTwintyOneStack(){
    await this.getAllTwintyoneStack().then((data:any[])=>{
      let x: any[] = [];
      let y1: any[] = []; 
      let y2: any[] = []; 
      let y3: any[] = []; 
      console.log('vale 21 stack',data);
     
      this.qtwoqcombin = data;
      console.log('all data ',this.qtwoqcombin);
      this.qtwoqcombin.forEach((topTwintyOneStack) => {
        x.push(topTwintyOneStack._id.year); 
        y1.push(topTwintyOneStack.Q1);    
        y2.push(topTwintyOneStack.Q2);    
        y3.push(topTwintyOneStack.Q3);  
      });
      console.log('x', x)
      console.log('y', y2)
      this.stackChartFunction(x, y1, y2, y3);
    })
    .catch((_err: any) => {
      //Error message
    });
  }
 
  
  stackChartFunction(x: any[], y1: any[], y2: any[], y3: any[]) {
    console.log(x, y1, y2, y3)
  this.adTwintyoneStack.data.datasets?.pop();
  
    this.adTwintyoneStack = new Chart('adTwintyoneStack', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Q1 in 2021',
          data: y1,
          backgroundColor: [
            'rgba(222, 49, 99 , 5)',
            // 'rgba(20, 143, 119  , 5)',
            // 'rgba(23, 165, 137 , 5)',
            // 'rgba(72, 201, 176, 5)',
            // 'rgba(209, 242, 235 , 5)',
            // 'rgba(255, 159, 64, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
        },
        {
          label: 'Q2 in 2021',
          data: y2,
          backgroundColor: [
            // 'rgba(14, 98, 81 , 5)',
            // 'rgba(20, 143, 119  , 5)',
            // 'rgba(23, 165, 137 , 5)',
            // 'rgba(72, 201, 176, 5)',
            'rgba(255, 127, 80  , 5)',
            // 'rgba(255, 159, 64, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
      
        },
        {
          label: 'Q3 in 2021',
          data: y3,
          backgroundColor: [
            // 'rgba(14, 98, 81 , 5)',
            // 'rgba(20, 143, 119  , 5)',
            // 'rgba(23, 165, 137 , 5)',
            'rgba(255, 191, 0, 5)',
            // 'rgba(209, 242, 235 , 5)',
            // 'rgba(255, 159, 64, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
      
        },
      ],
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
        },
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  } 

}
