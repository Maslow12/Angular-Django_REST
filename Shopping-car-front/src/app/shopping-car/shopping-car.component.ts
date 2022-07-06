import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input, Output } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {

@Output() output:any;

  constructor(private MainComponent:AppComponent) {
  }
  public LoadData(data:any){
    this.MainComponent.SendData(data)
    this.refresh()
  }
  ngOnInit(): void {
  }
  refresh(): void {
    window.location.reload();
}
  
}
