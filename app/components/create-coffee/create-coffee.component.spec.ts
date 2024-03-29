import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoffeeComponent } from './create-coffee.component';

describe('CreateCoffeeComponent', () => {
  let component: CreateCoffeeComponent;
  let fixture: ComponentFixture<CreateCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCoffeeComponent]
    });
    fixture = TestBed.createComponent(CreateCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
