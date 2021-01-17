import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './password-input-component.component.html',
  styleUrls: ['./password-input-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponentComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponentComponent  implements ControlValueAccessor{
  value: string;
  type: boolean;
  onChange = (value: any) => {};
  onTouch = () => {};
  @Input() errorPass: string;

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
   if (event.target.checked === true) {
      this.type = true;
      console.log(this.errorPass);
    } else {
     this.type = false;
    }
  }
}
