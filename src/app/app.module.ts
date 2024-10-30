import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishAppComponent } from './english-app/english-app.component';
import { CzechAppComponent } from './czech-app/czech-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppLanguagePickerComponent } from './components/app-language-picker/app-language-picker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EnglishAppComponent,
    CzechAppComponent,
    NotFoundComponent,
    AppLanguagePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
