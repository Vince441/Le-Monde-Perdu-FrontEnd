import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDinosaures } from './mes-dinosaures';

describe('MesDinosaures', () => {
  let component: MesDinosaures;
  let fixture: ComponentFixture<MesDinosaures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesDinosaures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesDinosaures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
