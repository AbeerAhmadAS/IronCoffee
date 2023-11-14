import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from 'src/app/service/coffee.service';
@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css'],
})
export class CreateCoffeeComponent implements OnInit {
  registerForm: FormGroup;
  nameInput: FormControl;
  taglineInput: FormControl;
  descriptionInput: FormControl;
  first_roastedInput: FormControl;
  roaster_tipsInput: FormControl;
  strength_levelInput: FormControl;
  contributed_byInput: FormControl;

  constructor(private coffeeservice: CoffeeService) {
    this.nameInput = new FormControl('', Validators.required);
    this.taglineInput = new FormControl('', Validators.required);
    this.descriptionInput = new FormControl('', Validators.required);
    this.first_roastedInput = new FormControl('', Validators.required);
    this.roaster_tipsInput = new FormControl('', Validators.required);
    this.strength_levelInput = new FormControl('', Validators.required);
    this.contributed_byInput = new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]);

    this.registerForm = new FormGroup({
      name: this.nameInput,
      tagline: this.taglineInput,
      description: this.descriptionInput,
      firstRoasted: this.first_roastedInput,
      roasterTips: this.roaster_tipsInput,
      strengthLevel: this.strength_levelInput,
      contributedBy: this.contributed_byInput,
    });
 

  }
  ngOnInit(): void {
    
  }
    onSubmit() {
      if (this.registerForm.valid) {
        const body = this.registerForm.value;
  
        this.coffeeservice.postCoffee(body).subscribe(
          (response) => {
            console.log('Coffee created:', response);
            alert("THE COFFEE IS CREATED")
  
            this.registerForm.reset();
            window.location.reload();
          },
          (error) => {
            console.error('Error creating coffee:', error);
          }
        );
      }
    }
  }