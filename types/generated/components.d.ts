import type { Schema, Struct } from '@strapi/strapi';

export interface ProductVariation extends Struct.ComponentSchema {
  collectionName: 'components_product_variations';
  info: {
    displayName: 'variation';
    icon: 'shoppingCart';
  };
  attributes: {
    attribute: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.Decimal;
    salePrice: Schema.Attribute.Decimal;
    sku: Schema.Attribute.String;
    stock: Schema.Attribute.Integer;
    value: Schema.Attribute.String;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'address';
    icon: 'slideshow';
  };
  attributes: {
    city: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.variation': ProductVariation;
      'shared.address': SharedAddress;
    }
  }
}
