import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAlertInfoComponent } from './top-alert-info.component';

describe('TopAlertInfoComponent', () => {
  let component: TopAlertInfoComponent;
  let fixture: ComponentFixture<TopAlertInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAlertInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAlertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
