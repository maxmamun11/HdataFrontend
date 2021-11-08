import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNinteenComponent } from './cat-ninteen.component';

describe('CatNinteenComponent', () => {
  let component: CatNinteenComponent;
  let fixture: ComponentFixture<CatNinteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatNinteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNinteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
