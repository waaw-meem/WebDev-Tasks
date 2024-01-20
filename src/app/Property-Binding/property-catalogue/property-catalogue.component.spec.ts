import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCatalogueComponent } from './property-catalogue.component';

describe('PropertyCatalogueComponent', () => {
  let component: PropertyCatalogueComponent;
  let fixture: ComponentFixture<PropertyCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyCatalogueComponent]
    });
    fixture = TestBed.createComponent(PropertyCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
