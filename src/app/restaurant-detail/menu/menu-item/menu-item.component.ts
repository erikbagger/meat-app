import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem

  @Output() emitter = new EventEmitter<MenuItem>()
  
  constructor() { }

  ngOnInit() {
  }

  emitEvent(){
    console.log('Emmiting event')
    this.emitter.emit(this.item)
  }

}
