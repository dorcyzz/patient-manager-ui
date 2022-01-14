import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import {AppRoutes} from './app.routes';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PatientComponent} from './patient/patient.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HistoryComponent} from './history/history.component';
import {BrowserComponent} from './browser/browser.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    HistoryComponent,
    BrowserComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    NgbModule,
    DragDropModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
