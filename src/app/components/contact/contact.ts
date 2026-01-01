import { Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  data = inject(ResumeService).getResume();
}
