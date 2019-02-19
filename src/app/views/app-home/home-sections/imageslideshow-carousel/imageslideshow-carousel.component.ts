import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../../../../shared/animations/slider.animations';

@Component({
  selector: 'app-imageslideshow-carousel',
  templateUrl: './imageslideshow-carousel.component.html',
  styles: [],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageslideshowCarouselComponent implements OnInit {
  public carouselOptions: NguCarouselConfig;
  public items = [
  {
    icon: 'dashboard',
    image: 'assets/images/slides/slide1.jpg',
    text: `Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.`,
    title: 'ANGULAR BLUE SINCE 2019. Awesomeness of the web',
    subtitle: 'Lorem ipsum dolor sit amet conse ctetur',
    features: [
      '100+ Custom Pipes, Directives And Components', 
      '4 color Themes and multi language support',
      'Super Flexible And Customizable'
    ]
  },
  {
    icon: 'pages',
    image: 'assets/images/slides/slide2.jpg',
    text: `Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.`,
    title: 'WHY US - AWESOMENESS! We build for the future and present',
    subtitle: 'Lorem ipsum dolor sit amet conse ctetur',
    features: [
      '100+ Custom Pipes, Directives And Components', 
      '4 color Themes and multi language support',
      'Super Flexible And Customizable'
    ]
  },
  {
    icon: 'send',
    image: 'assets/images/slides/slide3.jpg',
    text: `Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.`,
    title: 'WHAT THEY ARE SAYING - AWESOMENESS AND WEBENESS',
    subtitle: 'Lorem ipsum dolor sit amet conse ctetur',
    features: [
      '100+ Custom Pipes, Directives And Components', 
      '4 color Themes and multi language support',
      'Super Flexible And Customizable'
    ]
  }
]

constructor(){}

ngOnInit() {
  this.carouselOptions = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 2,
    speed: 400,
    interval: { timing: 4000 },
    animation: 'lazy',
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true
  }
}
}
