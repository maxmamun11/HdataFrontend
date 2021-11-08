import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuaterOneNineComponent } from './top-quater-one-nine.component';

describe('TopQuaterOneNineComponent', () => {
  let component: TopQuaterOneNineComponent;
  let fixture: ComponentFixture<TopQuaterOneNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuaterOneNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuaterOneNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
