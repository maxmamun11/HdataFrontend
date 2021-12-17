import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByEnvstackComponent } from './cat-by-envstack.component';

describe('CatByEnvstackComponent', () => {
  let component: CatByEnvstackComponent;
  let fixture: ComponentFixture<CatByEnvstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatByEnvstackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByEnvstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
