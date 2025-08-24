import { ComponentProps } from 'lib/component-props';
import {
  Text,
  Field,
  Link as JssLink,
  LinkField,
  Image,
  ImageField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import { Button } from "@/src/components/components/ui/button"
// import Image from 'next/image';

export type SkyWingsOffersProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    LeftOfferTitle: Field<string>;
    LeftOfferBadge: Field<string>;
    LeftOfferText: Field<string>;
    LeftOfferValid: Field<string>;
    LeftOfferLink: LinkField;
    MiddleOfferTitle: Field<string>;
    MiddleOfferBadge: Field<string>;
    MiddleOfferText: Field<string>;
    MiddleOfferValid: Field<string>;
    MiddleOfferLink: LinkField;
    RightOfferTitle: Field<string>;
    RightOfferBadge: Field<string>;
    RightOfferText: Field<string>;
    RightOfferValid: Field<string>;
    RightOfferLink: LinkField;
    RightOfferImage: ImageField;
  };
};

const SkyWingsOffers = ({ fields, params }: SkyWingsOffersProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
          <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-gray-900"><Text field={fields.LeftOfferTitle} /></CardTitle>
                <Badge variant="destructive" className="text-lg px-3 py-1">
                  <Text field={fields.LeftOfferBadge} />
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4"><Text field={fields.LeftOfferText} /></p>
              <p className="text-sm text-blue-600 font-medium mb-4"><Text field={fields.LeftOfferValid} /></p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-gray-900"><Text field={fields.MiddleOfferTitle} /></CardTitle>
                <Badge variant="destructive" className="text-lg px-3 py-1">
                  <Text field={fields.MiddleOfferBadge} />
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4"><Text field={fields.MiddleOfferText} /></p>
              <p className="text-sm text-blue-600 font-medium mb-4"><Text field={fields.MiddleOfferValid} /></p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-gray-900"><Text field={fields.RightOfferTitle} /></CardTitle>
                <Badge variant="destructive" className="text-lg px-3 py-1">
                  <Text field={fields.RightOfferBadge} />
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4"><Text field={fields.RightOfferText} /></p>
              <p className="text-sm text-blue-600 font-medium mb-4"><Text field={fields.RightOfferValid} /></p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<SkyWingsOffersProps>(SkyWingsOffers);

const SkyWingsOffersBusinessComponent = ({ fields, params }: SkyWingsOffersProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
          <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
        </div>

        <div className="promo flex flex-col md:flex-row gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow basis-full ">
          <div className="image relative flex-1 flex items-stretch max-h-96">
            <Image field={fields.RightOfferImage} width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-col justify-center space-y-6 pr-8 flex-1">
            <div className="p-6">
              <div className="flex flex-col space-y-1.5">
                <div className="flex justify-between items-start">
                  <div className="font-semibold tracking-tight text-xl text-gray-900"><Text field={fields.RightOfferTitle} /></div>
                  <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 text-lg px-3 py-1"><Text field={fields.RightOfferBadge} /></div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Refundable<br />
                No change fee<br />
                2x checked bags included<br />
                Meal provided
                Priority boarding
              </p>
              <p className="text-sm text-blue-600 font-medium p-0">
                <div className="text-sm text-blue-600 font-medium p-0">
                  <div className="ck-content mb-8">
                    <p><Text field={fields.RightOfferValid} /></p>
                  </div>
                </div>
              </p>
              <div className="relative">
                <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">BOOK</Button>
                <span className="seat-counter absolute -top-3 -right-3 items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white text-xs font-bold shadow-md z-10">12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="promo flex mb-12">
          <JssLink
            field={fields.RightOfferLink}
            className="m-auto px-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2"
          />
        </div>

      </div>
    </section>
  );
};

export const SkyWingsOffersBusiness = withDatasourceCheck()<SkyWingsOffersProps>(SkyWingsOffersBusinessComponent);
