import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuaterTComponent } from './top-quater-t.component';

describe('TopQuaterTComponent', () => {
  let component: TopQuaterTComponent;
  let fixture: ComponentFixture<TopQuaterTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuaterTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuaterTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
