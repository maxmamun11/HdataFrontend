import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopCatThreeService } from 'src/app/top-cat-three.service';

@Component({
  selector: 'app-top-cat-three',
  templateUrl: './top-cat-three.component.html',
  styleUrls: ['./top-cat-three.component.css']
})
export class TopCatThreeComponent implements OnInit {
  [x: string]: any;
  categorybyformat: any[] = [];
addTwintyOneThree = new Chart('addTwintyOneThree',{})

  constructor(private tcts: TopCatThreeService) { }

  ngOnInit(): void {
    this.initTwinty()
  }
// API Functions top 10 2021 Category step three
  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tcts.maxTwintyOnetttta()
      .subscribe((response: any) => {
        if (response) {
          resolve(response);
          console.log(response);
        }
      }, (err: any) => {
        if (err) {
          reject(err);
        }
      })
    })
  }
  async initTwinty(){
    await this.getAll().then((data:any[])=>{
      let x: any[] = [];
      let y: any[] = [];
      this.categorybyformat = data;
      console.log(this.categorybyformat);
      this.categorybyformat.forEach((topTwintyOneCtgthr: {_id: any; Total: any;}) =>{
        x.push(topTwintyOneCtgthr._id.category); 
        y.push(topTwintyOneCtgthr.Total); 
      });
      this.addTwintFunction(x, y);
    }).catch((_err: any) => {
      //Error message
    })
  }

  addTwintFunction(x :any, y :any) {
    console.log('last category',x)
    console.log('last category  valu',y)
  this.addTwintyOneThree.data.datasets?.pop();
  
    this.addTwintyOneThree = new Chart('addTwintyOneThree', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 10 Category by format in 2021',
          data: y,
          backgroundColor: [
            'rgba(100, 30, 22 , 5)',
            'rgba(123, 36, 28  , 5)',
            'rgba(146, 43, 33 , 5)',
            'rgba(169, 50, 38, 5)',
            'rgba(192, 57, 43 , 5)',
            'rgba(205, 97, 85 , 5)',
            'rgba(217, 136, 128, 5)',
            'rgba( 230, 176, 170 , 5)',
            'rgba(242, 215, 213, 5)',
            'rgba(209, 242, 235 , 5)',
            'rgba(249, 235, 234, 3)',
            
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
