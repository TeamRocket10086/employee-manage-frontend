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
        this.primary = new Address(this.parsedJson.primary);
        this.secondary = new Address(this.parsedJson.secondary);

        // Add emergency contacts
        this.contacts = this.parsedJson.emergencies;
        let len = this.parsedJson.emergencies.length;
        for (let i = 0; i < len; i++) {
          this.contacts[i] = new Contact(this.parsedJson.emergencies[i]);
          //console.log("Contact " + this.contacts[i].name);
        }

        this.employee = new Employee(data.employee);
      }, error => {
        console.log('Failure');
        console.log(error);
      });    
  }
  
  updatePerson() {
    this.personalInfo.updatePerson(this.myPerson).subscribe (
      data=>{
          console.log('updated person!');
          // Update perminate data, too
          this.parsedJson.person = new Person(this.myPerson);
      }
    );
    this.editPerson = false;
  }

  updateEmployment() {
    this.personalInfo.updateEmployee(this.employee).subscribe (
      data=>{
          console.log('updated Employee!');
          // Update perminate data, too
          this.parsedJson.employee = new Employee(this.employee);
      }
    );
    this.editEmployment = false;
  }

  updateAddresses() {
    this.personalInfo.updateAddress(this.primary).subscribe (
      data=>{
          console.log('updated primary!');
          // Update perminate data, too
          this.parsedJson.primary = new Address(this.primary);
      }
    );
    this.personalInfo.updateAddress(this.secondary).subscribe (
      data=>{
          console.log('updated secondary!');
          // Update perminate data, too
          this.parsedJson.secondary =  new Address(this.secondary);
      }
    );
    this.editAddress = false;
  }

  updateContacts() {
    this.personalInfo.updateContact(this.contacts).subscribe (
      data=>{
          console.log('updated contacts!');
          // Update perminate data, too
    let len = this.contacts.length;
    for (let i = 0; i < len; i++) {
      this.parsedJson.emergencies[i] = new Contact(this.contacts[i]);
    }
      }
    );
    console.log('updating contacts!');    
    this.editContacts = false;
  }
  
  resetPerson() {
    this.myPerson = new Person(this.parsedJson.person);
    //console.log(this.parsedJson.person);
    //this.myPerson.alternatePhone = "test";    
    this.editPerson = false;
  }

  resetEmployment() {
    this.employee = new Employee(this.parsedJson.employee);
    //console.log(this.parsedJson.person);
    //this.myPerson.alternatePhone = "test";    
    this.editEmployment = false;
  }

  resetAddresses() {
    this.primary = new Address(this.parsedJson.primary);
    this.secondary = new Address(this.parsedJson.secondary);
    console.log(this.parsedJson.secondary);
    this.editAddress = false;
  }

  //TODO: not work properly
  resetContacts() {
    let len = this.contacts.length;
    for (let i = 0; i < len; i++) {
      this.contacts[i] = new Contact(this.parsedJson.emergencies[i]);
      //console.log("Contact " + this.contacts[i].name);
    }
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
  


  // Upload file
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
