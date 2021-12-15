import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByformatQComponent } from './cat-byformat-q.component';

describe('CatByformatQComponent', () => {
  let component: CatByformatQComponent;
  let fixture: ComponentFixture<CatByformatQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByformatQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByformatQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
