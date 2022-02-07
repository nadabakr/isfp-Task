import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { profileData } from './profile-data.model';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private profileServ: ProfileService) {}

  storeData() {
    const data = this.profileServ.getData();
    this.http
      .put(
        'https://profileauth-22859-default-rtdb.firebaseio.com/data.json',
        data
      )
      .subscribe(
        (resposeData) => {
          console.log(resposeData);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  fetchData() {
    return this.http
      .get<profileData[]>(
        'https://profileauth-22859-default-rtdb.firebaseio.com/data.json'
      )
      .pipe(
        map((data) => {
          return data.map((data) => {
            return {
              ...data,
            };
          });
        }),
        tap((data) => {
          this.profileServ.setData(data);
        })
      );
  }
}
