import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordbiddenComponent } from './fordbidden.component';

describe('FordbiddenComponent', () => {
  let component: FordbiddenComponent;
  let fixture: ComponentFixture<FordbiddenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordbiddenComponent]
    });
    fixture = TestBed.createComponent(FordbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
