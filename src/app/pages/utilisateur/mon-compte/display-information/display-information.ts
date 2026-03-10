import { Component, Input } from '@angular/core';
import { UserDto } from '../../../../models/utilisateur.model';

@Component({
  selector: 'app-display-information',
  imports: [],
  templateUrl: './display-information.html',
  styleUrl: './display-information.scss',
})
export class DisplayInformation {
  @Input() user! : UserDto;

}
