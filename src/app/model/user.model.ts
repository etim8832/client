export class UserModel {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  department: string = '';

 static emty() {
     return {
        id: '',
        firstName: '',
        lastName: '',
        department: '',
     }
 }
}
