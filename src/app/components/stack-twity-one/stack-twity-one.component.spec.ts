import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTwityOneComponent } from './stack-twity-one.component';

describe('StackTwityOneComponent', () => {
  let component: StackTwityOneComponent;
  let fixture: ComponentFixture<StackTwityOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackTwityOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackTwityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
