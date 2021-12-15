import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatThreeComponent } from './top-cat-three.component';

describe('TopCatThreeComponent', () => {
  let component: TopCatThreeComponent;
  let fixture: ComponentFixture<TopCatThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCatThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
