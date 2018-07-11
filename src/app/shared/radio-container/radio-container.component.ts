import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio-container',
  templateUrl: './radio-container.component.html',
  styleUrls: ['./radio-container.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => RadioContainerComponent),
      multi: true
    }
  ]
})
/* ControlValueAccessor: Interface do Angular que permite um componente totalmente novo acessar e ser manipulado pela 
diretiva NgModel. Diferente do componente 'input-container' (que é só um 'container' para encapsular a tag 'input' através da tag 'ng-content'), o 
componente RadioContainer ẃ totalmente independente */
export class RadioContainerComponent implements OnInit, ControlValueAccessor{

  @Input() options: RadioOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any): void {
    this.value = value
    console.log(this.value)
    this.onChange(this.value)
  }

   /**
     * Write a new value to the element.
     */
    writeValue(obj: any): void {
      this.value = obj
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: any): void {
      this.onChange = fn
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any): void {

    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void {

    }

}
