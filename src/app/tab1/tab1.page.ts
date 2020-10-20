import { Component, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  @Input('header') header:any;
  lastX:any;


  constructor(public renderer:Renderer2) {}

  ionScrolling( event){
    if(event.detail.scrollTop > Math.max(0, this.lastX)){
      console.log('hide header',event.detail.scrollTop)
    this.renderer.setStyle(this.header,'margin-top','-65px')
    this.renderer.setStyle(this.header,'transition','margin-top 2ms')
    }
    else{
      console.log('show header')
      this.renderer.setStyle(this.header,'margin-top','0')
    }
    this.lastX = event.detail.scrollTop;

  }
  ionScrollStar(header){
    this.header=header.el;
    console.log(this.header)

  }

}
