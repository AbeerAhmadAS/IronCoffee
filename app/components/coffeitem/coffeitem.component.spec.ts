import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeitemComponent } from './coffeitem.component';

describe('CoffeitemComponent', () => {
  let component: CoffeitemComponent;
  let fixture: ComponentFixture<CoffeitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeitemComponent]
    });
    fixture = TestBed.createComponent(CoffeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
