import { ComponentProps } from 'lib/component-props';
import {
  Text,
  RichText,
  Field,
  LinkField,
  Image,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import { Button } from "@/src/components/components/ui/button"

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
