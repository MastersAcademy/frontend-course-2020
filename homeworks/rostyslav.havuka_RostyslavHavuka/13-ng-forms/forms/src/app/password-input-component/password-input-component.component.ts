import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './password-input-component.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponentComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponentComponent  implements ControlValueAccessor{

  constructor(public controlContaine: ControlContainer) {}

  value: String;
  type: 'password' | 'text';
  onChange = (value: any) => {};
  onTouch = () => {};

  writeValue(value) {
    this.value = value
  };

  registerOnChange(fn: any) {
    this.onChange = fn;
  };

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  };

  updateValue(val) {
    this.value = val;
    this.onChange(val);
    this.onTouch();
  }

  showPass(event) {
    this.type = event.target.checked ?
    'password' : 'text';
  }

  labelPassword() {
    if (this.controlContaine.control.get("password").hasError('minlength')) {
      return 'Min 6 lenght!';
    } else {
      return 'Password:'
    }
  }

}
