import { Component, OnInit } from '@angular/core';
import { CatByRegistackService } from 'src/app/cat-by-registack.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-cat-by-registack',
  templateUrl: './cat-by-registack.component.html',
  styleUrls: ['./cat-by-registack.component.css']
})
export class CatByRegistackComponent implements OnInit {
  [x: string]:any;
  stackRegi: any [] = [];
  addtwintyStackRegi = new Chart ('addtwintyStackRegi', {});

  constructor(private cbrss: CatByRegistackService) { }

  ngOnInit(): void {
    this.initTwintyOneStackRegi()
  }


  getAllTwintyoneStackRegi(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cbrss.maxTwintyOneStack()
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

  async initTwintyOneStackRegi(){
    await this.getAllTwintyoneStackRegi().then((data:any[])=>{
      let x: any[] = [];
      let y1: any[] = []; 
      let y2: any[] = []; 
      let y3: any[] = []; 
      console.log('stack of region',data);
     
      this.stack = data;
      console.log('stack region value ',this.stack);
      this.stack.forEach((Twintyregi: { _id: { category: any; }; Q1: any; Q2: any; Q3: any; }) => {
        x.push(Twintyregi._id.category); 
        y1.push(Twintyregi.Q1);    
        y2.push(Twintyregi.Q2);    
        y3.push(Twintyregi.Q3);  
      });
      console.log('x', x)
      console.log('y', y2)
      this.stackRegiChartFunction(x, y1, y2, y3);
    })
    .catch((_err: any) => {
      //Error message
    });
  }



  stackRegiChartFunction(x: any[], y1: any[], y2: any[], y3: any[]) {
    console.log(x, y1, y2, y3)
  this.addtwintyStackRegi.data.datasets?.pop();
  
    this.addtwintyStackRegi = new Chart('addtwintyStackRegi', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Q1',
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
        
          label: 'Q3 Region combined in 2021',
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
