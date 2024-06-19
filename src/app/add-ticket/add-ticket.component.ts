import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, RouterLink , MatButtonModule,],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.scss'
})
export class AddTicketComponent {
  http: HttpClient = inject(HttpClient);
  route: ActivatedRoute = inject(ActivatedRoute);
  formBuilder: FormBuilder = inject(FormBuilder);


  formulaire: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    
  });

  

}