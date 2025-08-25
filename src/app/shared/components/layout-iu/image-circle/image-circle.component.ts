import { Component, input, OnInit } from '@angular/core';
import { IonAvatar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-info-card',
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss'],
  imports: [IonAvatar, ]
})
export class ImageCircleComponent  implements OnInit {

  image = input<string>('');
  constructor() { }

  ngOnInit() {}

}
