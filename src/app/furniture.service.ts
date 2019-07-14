import { Injectable } from '@angular/core';
import { FURNITURES } from './furniture-data'
import { of, Observable } from 'rxjs';
import { Furniture } from './models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor() { }


  getFurnitures(): Observable<Furniture[]> {
   
    return of(FURNITURES);
  }

  getFurniture(id: number): Observable<Furniture> {
   
    return of(FURNITURES.find(furniture => furniture.id === id));
  }
}
