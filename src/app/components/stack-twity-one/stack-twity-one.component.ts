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
  stackFormat: any [] = [];
  addtwintyStackFormat = new Chart ('addtwintyStackFormat', {});

  constructor(private stos: StackTwityOneService ) { }

  ngOnInit(): void {
    this.initTwintyOneStackFormat()
   
  }

  getAllTwintyoneStackFormat(): Promise<any> {
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

  async initTwintyOneStackFormat(){
    await this.getAllTwintyoneStackFormat().then((data:any[])=>{
      let x: any[] = [];
      let y1: any[] = []; 
      let y2: any[] = []; 
      let y3: any[] = []; 
      console.log('stack of Format',data);
     
      this.stack = data;
      console.log('stack Format value ',this.stack);
      this.stack.forEach((Twintyformat: { _id: { category: any; }; Q1: any; Q2: any; Q3: any; }) => {
        x.push(Twintyformat._id.category); 
        y1.push(Twintyformat.Q1);    
        y2.push(Twintyformat.Q2);    
        y3.push(Twintyformat.Q3);  
      });
      console.log('x', x)
      console.log('y', y2)
      this.stackFormatChartFunction(x, y1, y2, y3);
    })
    .catch((_err: any) => {
      //Error message
    });
  }

  stackFormatChartFunction(x: any[], y1: any[], y2: any[], y3: any[]) {
    console.log(x, y1, y2, y3)
  this.addtwintyStackFormat.data.datasets?.pop();
  
    this.addtwintyStackFormat = new Chart('addtwintyStackFormat', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Q1',
          data: y1,
          backgroundColor: [
            'rgba(0, 255, 255 , 5)',
            'rgba(0, 255, 255  , 5)',
            'rgba(0, 255, 255 , 5)',
            'rgba(0, 255, 255, 5)',
            'rgba(0, 255, 255 , 5)',
            'rgba(0, 255, 255, 3)',
            'rgba(0, 255, 255 , 5)',
            'rgba(0, 255, 255, 5)',
            'rgba(0, 255, 255 , 5)',
            'rgba(0, 255, 255, 3)',
            
        ],
        borderColor: [],
      borderWidth: 2,
        },
        {
          label: 'Q2',
          data: y2,
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
        {
        
          label: 'Q3 Format combined in 2021',
          data: y3,
          backgroundColor: [
            'rgba(0, 255, 0, 5)',
            'rgba(0, 255, 0  , 5)',
            'rgba(0, 255, 0 , 5)',
            'rgba(0, 255, 0, 5)',
            'rgba(0, 255, 0 , 5)',
            'rgba(0, 255, 0, 3)',
            'rgba(0, 255, 0 , 5)',
            'rgba(0, 255, 0, 5)',
            'rgba(0, 255, 0 , 5)',
            'rgba(0, 255, 0, 3)',
            
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
