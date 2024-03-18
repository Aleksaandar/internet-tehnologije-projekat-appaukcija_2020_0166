import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UserLogoutService } from '../user-logout/user-logout.service';
import { LoginResponse } from '../user-login/login-response';
import { GetItemsService } from '../items/get-items.service';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Auction } from '../models/auction';
import moment from 'moment';
import { AuctionService } from '../services/auction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  auctions!: Auction[];
  public user!: LoginResponse | null;
  userToken!: string;
  itemsAuctions: Item[] = [];
  items: Item[] = [];
  itemsGotovo: Item[] = [];
  p: number = 1;
  i: number = 0;
  itemsPerPage: number = 6;
  totalProduct: any;
  constructor(private itemSerivce: ItemsService, private route: ActivatedRoute, private logOutService: UserLogoutService,
    private getItemService: GetItemsService, private getAuctionService: GetAuctionsService, private auctionService: AuctionService) {
    this.items = this.itemSerivce.getAll();
  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.auctions = data['auctionsData'];
    })
    this.route.data.subscribe(data => {
      this.items = data['itemsData'];
    })
    this.itemSerivce.setData(this.items);

    this.auctionService.setData(this.auctions);


    this.getItems();
    this.route.params.subscribe(params => {
      debugger;
      if (params['searchTerm']) {
        this.items = this.itemSerivce.getAll().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
        this.itemsGotovo = this.itemSerivce.getAllGotovo().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
      }

      else
        this.items = this.itemSerivce.getAll();
      this.itemsGotovo = this.itemSerivce.getAllGotovo();
    })


    //setInterval(() => this.updateItem(), 1000);
  }
  updateItem() {

    this.items.forEach(element => {
      if (moment(element.preostaloVreme) <= moment()) {
        this.itemSerivce.addItemGotovo(element);
        const indexToRemove = this.items.indexOf(element);
        if (indexToRemove !== -1) {
          this.items.splice(indexToRemove, 1);
        }


      }
    });
  }
 
  getItems() {
    this.itemsAuctions = [];

    this.auctions.forEach(element => {
      this.itemsAuctions.push(this.itemSerivce.getItemsByAuction(element));
      
    });

  }


}
