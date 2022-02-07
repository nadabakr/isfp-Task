import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { profileData } from './profile-data.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileData: profileData[] = [];
  dataChanged = new Subject<profileData[]>();
  constructor() {}
  setData(data: profileData[]) {
    this.profileData = data;
    this.dataChanged.next(this.profileData);
  }
  getData() {
    return this.profileData;
  }
  addData(data: profileData) {
    this.profileData.push(data);
    this.dataChanged.next(this.profileData);
  }
}
