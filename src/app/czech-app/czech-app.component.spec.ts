import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechAppComponent } from './czech-app.component';

describe('CzechAppComponent', () => {
  let component: CzechAppComponent;
  let fixture: ComponentFixture<CzechAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CzechAppComponent]
    });
    fixture = TestBed.createComponent(CzechAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
