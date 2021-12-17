import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CatByEnvService } from 'src/app/cat-by-env.service';


@Component({
  selector: 'app-cat-by-env',
  templateUrl: './cat-by-env.component.html',
  styleUrls: ['./cat-by-env.component.css']
})
export class CatByEnvComponent implements OnInit {
  [x: string]: any;
  categorybyenv: any[] = [];
addCatbyenv = new Chart('addCatbyenv',{})

  constructor(private cbes: CatByEnvService) { }

  ngOnInit(): void {
    this.initByenv()
  }

  // API Functions top 10 2021 Category step three
  getAllbyenv(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cbes.categoryByEnv()
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

  async initByenv(){
    await this.getAllbyenv().then((data:any[])=>{
      let x: any[] = [];
      let y: any[] = [];
      this.categorybyenv = data;
      console.log(this.categorybyenv);
      this.categorybyenv.forEach((TwintyOneCtgthre: {_id: any; Total: any;}) =>{
        x.push(TwintyOneCtgthre._id.category); 
        y.push(TwintyOneCtgthre.Total); 
      });
      this.addTwintbyevnFunction(x, y);
    }).catch((_err: any) => {
      //Error message
    })
  }

  addTwintbyevnFunction(x :any, y :any) {
    console.log('last env',x)
    console.log('last env value',y)
  this.addCatbyenv.data.datasets?.pop();
  
    this.addCatbyenv = new Chart('addCatbyenv', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 10 Category by environment at Q3 in 2021',
          data: y,
          backgroundColor: [
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',
            'rgba(84, 153, 199, 5)',


            
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
