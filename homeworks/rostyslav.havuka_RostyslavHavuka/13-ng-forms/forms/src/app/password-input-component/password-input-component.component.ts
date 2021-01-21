import { Component, forwardRef } from "@angular/core";
import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-password-input-component",
  templateUrl: "./password-input-component.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponentComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponentComponent implements ControlValueAccessor {
  constructor(public controlContaine: ControlContainer) {}
  label: string;
  value: string;
  type: "password" | "text";
  onChange = (value: any) => {};
  onTouch = () => {};

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  updateValue(val) {
    this.value = val;
    this.onChange(val);
    this.onTouch();
    this.updateLabel();
  }

  showPass(event) {
    this.type = event.target.checked ? "text" : "password";
  }

  updateLabel() {
    this.label = this.controlContaine.control
    .get("password").hasError("minlength")? "Min 6 lenght!": "Password:";
  }
}
