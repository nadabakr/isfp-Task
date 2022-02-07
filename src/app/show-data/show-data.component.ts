import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { profileData } from '../shared/profile-data.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent implements OnInit, OnDestroy {
  dataSub!: Subscription;
  data: profileData[] = [];
  constructor(
    private profileServ: ProfileService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataSub = this.profileServ.dataChanged.subscribe(
      (data: profileData[]) => {
        this.data = data;
        console.log(data);
      }
    );
    this.dataStorage.fetchData().subscribe();
  }
  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
