import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwintyOneCtgComponent } from './twinty-one-ctg.component';

describe('TwintyOneCtgComponent', () => {
  let component: TwintyOneCtgComponent;
  let fixture: ComponentFixture<TwintyOneCtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwintyOneCtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwintyOneCtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
