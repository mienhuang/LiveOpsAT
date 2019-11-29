import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLAComponent } from './liveOpsLA.component';

describe('LLAComponent', () => {
  let component: LLAComponent;
  let fixture: ComponentFixture<LLAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
