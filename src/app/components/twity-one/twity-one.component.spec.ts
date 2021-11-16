import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwityOneComponent } from './twity-one.component';

describe('TwityOneComponent', () => {
  let component: TwityOneComponent;
  let fixture: ComponentFixture<TwityOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwityOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
