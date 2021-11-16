import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopCatTwService } from 'src/app/top-cat-tw.service';


@Component({
  selector: 'app-top-cat-twinty',
  templateUrl: './top-cat-twinty.component.html',
  styleUrls: ['./top-cat-twinty.component.css']
})
export class TopCatTwintyComponent implements OnInit {
  [x: string]: any;
  cats:any[]=[];//step one
  adCattChart = new Chart('acattChat', {}); // step twochart variable diclaration 


  constructor(private tts: TopCatTwService) { }

  ngOnInit(): void {
    this.initCatt();// step six
  }


  // API Functions top 5 2020 categories step three
  getAllCatt(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.tts.maxCatt()
        .subscribe(response => {
          if (response) { 
            resolve(response);
            // console.log(response);
          }
        }, err => {
          if (err) {
            reject(err);
          }
        });
      });
    }
// step four
async initCatt() {
  await this.getAllCatt().then((data: any[]) =>{
    let x: any[] = [];
    let y: any[] = [];

    this.cats = data;
    // console.log(this.cats);

    this.cats.forEach((Catt: { _id: any; Total: any;}) =>{
      x.push(Catt._id);
      y.push(Catt.Total);
    });
    this.adCattChartFunction(x, y);
  }).catch((_err: any) => {
    //Error message
  })

}

 //step five
    adCattChartFunction(x :any, y :any) {
      // console.log(x)
      // console.log(y)
   this.adCatChart.data.datasets?.pop();
    
      this.adCatChart = new Chart('myChart', {
        type: 'bar',
        data: {
          datasets: [{
            label: 'Top 10 Category in 2020',
            data: y,
            backgroundColor: [
              'rgba( 14, 98, 81, 5)',
              'rgba(17, 120, 100, 5)',
              'rgba(23, 165, 137, 5)',
              'rgba(26, 188, 156, 5)',
              'rgba(118, 215, 196, 5)',
              'rgba(255, 159, 64, 3)',
              
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
