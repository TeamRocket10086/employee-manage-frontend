import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../services/personal-info.service';
import { Person, Employee, Contact, Address, VisaStatus } from './modules/dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    /*
  json = {
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

  constructor(private http:HttpClientModule, private personalInfo:PersonalInfoService) { }
  
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
          console.log('update!');
          // Update perminate data, too
          this.parsedJson.person = this.myPerson;
      }
    );
    this.editPerson = false;
  }
  
  resetPerson() {
    this.editPerson = false;
    this.myPerson = new Person(this.parsedJson.person);
    console.log(this.parsedJson.person);
    //this.myPerson.alternatePhone = "test";
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
  
}
