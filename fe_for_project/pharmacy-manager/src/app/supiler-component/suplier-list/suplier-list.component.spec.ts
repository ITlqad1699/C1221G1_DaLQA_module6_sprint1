import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierListComponent } from './suplier-list.component';

describe('SuplierListComponent', () => {
  let component: SuplierListComponent;
  let fixture: ComponentFixture<SuplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
