import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import {DEPARTMENT} from '../../utility/mock-department'

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})

export class FormUserComponent implements OnInit {
  @Input() userEdit : any
  @Input() title : any
  @Output() eventReturnData = new EventEmitter()

  bookingInfo: any ={}
  userInfo: any = {}
  
  // titleNames: Array<string> = ['นาย', 'นางสาว', 'นาง', 'ไม่ระบุ']

  departments = DEPARTMENT

  constructor() {
  }

  async ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.userInfo.id = this.userEdit?.id || 0
    this.userInfo.department_id = this.userEdit?.department_id.trim() || 0
    this.userInfo.first_name = this.userEdit?.first_name || ''
    this.userInfo.last_name = this.userEdit?.last_name || ''
  }

  onSave() {
    this.eventReturnData.emit({
      userInfo: this.userInfo
    })
  }


}


