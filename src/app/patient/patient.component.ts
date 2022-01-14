import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Gender, Patient, PatientExport, PatientService} from "./patient.service";
import {BrowserComponent} from "../browser/browser.component";


@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  id!: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  nationalIdentificationNumber: string;

  genders: Gender[] = [
    {value: 'FEMALE', viewValue: 'Féminin'},
    {value: 'MALE', viewValue: 'Masculin'},
    {value: 'OTHER', viewValue: 'Autre'},
  ];

  constructor(private patientService: PatientService, public dialogRef: MatDialogRef<BrowserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    if (data.patient == null) {
      this.firstName = "";
      this.lastName = "";
      this.birthDate = new Date(0);
      this.gender = {value: 'FEMALE', viewValue: 'Féminin'};
      this.nationalIdentificationNumber = "";
    } else {
      this.id = data.patient.id;
      this.firstName = data.patient.firstName;
      this.lastName = data.patient.lastName;
      this.birthDate = data.patient.birthDate;
      this.gender = this.genders.find(i => i.value === data.patient.gender) as Gender;
      this.nationalIdentificationNumber = data.patient.nationalIdentificationNumber;
    }
  }

  save() {
    const patient: PatientExport = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      gender: this.gender.value,
      nationalIdentificationNumber: this.nationalIdentificationNumber
    }

    this.patientService.createPatient(patient);

    this.dialogRef.close();
  }
}
