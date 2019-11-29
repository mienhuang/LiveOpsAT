import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLogComponent } from './front-log.component';

describe('FrontLogComponent', () => {
  let component: FrontLogComponent;
  let fixture: ComponentFixture<FrontLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
