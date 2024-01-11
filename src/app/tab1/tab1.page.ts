import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}

 
  lohin() {
    this.router.navigate(['login'])
  }

  pmb(){
    this.router.navigate(['/tab1'])
  }

  pencai(){
    this.router.navigate(['/tab2'])
  }

  mahasis(){
    this.router.navigate(['/tab3'])
  }

  stat(){
    this.router.navigate(['/tab4'])
  }

  profilep(){
    this.router.navigate(['/tab5'])
  }

 
}
