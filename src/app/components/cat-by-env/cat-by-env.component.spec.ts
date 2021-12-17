import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByEnvComponent } from './cat-by-env.component';

describe('CatByEnvComponent', () => {
  let component: CatByEnvComponent;
  let fixture: ComponentFixture<CatByEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
