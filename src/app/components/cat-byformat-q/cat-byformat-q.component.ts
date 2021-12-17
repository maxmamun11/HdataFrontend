import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CatByformatQService } from 'src/app/cat-byformat-q.service';

@Component({
  selector: 'app-cat-byformat-q',
  templateUrl: './cat-byformat-q.component.html',
  styleUrls: ['./cat-byformat-q.component.css']
})
export class CatByformatQComponent implements OnInit {
  [x: string]: any;
  categorybyformatq: any[] = [];
addCatbyformatq = new Chart('addCatbyformatq',{})

  constructor(private cbqs: CatByformatQService) { }

  ngOnInit(): void {
    this.initByformaq()
  }

  // API Functions top 10 2021 Category step three
  getAllbyformatq(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cbqs.maxTwintyOnef()
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


  async initByformaq(){
    await this.getAllbyformatq().then((data:any[])=>{
      let x: any[] = [];
      let y: any[] = [];
      this.categorybyformatq = data;
      console.log(this.categorybyformatq);
      this.categorybyformatq.forEach((topTwintyOneCtgthre: {_id: any; Q3: any;}) =>{
        x.push(topTwintyOneCtgthre._id.category); 
        y.push(topTwintyOneCtgthre.Q3); 
      });
      this.addTwintbyformatFunction(x, y);
    }).catch((_err: any) => {
      //Error message
    })
  }

  addTwintbyformatFunction(x :any, y :any) {
    console.log('last format',x)
    console.log('last format value',y)
  this.addCatbyformatq.data.datasets?.pop();
  
    this.addCatbyformatq = new Chart('addCatbyformatq', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 10 Category by format at Q3 in 2021',
          data: y,
          backgroundColor: [
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            'rgba(159, 226, 191 , 5)',
            
            
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
