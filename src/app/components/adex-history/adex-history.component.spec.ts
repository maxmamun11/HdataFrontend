import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdexHistoryComponent } from './adex-history.component';

describe('AdexHistoryComponent', () => {
  let component: AdexHistoryComponent;
  let fixture: ComponentFixture<AdexHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdexHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdexHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
