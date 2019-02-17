import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samyak';
  dataObject:any=[];
  constructor( private _base:ServiceService )
  {}

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this._base.getData().subscribe(res=>{
      this.dataObject = res;
      console.log(this.dataObject);
    })
  }
  sort()
  {
    this.dataObject=[];
    this._base.sortData().subscribe(res=>{
      this.dataObject = res;
      console.log(this.dataObject);
    })
  }
}
