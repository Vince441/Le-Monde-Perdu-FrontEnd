import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { UserDto } from '../../../models/utilisateur.model';
import { FormBuilder } from '@angular/forms';
import { UpdateInformation } from './update-information/update-information';
import { DisplayInformation } from './display-information/display-information';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mon-compte',
  imports: [DisplayInformation, UpdateInformation, RouterLink],
  templateUrl: './mon-compte.html',
  styleUrl: './mon-compte.scss',
})
export class MonCompte implements OnInit {
  user!: UserDto;
  isUpdateInformation: boolean = false;

  constructor(private readonly authService: AuthService, private readonly userService: UserService, private readonly fb: FormBuilder,) {



  }

  ngOnInit() {
    this.authService.user$.subscribe(u => {
      if (u) {
        this.userService.getUser(u).subscribe(user => {
          this.user = user
          console.warn('user', this.user);

        })
      }

    })
  }



  isUpdate() {
    this.isUpdateInformation = !this.isUpdateInformation;
  }


}
