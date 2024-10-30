import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CzechAppComponent } from './czech-app/czech-app.component';
import { EnglishAppComponent } from './english-app/english-app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: EnglishAppComponent
  },
  {
    path: 'cz',
    component: CzechAppComponent
  },
  {
    path: 'en',
    component: EnglishAppComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
