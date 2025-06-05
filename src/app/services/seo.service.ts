import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  updateTitle(title: string) {
    this.title.setTitle(title + ' | Action for Collective Change Initiative');
  }

  updateMetaTags(config: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    const defaults = {
      title: 'Action for Collective Change Initiative',
      description: 'ACCI is a nonprofit transforming communities through youth empowerment, economic development, environmental sustainability, and advocacy.',
      image: 'https://weareacci.org/assets/images/acci-logo.png',
      url: 'https://weareacci.org',
      type: 'website'
    };

    const tags = { ...defaults, ...config };

    // Update basic meta tags
    this.meta.updateTag({ name: 'description', content: tags.description });
    this.meta.updateTag({ name: 'image', content: tags.image });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:type', content: tags.type });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
    this.meta.updateTag({ property: 'og:url', content: tags.url });

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });
  }
} 