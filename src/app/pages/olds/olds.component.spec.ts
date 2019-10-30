import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldsComponent } from './olds.component';

describe('OldsComponent', () => {
  let component: OldsComponent;
  let fixture: ComponentFixture<OldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
