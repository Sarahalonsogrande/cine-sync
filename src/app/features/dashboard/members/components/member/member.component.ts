import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonRow, IonCol, IonText, IonButton, IonIcon, IonItem, IonLabel, IonThumbnail } from "@ionic/angular/standalone";
import { InfoCardComponent } from "src/app/shared/components/layout-iu/info-card/info-card.component";
import { Member } from 'src/app/core/models';
import { MemberPersonalDetailComponent } from "../member-personal-detail/member-personal-detail.component";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  imports: [IonLabel, IonText, IonCard, IonCol, IonRow, MemberPersonalDetailComponent],
})

export class MemberComponent implements OnInit {

  member = input<Member>();

  constructor() { }

  ngOnInit() { }

}
