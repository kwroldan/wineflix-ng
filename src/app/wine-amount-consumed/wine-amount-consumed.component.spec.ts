import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineAmountConsumedComponent } from './wine-amount-consumed.component';

describe('WineAmountConsumedComponent', () => {
  let component: WineAmountConsumedComponent;
  let fixture: ComponentFixture<WineAmountConsumedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineAmountConsumedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineAmountConsumedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
