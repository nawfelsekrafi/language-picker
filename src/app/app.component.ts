import { Router } from '@angular/router';
import { AppLanguagePickerComponent } from './components/app-language-picker/app-language-picker.component';
import { LanguageService } from './services/language.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'language-app';
  userLanguage: string = '';

  constructor(private languageService: LanguageService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.userLanguage = this.languageService.getUserLanguage();
    /* (set this to === to show the modal for demo purposes) (my pc is in english) */
    if (this.userLanguage === 'en') {
      let dialogRef = this.dialog.open(AppLanguagePickerComponent, {
        height: '400px',
        width: '600px',
        panelClass: 'centered-dialog'
      });
      dialogRef.afterClosed().subscribe((result: string) => {
        if (result) {
          this.userLanguage = result;
          this.router.navigate(['/' + this.userLanguage]);
          // we can navigate to the language page here
        }
      });
    }
  }
}
