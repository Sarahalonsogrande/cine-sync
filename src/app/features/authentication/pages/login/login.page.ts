import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItemGroup, IonItemDivider, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';
import { FormCardComponent } from "src/app/shared/components/layout-iu/form-card/form-card.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonLabel, IonItemDivider, IonItemGroup, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterOutlet, FormCardComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
