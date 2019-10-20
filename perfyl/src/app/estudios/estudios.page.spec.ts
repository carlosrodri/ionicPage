import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosPage } from './estudios.page';

describe('EstudiosPage', () => {
  let component: EstudiosPage;
  let fixture: ComponentFixture<EstudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
