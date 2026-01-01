import { Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  data = inject(ResumeService).getResume();
}
