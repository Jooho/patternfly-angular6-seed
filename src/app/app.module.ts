import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {VerticalNavigationModule} from 'patternfly-ng';
import {BsDropdownConfig, BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {VerticalNavigationExampleComponent} from './vertical-navigation-example/vertical-navigation-example.component';

// NGX Bootstrap

const route: Routes = [
  {path: 'verticalnavigation', component: VerticalNavigationExampleComponent}
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    VerticalNavigationExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    VerticalNavigationModule,  RouterModule.forRoot(route),BsDropdownModule.forRoot()
  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
