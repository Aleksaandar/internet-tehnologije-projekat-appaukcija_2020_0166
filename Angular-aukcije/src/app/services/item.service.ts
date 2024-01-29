import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  getItemById(id: number): Item {
    return this.getAll().find(item => item.id == id)!;
  }

  getAll(): Item[] {
    return [
      {
        id: 1,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      {
        id: 2,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      {
        id: 3,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      {
        id: 4,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      {
        id: 5,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      {
        id: 6,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetnaCena: 130,
        trenutnaCena: 180,
        imageUrl: '/assets/images/item1.jpg',
      },
      
    ]
  }
}
