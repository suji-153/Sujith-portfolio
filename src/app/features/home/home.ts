import { Component } from '@angular/core';
import { TechnologyBadge } from '../../shared/components/technology-badge/technology-badge';
import { Reveal } from '../../shared/directives/reveal';
import { PROFILE } from '../../data/profile.data';
import { SKILLS } from '../../data/skills.data';
import { EXPERIENCE } from '../../data/experience.data';
import { EDUCATION } from '../../data/education.data';
import { PROJECTS } from '../../data/projects.data';
import { SOCIAL_LINKS } from '../../data/social.data';
@Component({selector:'app-home', imports:[TechnologyBadge, Reveal], templateUrl:'./home.html', styleUrl:'./home.css'})
export class Home { readonly profile=PROFILE; readonly skills=SKILLS; readonly experience=EXPERIENCE; readonly education=EDUCATION; readonly projects=PROJECTS; readonly social=SOCIAL_LINKS; }
