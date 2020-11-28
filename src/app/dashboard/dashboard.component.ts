import { HttpClient, HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from './info/person';
import { PersonalInfoService } from '../services/personal-info.service';
import { FileServiceService } from '../services/file-service.service';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private personalInfo: PersonalInfoService, private fileService: FileServiceService) { }



  opt: FormControl;

  parsedJson : any;
  person: Person;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  gender: FormControl;
  ssn: FormControl;
  cellPhone: FormControl;
  alternatePhone: FormControl;

  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
  zipcode: FormControl;
  stateName: FormControl;
  stateAbbr: FormControl;

  ngOnInit() {
    this.personalInfo.get().subscribe(
        data => {
            this.parsedJson = data;
            this.person = data.person;

            console.log(this.person);
            this.email = new FormControl('', [Validators.required]);
            this.firstName = new FormControl('', [Validators.required]);
            this.lastName = new FormControl('', [Validators.required]);
            this.gender = new FormControl('', [Validators.required]);
            this.ssn = new FormControl('', [Validators.required]);
            this.cellPhone = new FormControl('', [Validators.required]);
            this.alternatePhone = new FormControl('', [Validators.required]);

            this.addressLine1 = new FormControl('', [Validators.required]);
            this.addressLine2 = new FormControl('', [Validators.required]);
            this.city = new FormControl('', [Validators.required]);
            this.zipcode = new FormControl('', [Validators.required]);
            this.stateName = new FormControl('', [Validators.required]);
            this.stateAbbr = new FormControl('', [Validators.required]);

            this.opt = new FormControl('', [Validators.required]);

        }, error => {
            console.log('Failure');
            console.log(error);
    });
  }

  updatePerson() {
      this.personalInfo.update().subscribe (
        data=>{
            console.log('update!');
        }
      )
  }

  cancelPerson() {
      this.personalInfo.get().subscribe (
        data=>{
            this.parsedJson = data;
          }
      )
  }

  // 上传文件
  selectedFiles: FileList;
  currentFileUpload: File;

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('wait...');
      } else if (event instanceof HttpResponse) {
        console.log('uploaded...');
      }
      // this.selectedFiles = undefined;
    });
  }
}
