import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type SkyWingsDestinations = {
  name: Field<string>;
  fields: {
    Title: Field<string>;
    Country: Field<string>;
    Continent: Field<string>;
    Content: Field<string>;
    Image: ImageField;
    Price: Field<string>;
    Type: Field<string>;
    Rating: Field<string>;
    SuggestedDuration: Field<string>;
    ExpectedTemps: Field<string>;
    BestMonths: Field<string>;
  };
  url: string;
};
