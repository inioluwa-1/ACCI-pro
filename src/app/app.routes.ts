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
import { partnerWithUsComponent } from './component/partnerWithUs/partnerWithUs.component';


export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Home | Action for Collective Change Initiative'},
    {path: 'about', component: AboutComponent, title:'About | Action for Collective Change Initiative'},
    {path: 'key-initiative', component: KeyInitiativeComponent, title:'Key-Initiative | Action for Collective Change Initiative'},
    {path: 'upcoming-event', component: UpcomingEventComponent, title:'Upcoming-Event | Action for Collective Change Initiative'},
    {path: 'ongoing-programmes', component: OngoingProgrammesComponent, title:'Ongoing-Programmes | Action for Collective Change Initiative'},
    {path: 'volunteer', component: VolunteerComponent, title:'Volunteer | Action for Collective Change Initiative'},
    {path: 'contact', component: ContactComponent, title:'Contact | Action for Collective Change Initiative'},
    {path: 'sierra-leone', component: SierraLeoneComponent, title:'Sierra-leone | Action for Collective Change Initiative'},
    {path: 'liberia', component: LiberiaComponent, title:'Liberia | Action for Collective Change Initiative'},
    {path: 'partnerWithUs', component: partnerWithUsComponent, title:'partnerWithUs | Action for Collective Change Initiative'}
];
