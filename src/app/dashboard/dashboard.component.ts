import { HttpClient, HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalInfoService } from '../services/personal-info.service';
import { Person, Employee, Contact, Address, VisaStatus } from './modules/dto';
import { FileServiceService } from '../services/file-service.service';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    /*
  /*json = {
    "serviceStatus": {
        "statusCode": "SUCCESS",
        "success": true,
        "errorMessage": ""
    },
    "person": {
        "firstName": "Tom",
        "lastName": "Cruise",
        "middleName": "",
        "email": "test@123.com",
        "cellPhone": "3214565678",
        "alternatePhone": null,
        "gender": "Male",
        "ssn": "xxxxx6897",
        "dob": "1980-02-03",
        "age": 40
    },
    "primary": {
        "addressLine1": "Test2",
        "addressLine2": "",
        "city": "Oakland",
        "zipcode": "34567",
        "stateName": "Michigan",
        "stateAbbr": "MI",
        "id": 3,
        "primary": true
    },
    "secondary": {
        "addressLine1": "Test1",
        "addressLine2": "test1",
        "city": "New York",
        "zipcode": "53452",
        "stateName": "New York",
        "stateAbbr": "NY",
        "id": 2,
        "primary": false
    },
    "referee": {
        "relationship": "Friend",
        "name": "Contact1",
        "email": "test1@123.com",
        "phone": "3134567890",
        "id": 1,
        "landlord": false,
        "referrence": true,
        "emergency": false
    },
    "emergencies": [
        {
            "relationship": "Friend",
            "name": "Contact2",
            "email": "test1@123.com",
            "phone": "3134567123",
            "id": 4,
            "landlord": false,
            "referrence": false,
            "emergency": true
        },
        {
            "relationship": "Relative",
            "name": "Contact3",
            "email": "tet3@123.com",
            "phone": "1233132345",
            "id": 5,
            "landlord": false,
            "referrence": false,
            "emergency": true
        }
    ]
};*/
  constructor(private http: HttpClient, private personalInfo: PersonalInfoService, private fileService: FileServiceService) { }

parsedJson : any; // save the perminant values
myPerson : Person; // show and reset data for users
primary : Address;
secondary : Address;
contacts : Contact[];
employee : Employee;
visa : VisaStatus;
editPerson : boolean = false;
editAddress : boolean = false;
editEmployment : boolean = false;
editContacts : boolean = false;
//opt: FormControl;


  ngOnInit() {
    this.personalInfo.getPersonalInfo().subscribe(data => {
        console.log('Success');
        //console.log(data);
        this.parsedJson = data; //JSON.parse(data);
        console.log("With Parsed JSON :" , this.parsedJson.person);
        this.myPerson = new Person(this.parsedJson.person);
        this.primary = data.primary;
        this.secondary = data.secondary;
        this.contacts = data.emergencies;
        this.employee = data.employee;
      }, error => {
        console.log('Failure');
        console.log(error);
      });
  }

  updatePerson() {
    this.personalInfo.updatePerson(this.myPerson).subscribe (
      data=>{
          console.log('update person!');
          // Update perminate data, too
          this.parsedJson.person = this.myPerson;
      }
    );
    this.editPerson = false;
  }

  updateAddresses() {
    this.personalInfo.updateAddress(this.primary).subscribe (
      data=>{
          console.log('update primary!');
          // Update perminate data, too
          this.parsedJson.primary = this.primary;
      }
    );
    this.personalInfo.updateAddress(this.secondary).subscribe (
      data=>{
          console.log('update secondary!');
          // Update perminate data, too
          this.parsedJson.secondary = this.secondary;
      }
    );
    this.editAddress = false;
  }

  updateContacts() {
    this.personalInfo.updateContact(this.contacts).subscribe (
      data=>{
          console.log('updating contacts!');
      }
    );
    console.log('updated contacts!');
    // Update perminate data, too
    this.parsedJson.contacts = this.contacts;
    this.editContacts = false;
  }

  resetPerson() {
    this.myPerson = new Person(this.parsedJson.person);
    //console.log(this.parsedJson.person);
    //this.myPerson.alternatePhone = "test";
    this.editPerson = false;
  }

  resetAddresses() {
    this.primary = new Address(this.parsedJson.primary);
    this.secondary = new Address(this.parsedJson.secondary);
    console.log(this.parsedJson.primary);
    this.editAddress = false;
  }

  resetContacts() {
    //TODO
    this.editContacts = false;
  }

  showPersonEditor() {
    this.editPerson = true;
  }

  showAddressEditor() {
    this.editAddress = true;
  }

  showEmploymentEditor() {
    this.editEmployment = true;
  }

  showContactsEditor() {
    this.editContacts = true;
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
