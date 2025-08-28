import { Component, input, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonInput, IonList, IonItem]
})
export class FormCardComponent implements OnInit {

  formHeader = input<string>('');
  formName = input<string>('');

  constructor() { }

  ngOnInit() { }

}
