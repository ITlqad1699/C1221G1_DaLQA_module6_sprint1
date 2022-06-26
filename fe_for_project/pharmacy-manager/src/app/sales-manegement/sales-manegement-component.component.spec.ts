import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManegementComponentComponent } from './sales-manegement-component.component';

describe('SalesManegementComponentComponent', () => {
  let component: SalesManegementComponentComponent;
  let fixture: ComponentFixture<SalesManegementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManegementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManegementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
