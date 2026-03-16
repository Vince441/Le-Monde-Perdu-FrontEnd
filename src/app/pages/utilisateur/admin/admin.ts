import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
postDinosaure() {
throw new Error('Method not implemented.');
}

  form!: FormGroup;

}
