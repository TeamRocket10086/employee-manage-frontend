export class Person {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  dob: string;
  ssn: string;
  cellPhone: string;
  alternatePhone: string;
  age: number;

  constructor(p : Person) {
    this.email = p.email;
    this.firstName = p.firstName;
    this.lastName = p.lastName;
    this.middleName = p.middleName;
    this.gender = p.gender;
    this.dob = p.dob;
    this.ssn = p.ssn;
    this.cellPhone = p.cellPhone;
    this.alternatePhone = p.alternatePhone;
    this.age = p.age;
  }
}

export class Contact {
  id: number = 0;
  relationship: string;
  name: string;
  email: string;
  phone: string;
  beLandlord: Boolean;
  beReferrence: Boolean;
  beEmergency: Boolean;

  constructor(c : Contact) {
    this.id = c.id;
    this.beEmergency = c.beEmergency;
    this.beLandlord = c.beLandlord;
    this.beReferrence = c.beReferrence;
    this.email = c.email;
    this.name = c.name;
    this.phone = c.phone;
    this.relationship = c.relationship;
  }
}

export class Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipcode: string;
  stateName: string;
  stateAbbr: string;
  id: number = 0;
  bePrimary: boolean;

  constructor(addr: Address){
    this.addressLine1 = addr.addressLine1;
    this.addressLine2 = addr.addressLine2;
    this.city = addr.city;
    this.id = addr.id;
    this.bePrimary = addr.bePrimary;
    this.stateAbbr = addr.stateAbbr;
    this.stateName = addr.stateName;
    this.zipcode = addr.zipcode;
  }
}

/*
"employee": {
        "title": "Backend Engineer",
        "startDate": "2019-11-28",
        "endDate": "2020-11-28",
        "avatar": "",
        "car": "Camry",
        "visaStartDate": "2020-3-1",
        "visaEndDate": "2021-3-1",
        "driverLicense": "Er56828923",
        "driverLicenseExpirationDate": "2021-03-01",
        "eid": 1,
        "visaTitle": "F1/OPT"
    }
*/
export class Employee {
  eid: number = 0;
  title: string;
  startDate: string;
  endDate: string;
  avatar: string;
  car: string;
  visaStartDate: string;
  visaEndDate: string;
  driverLicense: string;
  driverLicenseExpirationDate: string;
  visaTitle: string;

  constructor(emp: Employee){
    this.eid = emp.eid;
    this.title = emp.title;
    this.startDate = emp.startDate;
    this.endDate = emp.endDate;
    this.avatar = emp.avatar;
    this.car = emp.car;
    this.visaStartDate = emp.visaStartDate;
    this.visaEndDate = emp.visaEndDate;
    this.driverLicense = emp.driverLicense;
    this.driverLicenseExpirationDate = emp.driverLicenseExpirationDate;
    this.visaTitle = emp.visaTitle;
  }
}

export class VisaStatus {

}
