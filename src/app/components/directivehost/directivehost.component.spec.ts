import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivehostComponent } from './directivehost.component';

describe('DirectivehostComponent', () => {
  let component: DirectivehostComponent;
  let fixture: ComponentFixture<DirectivehostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivehostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivehostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
