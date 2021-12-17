import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByEnvQTComponent } from './cat-by-env-qt.component';

describe('CatByEnvQTComponent', () => {
  let component: CatByEnvQTComponent;
  let fixture: ComponentFixture<CatByEnvQTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByEnvQTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByEnvQTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
