import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { KeyInitiativeComponent } from './component/key-initiative/key-initiative.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';
import { OngoingProgrammesComponent } from './component/ongoing-programmes/ongoing-programmes.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Home'},
    {path: 'about', component: AboutComponent, title:'About'},
    {path: 'key-initiative', component: KeyInitiativeComponent, title:'Key-Initiative'},
    {path: 'upcoming-event', component: UpcomingEventComponent, title:'Upcoming-Event'},
    {path: 'ongoing-programmes', component: OngoingProgrammesComponent, title:'Ongoing-Programmes'},
    {path: 'volunteer', component: VolunteerComponent, title:'Volunteer'},
    {path: 'contact', component: ContactComponent, title:'Contact'},
];
