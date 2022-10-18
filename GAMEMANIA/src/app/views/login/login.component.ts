import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

  UserModel = new User()

  receberDados() {
    console.log (this.UserModel)

    this.userService.logarUsuario(this.UserModel).subscribe({
    next: (response) => {
      console.log ("deu certo");
      console.log("response");
    },
    error: (err) => {
      console.log ("deu errado");
      console.log("err");
    },
  })
}
}
