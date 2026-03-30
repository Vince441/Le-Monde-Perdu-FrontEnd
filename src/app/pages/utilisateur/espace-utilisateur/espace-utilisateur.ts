import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from "@angular/router";
import { UserDto } from '../../../models/utilisateur.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-espace-utilisateur',
  imports: [RouterLink],
  templateUrl: './espace-utilisateur.html',
  styleUrl: './espace-utilisateur.scss',
})
export class EspaceUtilisateur implements OnInit {
  user: UserDto | null = null;


  constructor(
    private readonly authService: AuthService, private readonly userService: UserService
  ) {

  }

  ngOnInit() {
    this.authService.user$.subscribe(u => {
      if (u) {
        this.userService.getUser(u).subscribe(user => {
          this.user = user
          console.warn('user', this.user);

          if (this.user?.role === 'ADMIN') {
            console.warn('u', this.user.role);
           
          }



        })
      }

    })
  }

}
