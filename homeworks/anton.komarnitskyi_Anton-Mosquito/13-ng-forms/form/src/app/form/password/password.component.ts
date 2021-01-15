import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> PasswordComponent),
    multi : true
  }
  ]
})
export class PasswordComponent implements ControlValueAccessor {

  private _password = '';
  public message? : string;

  @Input() objectForControlsPassword! : FormControl;

  actionChange = (value:string)=> {};
  actionTouch = (value:string)=> {};

  constructor() { }
  writeValue(str: string): void {
    this._password = str;
  }
  registerOnChange(fn: any): void {
    this.actionChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.actionTouch = fn;
  }

  get password() :string{
    return this._password
  }

  set password (value:string) {
    this._password = value;
    this.actionChange(value);
    this.actionTouch(value);
  }

  get _objectForControlsPassword() {
    return this.objectForControlsPassword
  }


  public eventStarted (event:Event) : void {
    this.password = (event.target as HTMLInputElement).value;

    let objectErorrs : ValidationErrors | null = this.objectForControlsPassword.errors;
    this.message = objectErorrs?.myValidator.message;

    if (objectErorrs?.myValidator.message === 'Complex password'){
      this.objectForControlsPassword.setErrors(null);
    }
  }

  public handle(event : Event, input: HTMLInputElement) : void {
    let element = (event.target as SVGImageElement);
    const attributes = (event.target as HTMLOrSVGScriptElement).dataset.svg;
    const basePath : string = '../../assets/media/sprite.svg#';
    const nameOfFirstSVG: string = 'view';
    const nameOfSecondSVG: string = 'view-close';

    switch (attributes) {
      case nameOfFirstSVG:
        element.href.baseVal = `${basePath}${nameOfSecondSVG}`;
        element.dataset.svg = nameOfSecondSVG;
        input.setAttribute('type', 'text');
      break;
      case nameOfSecondSVG:
        element.href.baseVal = `${basePath}${nameOfFirstSVG}`;
        element.dataset.svg = nameOfFirstSVG;
        input.setAttribute('type', 'password');
      break;
    }
  }

}
