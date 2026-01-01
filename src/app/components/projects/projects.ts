import { Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  data = inject(ResumeService).getResume();
}
