import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-car-front';
  public ProductList:Array<any> = []
  public Redirect:boolean = false

  constructor(private Restservice:RestService){

  }
  ngOnInit(): void{
    this.GetData()
  }
  public SendData(data:any){
    this.Restservice.postAPIData(data).subscribe((r:any)=>{
      console.log(r)
    })
  }
  public GetData(){
    this.Restservice.get('http://127.0.0.1:8000/shopping_car/').subscribe((r:any)=>{
      this.ProductList = r
      console.log(r)
    })
  }
}
