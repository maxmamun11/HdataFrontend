import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuaterOneTwintyComponent } from './top-quater-one-twinty.component';

describe('TopQuaterOneTwintyComponent', () => {
  let component: TopQuaterOneTwintyComponent;
  let fixture: ComponentFixture<TopQuaterOneTwintyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuaterOneTwintyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuaterOneTwintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
