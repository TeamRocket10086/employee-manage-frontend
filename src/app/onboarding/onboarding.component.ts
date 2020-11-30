import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient, HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { PersonalInfoService } from '../services/personal-info.service';
import { Person, Employee, Contact, Address, VisaStatus } from './modules/dto';
import { FileServiceService } from '../services/file-service.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  



ngOnInit() {
    
    
}


}
