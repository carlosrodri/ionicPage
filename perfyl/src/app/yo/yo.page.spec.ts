import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoPage } from './yo.page';

describe('YoPage', () => {
  let component: YoPage;
  let fixture: ComponentFixture<YoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
