import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './services/seo.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ACCI';

  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Update meta tags on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      let route = event.urlAfterRedirects;
      
      // Default meta tags
      let metaConfig: any = {
        title: 'Action for Collective Change Initiative',
        description: 'ACCI is a nonprofit transforming communities through youth empowerment, economic development, environmental sustainability, and advocacy.',
        url: `https://weareacci.org${route}`
      };

      // Route-specific meta tags
      switch (route) {
        case '/':
          metaConfig.title = 'Home | Action for Collective Change Initiative';
          metaConfig.description = 'Transforming Lives, Creating Sustainable Change through youth empowerment, economic development, and environmental sustainability.';
          break;
        case '/about':
          metaConfig.title = 'About Us | Action for Collective Change Initiative';
          metaConfig.description = 'Learn about ACCI\'s mission, vision, and our commitment to sustainable community development and social impact.';
          break;
        case '/key-initiative':
          metaConfig.title = 'Key Initiatives | Action for Collective Change Initiative';
          metaConfig.description = 'Discover our impactful programs in youth empowerment, economic development, and environmental sustainability.';
          break;
        case '/upcoming-event':
          metaConfig.title = 'Upcoming Events | Action for Collective Change Initiative';
          metaConfig.description = 'Join our upcoming events, workshops, and community programs making a difference in Africa.';
          break;
        case '/volunteer':
          metaConfig.title = 'Volunteer | Action for Collective Change Initiative';
          metaConfig.description = 'Make a difference by volunteering with ACCI. Join our community of changemakers transforming lives.';
          break;
        case '/contact':
          metaConfig.title = 'Contact Us | Action for Collective Change Initiative';
          metaConfig.description = 'Get in touch with ACCI. We\'d love to hear from you and discuss how we can work together.';
          break;
        case '/sierra-leone':
          metaConfig.title = 'Sierra Leone Programs | Action for Collective Change Initiative';
          metaConfig.description = 'Learn about our impactful community development and youth empowerment programs in Sierra Leone.';
          break;
        case '/liberia':
          metaConfig.title = 'Liberia Programs | Action for Collective Change Initiative';
          metaConfig.description = 'Discover our sustainable development and community empowerment initiatives in Liberia.';
          break;
        case '/partnerWithUs':
          metaConfig.title = 'Partner With Us | Action for Collective Change Initiative';
          metaConfig.description = 'Partner with ACCI to create lasting change. Explore partnership opportunities and join our mission.';
          break;
      }

      this.seoService.updateMetaTags(metaConfig);
    });
  }
}
