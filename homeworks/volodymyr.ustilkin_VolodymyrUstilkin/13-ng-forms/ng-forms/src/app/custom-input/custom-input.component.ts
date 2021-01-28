import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

enum InputType {
  text= 'text',
  password = 'password',
  number = 'number',
  email = 'email',
  hidden = 'hidden'
}

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
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  readonly textInput = new FormControl('');

  @Input() labelName: string = '';
  @Input() inputType: InputType;
  @Input() inputTypeChangeButtonDisplay: boolean = false;
  @Input() labelErrorValue: string = '';

  private previousInputType: InputType;

  onTouched: Function = () => {};
  onChange: Function = (value: Function) => {};

  get isInputTypePassword(): boolean {
    return this.inputType !== InputType.password;
  }

  ngOnInit() {
    this.textInput.valueChanges.subscribe(value => {
      if (this.textInput.errors) {
        this.labelErrorValue = this.textInput.errors[0];
      }
      this.onChange(value);
    })
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  writeValue(val: string): void {
    this.textInput.setValue(val);
    this.onChange(val);
  }

  changeTextInputType() {
    if (this.inputType !== 'password') {
      this.previousInputType = this.inputType;
      this.inputType = InputType.password
    } else {
      this.inputType = this.previousInputType;
    }
  }
}
