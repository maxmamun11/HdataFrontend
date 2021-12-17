import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CatByRegiService } from 'src/app/cat-by-regi.service';

@Component({
  selector: 'app-cat-by-regi',
  templateUrl: './cat-by-regi.component.html',
  styleUrls: ['./cat-by-regi.component.css']
})
export class CatByRegiComponent implements OnInit {
  [x: string]: any;
  categorybyRegi: any[] = [];
addCatbyRegi = new Chart('addCatbyRegi',{})

  constructor(private cbrs: CatByRegiService ) { }

  ngOnInit(): void {
    this.initByregi()
  }
// API Functions top 10 2021 Category step three
getAllbyRegi(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.cbrs.categoryByReg()
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


async initByregi(){
  await this.getAllbyRegi().then((data:any[])=>{
    let x: any[] = [];
    let y: any[] = [];
    this.categorybyRegi = data;
    console.log(this.categorybyRegi);
    this.categorybyRegi.forEach((TwintyOneCtgregithre: {_id: any; Total: any;}) =>{
      x.push(TwintyOneCtgregithre._id.category); 
      y.push(TwintyOneCtgregithre.Total); 
    });
    this.addTwintbyregiFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })
}

addTwintbyregiFunction(x :any, y :any) {
  console.log('last region total',x)
  console.log('last region value',y)
this.addCatbyRegi.data.datasets?.pop();

  this.addCatbyRegi = new Chart('addCatbyRegi', {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Top 10 Category by Region in 2021',
        data: y,
        backgroundColor: [
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          'rgba(155, 89, 182 , 5)',
          
          
          
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
