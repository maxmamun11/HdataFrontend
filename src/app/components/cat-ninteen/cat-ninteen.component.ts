
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TopCatNSService } from 'src/app/top-cat-ns.service';


@Component({
  selector: 'app-cat-ninteen',
  templateUrl: './cat-ninteen.component.html',
  styleUrls: ['./cat-ninteen.component.css']
})
export class CatNinteenComponent implements OnInit {
  [x: string]: any;
  categories: any[] = [];// step one
  adCatChart = new Chart('acatChat', {}); // step 1 chart variable diclaration 
  

  constructor(private tcs: TopCatNSService ) { } //step two add service file

  ngOnInit(): void {
    this.initCategory();

  }


  // API Functions top 5 2019 categories step three
 getCategory(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.tcs.maxCat()
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
// step four
 async initCategory() {
        await this.getCategory().then((data: any[]) =>{
          let x: any[] = [];
          let y: any[] = [];
    
          this.categories = data;
          console.log(this.catagories);
    
          this.categories.forEach((Bro: { _id: any; Total: any;}) =>{
            x.push(Bro._id);
            y.push(Bro.Total);
          });
          this.adCategoryChartFunction(x, y);
        }).catch((_err: any) => {
          //Error message
        })
    
      }

      //step five
  adCategoryChartFunction(x :any, y :any) {
    // console.log(x)
    // console.log(y)
 this.adCatChart.data.datasets?.pop();
  
    this.adCatChart = new Chart('Chart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Top 5 Category in 2019',
          data: y,
          backgroundColor: [
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
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
