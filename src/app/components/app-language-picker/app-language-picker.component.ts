import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-app-language-picker',
  templateUrl: './app-language-picker.component.html',
  styleUrls: ['./app-language-picker.component.scss']
})
export class AppLanguagePickerComponent {
  selectedLanguage: string = 'en';

  constructor(
    private languageService: LanguageService,
    private dialogRef: MatDialogRef<AppLanguagePickerComponent>
  ) {
    this.selectedLanguage = this.languageService.getUserLanguage();
  }

  onLanguageChange(event: Event) {
    this.selectedLanguage = (event.target as HTMLSelectElement).value;
  }

  onSave() {
    this.dialogRef.close(this.selectedLanguage);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
