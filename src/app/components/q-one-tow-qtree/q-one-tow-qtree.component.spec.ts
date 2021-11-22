import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QOneTowQtreeComponent } from './q-one-tow-qtree.component';

describe('QOneTowQtreeComponent', () => {
  let component: QOneTowQtreeComponent;
  let fixture: ComponentFixture<QOneTowQtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QOneTowQtreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QOneTowQtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
