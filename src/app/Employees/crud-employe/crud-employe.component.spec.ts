import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDEmployeComponent } from './crud-employe.component';

describe('CRUDEmployeComponent', () => {
  let component: CRUDEmployeComponent;
  let fixture: ComponentFixture<CRUDEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
