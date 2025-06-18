import { ComponentProps } from 'lib/component-props';
import {
  Text,
  Field,
  LinkField,
  ImageField,
  Image,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Card, CardContent } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"

export type SkyWingsServicesProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    DestinationOneImage: ImageField;
    DestinationOneTitle: Field<string>;
    DestinationOneLink: LinkField;
    DestinationTwoImage: ImageField;
    DestinationTwoTitle: Field<string>;
    DestinationTwoLink: LinkField;
    DestinationThreeImage: ImageField;
    DestinationThreeTitle: Field<string>;
    DestinationThreeLink: LinkField;
    DestinationFourImage: ImageField;
    DestinationFourTitle: Field<string>;
    DestinationFourLink: LinkField;
  };
};

const SkyWingsServices = ({ fields, params }: SkyWingsServicesProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <section className={`py-16 bg-gray-50 ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
            <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image field={fields.DestinationOneImage} alt={fields.DestinationOneTitle.value} width={400} height={300} loading="lazy" className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-blue-600">From $599</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900"><Text field={fields.DestinationOneTitle} /></h3>
                  {/* <p className="text-gray-600">{destination.country}</p> */}
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image field={fields.DestinationTwoImage} alt={fields.DestinationTwoTitle.value} width={400} height={300} loading="lazy" className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-blue-600">From $899</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900"><Text field={fields.DestinationTwoTitle} /></h3>
                  {/* <p className="text-gray-600">{destination.country}</p> */}
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image field={fields.DestinationThreeImage} alt={fields.DestinationThreeTitle.value} width={400} height={300} loading="lazy" className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-blue-600">From $499</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900"><Text field={fields.DestinationThreeTitle} /></h3>
                  {/* <p className="text-gray-600">{destination.country}</p> */}
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <Image field={fields.DestinationFourImage} alt={fields.DestinationFourTitle.value} width={400} height={300} loading="lazy" className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 right-4 bg-blue-600">From $529</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-900"><Text field={fields.DestinationFourTitle} /></h3>
                {/* <p className="text-gray-600">{destination.country}</p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export const Default = withDatasourceCheck()<SkyWingsServicesProps>(SkyWingsServices);
