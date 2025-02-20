import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  imports: [AccordionComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Cesar Tapia | Educación')
  }
}
