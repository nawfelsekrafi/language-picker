import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishAppComponent } from './english-app.component';

describe('EnglishAppComponent', () => {
  let component: EnglishAppComponent;
  let fixture: ComponentFixture<EnglishAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishAppComponent]
    });
    fixture = TestBed.createComponent(EnglishAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
