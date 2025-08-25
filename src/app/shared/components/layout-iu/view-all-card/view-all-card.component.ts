import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-view-all-card',
  templateUrl: './view-all-card.component.html',
  styleUrls: ['./view-all-card.component.scss'],
  imports: [IonIcon, IonButton, RouterLink]
})
export class ViewAllCardComponent  implements OnInit {

  route = input<string[]>();

  constructor() { }

  ngOnInit() {}

}
