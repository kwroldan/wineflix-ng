import { Component, OnInit } from '@angular/core';
import { heroContent } from '../../data'

@Component({
  selector: 'app-hero-content-description',
  templateUrl: './hero-content-description.component.html',
  styleUrls: ['./hero-content-description.component.css']
})
export class HeroContentDescriptionComponent {
  heroContent = heroContent;
}
