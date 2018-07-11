import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  @ContentChild(NgModel) model: NgModel

  input: any

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model

    if(this.input == undefined){
      throw new Error('O componente precisa usar a diretiva NgModel')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasErrors(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
