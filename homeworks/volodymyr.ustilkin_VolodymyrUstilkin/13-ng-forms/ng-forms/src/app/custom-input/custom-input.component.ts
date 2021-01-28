import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {
  textInput = new FormControl('');

  @Input() labelName: string = '';
  @Input() inputType: string;
  @Input() inputTypeChangeButtonDisplay: boolean = false;
  @Input() labelErrorValue: string = '';

  private previousInputType: string;

  constructor() {}

  onTouched = () => {};
  onChange = (value: any) => {};

  get isInputTypePassword(): boolean {
    return this.inputType !== 'password';
  }

  onInputChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;

    if (this.textInput.errors) {
      this.labelErrorValue = this.textInput.errors[0];
    }
    this.onChange(val);
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: string): void {
    this.textInput.setValue(val);
    this.onChange(val);
  }

  changeTextInputType() {
    if (this.inputType !== 'password') {
      this.previousInputType = this.inputType;
      this.inputType = 'password'
    } else {
      this.inputType = this.previousInputType;
    }
  }
}
