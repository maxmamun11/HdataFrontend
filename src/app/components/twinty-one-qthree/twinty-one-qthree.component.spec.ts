import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwintyOneQThreeComponent } from './twinty-one-qthree.component';

describe('TwintyOneQThreeComponent', () => {
  let component: TwintyOneQThreeComponent;
  let fixture: ComponentFixture<TwintyOneQThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwintyOneQThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwintyOneQThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
