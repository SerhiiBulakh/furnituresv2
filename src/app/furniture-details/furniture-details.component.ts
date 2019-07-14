import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../models/furniture';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
 
  furniture: Furniture
  items: Array<any> = []




  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFurniture();
    console.log(this.items)
    
  }

  getFurniture(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.furnitureService.getFurniture(id)
      .subscribe(data => {
        this.furniture = data
        this.items = data.img
       
      });
  }

}
