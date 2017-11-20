import {Params, ActivatedRoute} from '.4.4.6@@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId:number;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.routeInfo.snapshot.queryParams['id']
    // this.productId = this.routeInfo.snapshot.params['id']
    this.routeInfo.params.subscribe((params:Params)=>this.productId=params["id"])
  }

}
