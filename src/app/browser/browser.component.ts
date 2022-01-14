import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatPaginator} from '@angular/material/paginator';
import {Patient, PatientService} from '../patient/patient.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PatientComponent} from "../patient/patient.component";

@Component({
  selector: 'browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {
  columns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'gender', 'nationalIdentificationNumber', 'actions'];
  dataSource!: MatTableDataSource<Patient>;

  patients: Patient[] = [];

  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private patientService: PatientService) {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      this.dataSource = new MatTableDataSource(this.patients);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(patient?: Patient) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      patient: patient
    };

    const dialogRef = this.dialog.open(PatientComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(patient: Patient) {
    this.openDialog(patient);
  }

  onDelete(patient: Patient) {
  }
}
