import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesDenied } from './acces-denied';

describe('AccesDenied', () => {
  let component: AccesDenied;
  let fixture: ComponentFixture<AccesDenied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesDenied]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesDenied);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
