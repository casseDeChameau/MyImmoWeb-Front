import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoListComponent } from './immo-list.component';

describe('ImmoListComponent', () => {
  let component: ImmoListComponent;
  let fixture: ComponentFixture<ImmoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
