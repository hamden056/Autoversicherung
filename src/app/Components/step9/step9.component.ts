import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {

  email!: string;
  valid!: boolean;

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.valid = re.test(this.email);
  }
  iban!: string;
  validIban!: boolean;

  validateIban() {
    this.validIban = this.iban.length >= 15 && this.iban.length <= 34 && this.iban.startsWith('DE');
  }

  inputValue!: string;

  removeError() {
    this.inputValue = this.inputValue.trim();
  }

  isValidEmail(email: string) {
    // Returns true if email is in valid format, false otherwise
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  submit() {
    if (!this.inputValue) {
      return alert('Please check your input');
    } else if (!this.isValidEmail(this.inputValue)) {
      return alert('Email is invalid');
    }

    // Perform submit logic
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
