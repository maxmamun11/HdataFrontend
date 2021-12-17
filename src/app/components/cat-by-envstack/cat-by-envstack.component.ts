import { Component, OnInit } from '@angular/core';
import { CatByEnvstackService } from 'src/app/cat-by-envstack.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cat-by-envstack',
  templateUrl: './cat-by-envstack.component.html',
  styleUrls: ['./cat-by-envstack.component.css']
})
export class CatByEnvstackComponent implements OnInit {
  [x: string]:any;
  stacks: any [] = [];
  addtwintyStackt = new Chart ('addtwintyStackt', {});

  constructor(private cbess: CatByEnvstackService) { }

  ngOnInit(): void {
    this.initTwintyOneStackit()
  }

  getAllTwintyoneStackit(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cbess.maxTwityStack()
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


  async initTwintyOneStackit(){
    await this.getAllTwintyoneStackit().then((data:any[])=>{
      let x: any[] = [];
      let y1: any[] = []; 
      let y2: any[] = []; 
      let y3: any[] = []; 
      console.log('vale new  stack',data);
     
      this.stack = data;
      console.log('all data ',this.stack);
      this.stack.forEach((TwintyO: { _id: { category: any; }; Q1: any; Q2: any; Q3: any; }) => {
        x.push(TwintyO._id.category); 
        y1.push(TwintyO.Q1);    
        y2.push(TwintyO.Q2);    
        y3.push(TwintyO.Q3);  
      });
      console.log('x', x)
      console.log('y', y2)
      this.stackNewtChartFunction(x, y1, y2, y3);
    })
    .catch((_err: any) => {
      //Error message
    });
  }

  stackNewtChartFunction(x: any[], y1: any[], y2: any[], y3: any[]) {
    console.log(x, y1, y2, y3)
  this.addtwintyStackt.data.datasets?.pop();
  
    this.addtwintyStackt = new Chart('addtwintyStackt', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Q1',
          data: y1,
          backgroundColor: [
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            'rgba(255, 127, 80 , 5)',
            
            
        ],
        borderColor: [],
      borderWidth: 2,
        },
        {
          label: 'Q2',
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
        
          label: 'Q3 Environment combined in 2021',
          data: y3,
          backgroundColor: [
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            'rgba(128, 0, 0  , 5)',
            
            
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
