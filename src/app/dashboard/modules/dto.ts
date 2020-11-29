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
  beLandlord: boolean;
  beReferrence: boolean;
  beEmergency: boolean;

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
  primary: boolean;

  constructor(addr: Address){
    this.addressLine1 = addr.addressLine1;
    this.addressLine2 = addr.addressLine2;
    this.city = addr.city;
    this.id = addr.id;
    this.primary = addr.primary;
    this.stateAbbr = addr.stateAbbr;
    this.stateName = addr.stateName;
    this.zipcode = addr.zipcode;
  }
}

export class Employee {

}

export class VisaStatus {

}
