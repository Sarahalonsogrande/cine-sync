import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MemberComponent } from "../../components/member/member.component";
import { Member } from 'src/app/core/models';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MemberComponent]
})
export class MembersPage implements OnInit {

  members = signal<Member[]>([]);
  private memberService = inject(MemberService);

  constructor() { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members.set(this.memberService.getMembers());
  }

}
