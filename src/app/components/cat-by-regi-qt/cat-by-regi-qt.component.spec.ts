import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByRegiQTComponent } from './cat-by-regi-qt.component';

describe('CatByRegiQTComponent', () => {
  let component: CatByRegiQTComponent;
  let fixture: ComponentFixture<CatByRegiQTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByRegiQTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByRegiQTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
