import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithComboboxComponent } from './table-with-combobox.component';

describe('TableWithComboboxComponent', () => {
  let component: TableWithComboboxComponent;
  let fixture: ComponentFixture<TableWithComboboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithComboboxComponent]
    });
    fixture = TestBed.createComponent(TableWithComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
