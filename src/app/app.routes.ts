import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from "./history/history.component";
import {LoginComponent} from './login/login.component';
import {PatientComponent} from "./patient/patient.component";
import {BrowserComponent} from "./browser/browser.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: BrowserComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
