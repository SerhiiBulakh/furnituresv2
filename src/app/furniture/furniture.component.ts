import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../models/furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  furnitures: Furniture[]

  constructor(
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.getFurnitures()
    
  }

  getFurnitures(): void {
    this.furnitureService.getFurnitures()
        .subscribe( (data) => this.furnitures = data)
  }
}
