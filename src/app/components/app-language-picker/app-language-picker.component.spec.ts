import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguagePickerComponent } from './app-language-picker.component';

describe('AppLanguagePickerComponent', () => {
  let component: AppLanguagePickerComponent;
  let fixture: ComponentFixture<AppLanguagePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanguagePickerComponent]
    });
    fixture = TestBed.createComponent(AppLanguagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
