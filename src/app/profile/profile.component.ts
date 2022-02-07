import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataStorageService } from '../shared/data-storage.service';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  militaryStatus: string[] = [
    'Temporary  delay',
    'Temporary examption',
    'Final dismissal',
    'Ended military service',
  ];
  genders: string[] = ['male', 'female'];
  db!: NgbDateStruct;
  profileForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private profileServ: ProfileService,
    private dataStorage: DataStorageService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onSave() {
    this.profileServ.addData(this.profileForm.value);
    this.dataStorage.storeData();
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }
  get profileFormControls() {
    return this.profileForm.controls;
  }
  onSelectGender() {
    if (this.profileForm.value.gender == 'female') {
      this.profileForm.get('status')?.removeValidators(Validators.required);
      this.profileForm.get('status')?.updateValueAndValidity();
    } else {
      this.profileForm.get('status')?.addValidators(Validators.required);
      this.profileForm.get('status')?.updateValueAndValidity();
    }
  }
  onShow() {
    this.router.navigate(['/data']);
  }
}
