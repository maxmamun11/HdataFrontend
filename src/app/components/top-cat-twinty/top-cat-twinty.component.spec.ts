import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatTwintyComponent } from './top-cat-twinty.component';

describe('TopCatTwintyComponent', () => {
  let component: TopCatTwintyComponent;
  let fixture: ComponentFixture<TopCatTwintyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCatTwintyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatTwintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
