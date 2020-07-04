import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubuiltInStrDirComponent } from './bubuilt-in-str-dir.component';

describe('BubuiltInStrDirComponent', () => {
  let component: BubuiltInStrDirComponent;
  let fixture: ComponentFixture<BubuiltInStrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubuiltInStrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubuiltInStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
