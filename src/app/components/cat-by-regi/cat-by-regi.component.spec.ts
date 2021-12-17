import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByRegiComponent } from './cat-by-regi.component';

describe('CatByRegiComponent', () => {
  let component: CatByRegiComponent;
  let fixture: ComponentFixture<CatByRegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByRegiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
