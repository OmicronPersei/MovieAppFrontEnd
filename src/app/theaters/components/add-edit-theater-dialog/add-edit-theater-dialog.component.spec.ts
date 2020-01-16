import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTheaterDialogComponent } from './add-edit-theater-dialog.component';

describe('AddEditTheaterDialogComponent', () => {
  let component: AddEditTheaterDialogComponent;
  let fixture: ComponentFixture<AddEditTheaterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTheaterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTheaterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
