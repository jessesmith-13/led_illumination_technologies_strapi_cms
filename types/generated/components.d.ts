import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'elements.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    featureCard: Schema.Attribute.Component<'elements.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    galleryItems: Schema.Attribute.Component<'elements.gallery-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoGalleryItems: Schema.Attribute.Component<
      'elements.video-gallery-item',
      true
    >;
    videosSubtitle: Schema.Attribute.String;
    videosTitle: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaButton: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProducts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_products';
  info: {
    displayName: 'Products Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    productCard: Schema.Attribute.Component<'elements.product-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_sections';
  info: {
    displayName: 'Quote Section';
  };
  attributes: {
    formDescription: Schema.Attribute.Text;
    formTitle: Schema.Attribute.String;
    quoteForm: Schema.Attribute.Component<'elements.quote-form', false>;
    sectionDescription: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    serviceItems: Schema.Attribute.Component<'elements.service-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsApplication extends Struct.ComponentSchema {
  collectionName: 'components_elements_applications';
  info: {
    displayName: 'application';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_cards';
  info: {
    displayName: 'featureCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_sections';
  info: {
    displayName: 'footerSection';
  };
  attributes: {
    navLinks: Schema.Attribute.Component<'elements.nav-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_gallery_items';
  info: {
    displayName: 'galleryItem';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<'images'>;
    beforeImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsProductCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_product_cards';
  info: {
    displayName: 'productCard';
  };
  attributes: {
    application: Schema.Attribute.Component<'elements.application', true>;
    description: Schema.Attribute.String;
    haze: Schema.Attribute.String;
    model: Schema.Attribute.String;
    title: Schema.Attribute.String;
    transmittance: Schema.Attribute.String;
  };
}

export interface ElementsQuoteForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_quote_forms';
  info: {
    displayName: 'quoteForm';
  };
  attributes: {
    email: Schema.Attribute.String;
    fullName: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    projectDetails: Schema.Attribute.Text;
    zipcode: Schema.Attribute.String;
  };
}

export interface ElementsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_items';
  info: {
    displayName: 'serviceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_icons';
  info: {
    displayName: 'socialIcon';
  };
  attributes: {
    href: Schema.Attribute.String;
    platform: Schema.Attribute.String;
  };
}

export interface ElementsStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsVideoGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_video_gallery_items';
  info: {
    displayName: 'videoGalleryItem';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.features-section': BlocksFeaturesSection;
      'blocks.gallery-section': BlocksGallerySection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.products': BlocksProducts;
      'blocks.quote-section': BlocksQuoteSection;
      'blocks.services-section': BlocksServicesSection;
      'elements.application': ElementsApplication;
      'elements.button': ElementsButton;
      'elements.feature': ElementsFeature;
      'elements.feature-card': ElementsFeatureCard;
      'elements.footer-section': ElementsFooterSection;
      'elements.gallery-item': ElementsGalleryItem;
      'elements.icon': ElementsIcon;
      'elements.logo': ElementsLogo;
      'elements.nav-link': ElementsNavLink;
      'elements.product-card': ElementsProductCard;
      'elements.quote-form': ElementsQuoteForm;
      'elements.service-item': ElementsServiceItem;
      'elements.social-icon': ElementsSocialIcon;
      'elements.stat': ElementsStat;
      'elements.video-gallery-item': ElementsVideoGalleryItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
