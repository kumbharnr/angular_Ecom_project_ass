import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //property
  public totalItem:number=0;
  public searchTerm:string="";

  
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    //count the added items in the list and show on badge
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;

    })

  }
  
  varIsLoggedIn="isLoggedIn";
  login()
  {
    localStorage.setItem(this.varIsLoggedIn,'true')
  }
  //search the items from products for header 
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }

}
