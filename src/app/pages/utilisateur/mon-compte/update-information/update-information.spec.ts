import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInformation } from './update-information';

describe('UpdateInformation', () => {
  let component: UpdateInformation;
  let fixture: ComponentFixture<UpdateInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
