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
  /*
    Swiper/Ionic modules used by the slider.
    Pass this to the swiper-container in the template for proper functionality.
  */
  swiperModules = [IonicSlides];


  /*
    Reference to the swiper element in the template.
    Used to control the slider programmatically.
  */
  swiperRef = viewChild<ElementRef>('swiper');
  /*
    Swiper slider configuration (slidesPerView, spaceBetween...)
    Example: { slidesPerView: 1.6, spaceBetween: 20 }
  */
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

  /*
    Displays a special slide at the beginning using the firstItemTemplate (Optional).
    Template for the special First Item, useful for highlighting an item or showing a banner.
  */
  isFirstItem = input<boolean>(false);
  firstItemTemplate = input<TemplateRef<any>>();

  /*
    Template for rendering each item in the slider.
    Usage: <ng-template #item let-item let-index="index">...</ng-template>
  */
  itemTemplate = input.required<TemplateRef<{ $implicit: T, index: number }>>();
  /*
    Array of items to display in the slider.
  */
  readonly items = input.required<T[]>();

  /*
    Displays a special slide at the end using the isViewAllTemplate (Optional).
    Useful for providing access to a full list or an extra section.
  */
  isViewAll = input<boolean>(true);
  viewAllTemplate = input<TemplateRef<any>>();

  /*
    Event emitted when the active slide changes.
    Returns the current slide index.
  */
  slideChanged = output<number>();

  swiperModules = [IonicSlides];
  swiperRef = viewChild<ElementRef>('swiper');

  itemTemplate = input.required<TemplateRef<{ $implicit: T }>>();
  readonly items = input.required<T[]>();

  // currentIndex: any;

  constructor() { }

  ngOnInit() { }

  /*
    Called when the user changes the active slide.
    Emits the slideChanged event with the current index.
  */
  onSlideChange() {
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    const currentIndex = swiperElement.activeIndex;

    // Optionally, you could store the current index in a reactive variable here.
    // if (currentIndex >= 0) this.currentIndex.set(currentIndex);
    // if (currentIndex >= 0) this.currentIndex.set(currentIndex);

    console.log(currentIndex);

    // this.slideChanged.emit(currentIndex);
  }

  /*
    Moves the slider to the specified slide index programmatically.
    Also emits the slideChanged event with the new index.
    @param index The index of the slide to move to.
  */
  slideTo(index: number) {
    console.log('index: ', index);
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    swiperElement.slideTo(index, 300, false);
    swiperElement.update();

    // this.slideChanged.emit(index);
  }
}
