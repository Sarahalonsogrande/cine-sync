import { Injectable } from '@angular/core';
import { members } from 'src/app/data/mock/members.data';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers() {
    return members;
  }

}
