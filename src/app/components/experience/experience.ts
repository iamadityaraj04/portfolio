import { Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  data = inject(ResumeService).getResume();
}
