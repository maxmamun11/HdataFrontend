import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByRegistackComponent } from './cat-by-registack.component';

describe('CatByRegistackComponent', () => {
  let component: CatByRegistackComponent;
  let fixture: ComponentFixture<CatByRegistackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByRegistackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByRegistackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
