import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StackTwityOneService } from 'src/app/stack-twity-one.service';



@Component({
  selector: 'app-stack-twity-one',
  templateUrl: './stack-twity-one.component.html',
  styleUrls: ['./stack-twity-one.component.css']
})
export class StackTwityOneComponent implements OnInit {
  [x: string]:any;
  stack: any [] = [];
  addtwintyStack = new Chart ('addtwintyStack', {});
  

  constructor(private stos: StackTwityOneService ) { }

  ngOnInit(): void {
    this.initTwintyOneStacki();
  }

  getAllTwintyoneStacki(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.stos.maxTwintyOnetttq()
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



  async initTwintyOneStacki(){
    await this.getAllTwintyoneStacki().then((data:any[])=>{
      let x: any[] = [];
      let y1: any[] = []; 
      let y2: any[] = []; 
      let y3: any[] = []; 
      console.log('vale new  stack',data);
     
      this.stack = data;
      console.log('all data ',this.stack);
      this.stack.forEach((TwintyOneStack) => {
        x.push(TwintyOneStack._id.category); 
        y1.push(TwintyOneStack.Q1);    
        y2.push(TwintyOneStack.Q2);    
        y3.push(TwintyOneStack.Q3);  
      });
      console.log('x', x)
      console.log('y', y2)
      this.stackNewChartFunction(x, y1, y2, y3);
    })
    .catch((_err: any) => {
      //Error message
    });
  }


  stackNewChartFunction(x: any[], y1: any[], y2: any[], y3: any[]) {
    console.log(x, y1, y2, y3)
  this.addtwintyStack.data.datasets?.pop();
  
    this.addtwintyStack = new Chart('addtwintyStack', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Q1 in 2021',
          data: y1,
          backgroundColor: [
            'rgba(255, 0, 255 , 5)',
            'rgba(255, 0, 255  , 5)',
            'rgba(255, 0, 255 , 5)',
            'rgba(255, 0, 255, 5)',
            'rgba(255, 0, 255 , 5)',
            'rgba(255, 0, 255, 3)',
            'rgba(255, 0, 255 , 5)',
            'rgba(255, 0, 255, 5)',
            'rgba(255, 0, 255 , 5)',
            'rgba(255, 0, 255, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
        },
        {
          label: 'Q2 in 2021',
          data: y2,
          backgroundColor: [
            'rgba(0, 128, 0, 5)',
            'rgba(0, 128, 0  , 5)',
            'rgba(0, 128, 0 , 5)',
            'rgba(0, 128, 0, 5)',
            'rgba(0, 128, 0  , 5)',
            'rgba(0, 128, 0, 3)',
            'rgba(0, 128, 0 , 5)',
            'rgba(0, 128, 0, 5)',
            'rgba(0, 128, 0  , 5)',
            'rgba(0, 128, 0, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
      
        },
        {
          label: 'Q3 in 2021',
          data: y3,
          backgroundColor: [
            'rgba(74, 35, 90  , 5)',
            'rgba(74, 35, 90  , 5)',
            'rgba(74, 35, 90 , 5)',
            'rgba(74, 35, 90, 5)',
            'rgba(74, 35, 90  , 5)',
            'rgba(74, 35, 90, 3)',
            'rgba(74, 35, 90 , 5)',
            'rgba(74, 35, 90, 5)',
            'rgba(74, 35, 90  , 5)',
            'rgba(74, 35, 90, 3)',
            
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
