import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { KeyInitiativeComponent } from './component/key-initiative/key-initiative.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';
import { OngoingProgrammesComponent } from './component/ongoing-programmes/ongoing-programmes.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { ContactComponent } from './component/contact/contact.component';
import { SierraLeoneComponent } from './component/sierra-leone/sierra-leone.component';
import { LiberiaComponent } from './component/liberia/liberia.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Home | Action For Collective Change'},
    {path: 'about', component: AboutComponent, title:'About | Action For Collective Change'},
    {path: 'key-initiative', component: KeyInitiativeComponent, title:'Key-Initiative | Action For Collective Change'},
    {path: 'upcoming-event', component: UpcomingEventComponent, title:'Upcoming-Event | Action For Collective Change'},
    {path: 'ongoing-programmes', component: OngoingProgrammesComponent, title:'Ongoing-Programmes | Action For Collective Change'},
    {path: 'volunteer', component: VolunteerComponent, title:'Volunteer | Action For Collective Change'},
    {path: 'contact', component: ContactComponent, title:'Contact | Action For Collective Change'},
    {path: 'sierra-leone', component: SierraLeoneComponent, title:'Sierra-leone | Action For Collective Change'},
    {path: 'liberia', component: LiberiaComponent, title:'Liberia | Action For Collective Change'}
];
