import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from './info/person';
import { PersonalInfoService } from './info/personal-info.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//   json = {
//     "serviceStatus": {
//         "statusCode": "SUCCESS",
//         "success": true,
//         "errorMessage": ""
//     },
//     "person": {
//         "firstName": "Tom",
//         "lastName": "Cruise",
//         "middleName": "",
//         "email": "test@123.com",
//         "cellPhone": "3214565678",
//         "alternatePhone": null,
//         "gender": "Male",
//         "ssn": "xxxxx6897",
//         "dob": null
//     },
//     "primary": {
//         "addressLine1": "Test2",
//         "addressLine2": "",
//         "city": "Oakland",
//         "zipcode": "34567",
//         "stateName": "Michigan",
//         "stateAbbr": "MI",
//         "primary": true
//     },
//     "secondary": {
//         "addressLine1": "Test1",
//         "addressLine2": "test1",
//         "city": "New York",
//         "zipcode": "53452",
//         "stateName": "New York",
//         "stateAbbr": "NY",
//         "primary": false
//     },
//     "referee": {
//         "relationship": "Friend",
//         "name": "Contact1",
//         "email": "test1@123.com",
//         "phone": "3134567890",
//         "referrence": true,
//         "emergency": false,
//         "landlord": false
//     },
//     "emergencies": [
//         {
//             "relationship": "Friend",
//             "name": "Contact2",
//             "email": "test1@123.com",
//             "phone": "3134567123",
//             "referrence": false,
//             "emergency": true,
//             "landlord": false
//         },
//         {
//             "relationship": "Relative",
//             "name": "Contact3",
//             "email": "tet3@123.com",
//             "phone": "1233132345",
//             "referrence": false,
//             "emergency": true,
//             "landlord": false
//         }
//     ]
// };



  constructor(private http:HttpClientModule, private personalInfo:PersonalInfoService) { }

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

        }, error => {
            console.log('Failure');
            console.log(error);
    });
  }

  updatePerson() {
      this.personalInfo.update(this.person).subscribe (
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
}
