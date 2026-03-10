import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInformation } from './display-information';

describe('DisplayInformation', () => {
  let component: DisplayInformation;
  let fixture: ComponentFixture<DisplayInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
