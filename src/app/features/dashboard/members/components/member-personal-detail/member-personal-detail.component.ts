import { Component, input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonText, IonIcon, IonButton, IonThumbnail, } from "@ionic/angular/standalone";
import { Member } from 'src/app/core/models';

@Component({
  selector: 'app-member-personal-detail',
  templateUrl: './member-personal-detail.component.html',
  styleUrls: ['./member-personal-detail.component.scss'],
  imports: [IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonIcon]
})
export class MemberPersonalDetailComponent implements OnInit {

  member = input<Member>();
  isList = input<boolean>(true);


  constructor() { }

  ngOnInit() { }

}
