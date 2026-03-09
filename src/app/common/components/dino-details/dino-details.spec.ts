import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoDetails } from './dino-details';

describe('DinoDetails', () => {
  let component: DinoDetails;
  let fixture: ComponentFixture<DinoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
