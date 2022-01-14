import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;

  opened: boolean = false;

  constructor() {
  }

  clickHandler() {
    this.sidenav.close();
  }

}
