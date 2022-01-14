import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  nationalIdentificationNumber: string;
}

export interface PatientExport {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  nationalIdentificationNumber: string;
}

export interface Gender {
  value: string;
  viewValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getAllPatients(): Observable<any>{
    return this.http.get<Patient>("http://localhost:8080/patient/all");
  }

  createPatient(patient: PatientExport) {
    this.http.post("http://localhost:8080/patient", patient).subscribe(() => {
      console.log("Patient successfully created");
      console.log(patient);
    });
  }
}
