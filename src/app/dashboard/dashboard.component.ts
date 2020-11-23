import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../services/personal-info.service';

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
        "dob": null
    },
    "primary": {
        "addressLine1": "Test2",
        "addressLine2": "",
        "city": "Oakland",
        "zipcode": "34567",
        "stateName": "Michigan",
        "stateAbbr": "MI",
        "primary": true
    },
    "secondary": {
        "addressLine1": "Test1",
        "addressLine2": "test1",
        "city": "New York",
        "zipcode": "53452",
        "stateName": "New York",
        "stateAbbr": "NY",
        "primary": false
    },
    "referee": {
        "relationship": "Friend",
        "name": "Contact1",
        "email": "test1@123.com",
        "phone": "3134567890",
        "referrence": true,
        "emergency": false,
        "landlord": false
    },
    "emergencies": [
        {
            "relationship": "Friend",
            "name": "Contact2",
            "email": "test1@123.com",
            "phone": "3134567123",
            "referrence": false,
            "emergency": true,
            "landlord": false
        },
        {
            "relationship": "Relative",
            "name": "Contact3",
            "email": "tet3@123.com",
            "phone": "1233132345",
            "referrence": false,
            "emergency": true,
            "landlord": false
        }
    ]
};*/

//JsonData = JSON.stringify(this.json);
//parsedJson = JSON.parse(this.JsonData);
parsedJson : any;

  constructor(private http:HttpClientModule, private personalInfo:PersonalInfoService) { }
  
  ngOnInit() {
    this.personalInfo.getAll().subscribe(data => {
        console.log('Success');
        //console.log(data);
        this.parsedJson = data; //JSON.parse(data);
        console.log("With Parsed JSON :" , this.parsedJson);
      }, error => {
        console.log('Failure');
        console.log(error);
      });
    
  }

//   reqData(){ 
//     var url = "";
// ​
//     var _that = this;
// ​
//     this.http.get(url).subscribe( res=>{
//       _that.json = res;
//     }

//   )};
  
}
