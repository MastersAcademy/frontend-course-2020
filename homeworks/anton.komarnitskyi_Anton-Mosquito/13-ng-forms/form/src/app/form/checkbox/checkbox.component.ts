import { AfterViewInit, Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> CheckboxComponent),
    multi : true
  }
  ]
})
export class CheckboxComponent implements ControlValueAccessor, AfterViewInit{

  @ViewChild('chekcbox') chekcbox!: ElementRef;

  private _value! : boolean;

  actionChange = (value:boolean)=> {};
  actionTouch = (value:boolean)=> {};

  constructor() { }

  writeValue(str: boolean): void {
    this._value = str;
  }
  registerOnChange(fn: any): void {
    this.actionChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.actionTouch = fn;
  }

  get value() :boolean{
    return this._value
  }

  set value(value:boolean) {
    this._value = value;
    this.actionChange(value);
    this.actionTouch(value);
  }


  public handleChange (event:Event) : void{
    this.value = (event.target as HTMLFormElement).checked;
    console.log(this.value);
  }

  ngAfterViewInit(): void {
    if(this.value){
      this.chekcbox.nativeElement.setAttribute('checked', 'true');
    } else {
      this.chekcbox.nativeElement.removeAttribute('checked');
    }

  }


}
