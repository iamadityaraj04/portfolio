import { Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  resumeService = inject(ResumeService);
  data = this.resumeService.getResume();
}
