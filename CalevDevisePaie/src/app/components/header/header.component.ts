import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// title = 'Angular aavec JQuery';
  constructor() { }

  ngOnInit(): void {
  //   $('.listonglet a').mouseenter(function(){
  //   $(this).children('.listoption').css('display','block')
  // })
  // $('.listonglet a').mouseleave(function(){
  //   $(this).children('.listoption').css('display','none')
  // })
    
  }

  
}
