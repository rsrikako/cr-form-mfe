import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrFormComponent } from './cr-form.component';

describe('CrFormComponent', () => {
  let component: CrFormComponent;
  let fixture: ComponentFixture<CrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
