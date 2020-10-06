import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateMenuComponent } from './add-or-update-menu.component';

describe('AddOrUpdateMenuComponent', () => {
  let component: AddOrUpdateMenuComponent;
  let fixture: ComponentFixture<AddOrUpdateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
