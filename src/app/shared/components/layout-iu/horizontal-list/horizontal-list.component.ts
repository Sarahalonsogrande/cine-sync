import { NgTemplateOutlet } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit, ElementRef, TemplateRef, viewChild, output } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone'
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
  imports: [NgTemplateOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HorizontalListComponent<T> implements OnInit {

  config = input<{
    slidesPerView: number;
    spaceBetween?: number;
    // keyboard?: boolean;
    // mousewheel?: boolean;
    // pagination?: any;
    // navigation?: boolean;
    // intialSlide?: number;
    // centeredSlides?: boolean;
    // initialSlide?: number;
    // autoplay?: boolean;
    // loop?: boolean;
    // breakpoints?: {
    //  [key: string]: {
    //    slidesPerView: number;
    //    spaceBetween?: number;
    //  };
    // };
  }>();

  isFirstItem = input<boolean>(false);
  firstItemTemplate = input<TemplateRef<any>>();
  isViewAll = input<boolean>(true);
  viewAllTemplate = input<TemplateRef<any>>();

  slideChanged = output<number>();

  swiperModules = [IonicSlides];
  swiperRef = viewChild<ElementRef>('swiper');

  itemTemplate = input.required<TemplateRef<{ $implicit: T }>>();
  readonly items = input.required<T[]>();

  // currentIndex: any;

  constructor() { }

  ngOnInit() {}

  onSlideChange() {
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    const currentIndex = swiperElement.activeIndex;

    // if (currentIndex >= 0) this.currentIndex.set(currentIndex);

    console.log(currentIndex);

    this.slideChanged.emit(currentIndex);

  }

  slideTo(index: number) {
    console.log('index: ', index);
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    swiperElement.slideTo(index, 300, false);
    swiperElement.update();

    this.slideChanged.emit(index);
  }
}
