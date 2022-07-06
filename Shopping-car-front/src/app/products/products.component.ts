import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  AddingProductsList:any = []
  Unitotal:number=0
  total:number=0
  @Input('ProductList') products:any;

  AddProduct(){
    this.AddingProductsList.push(this.products)
    this.AddingProductsList.forEach((e:any)=>{
      this.Unitotal+=parseInt(e.price)
      this.total+=this.Unitotal
    });
    console.log(this.total)
  }
  constructor() {}

  ngOnInit(): void {
  }

}
