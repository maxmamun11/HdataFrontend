import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwintyOneCatThreeComponent } from './twinty-one-cat-three.component';

describe('TwintyOneCatThreeComponent', () => {
  let component: TwintyOneCatThreeComponent;
  let fixture: ComponentFixture<TwintyOneCatThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwintyOneCatThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwintyOneCatThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
