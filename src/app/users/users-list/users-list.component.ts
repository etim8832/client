import { Component, OnInit  } from '@angular/core';
import {UserService} from '../../service/user.service'
import {DEPARTMENT} from '../../utility/mock-department'


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})

export class UsersListComponent implements OnInit {
  users: Array<any> = []
  userEdit: any

  constructor(private userService: UserService,
              ) {
  }

  async ngOnInit() {
    this.getUsers()
  }

  async getUsers() {
    this.users = await this.userService.getUsers()
  }

  setNameDepartment(departmentId: string) {
    const dp: any = DEPARTMENT.find((f:any) => f.id == departmentId.trim())
    if(!dp) return ''
    return dp.name
  }

  async dataFromUserChildren(event: any){
    try {
      const body = event.userInfo
      if(body.id) {
        this.updateUser(body)
      } else {
        this.createUser(body)
      }
    } catch (error) {
      alert(error)
    }
  }

  async createUser(body: any) {
    try {
      const res = await this.userService.create(body)
      this.getUsers()
      alert(`completed with id: ${res.id}`)
    } catch (error) {
      alert(`${error}`)
    }
 
  }

  async updateUser(body: any) {
    try {
      const res = await this.userService.updateUser(body)
      this.users = this.users.filter((f: any) => f.id !== body.id)
      alert(`${res.message}`)
    } catch (error) {
      alert(`${error}`)
    }
  }

  selectUserEdit(user: any = {}) {
    this.userEdit = user
  }

  async deleteUser(id: number) {
    const res = await this.userService.deleteUser(id)
    this.users = this.users.filter((f: any) => f.id !== id)
    alert(`${res.message}`)
  }
}