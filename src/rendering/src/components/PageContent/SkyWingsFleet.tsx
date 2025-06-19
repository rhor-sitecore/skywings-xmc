import { ComponentProps } from 'lib/component-props';
import {
  Text,
  RichText,
  Field,
  ImageField,
  Image,
  withDatasourceCheck,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Card, CardContent } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"

export type SkyWingsFleetProps = ComponentProps & {
  fields: {
    Image: ImageField;
    Title: Field<string>;
    Subtitle: Field<string>;
    FirstClassImage: ImageField;
    FirstClassTitle: Field<string>;
    FirstClassText: RichTextField;
    BusinessClassImage: ImageField;
    BusinessClassTitle: Field<string>;
    BusinessClassText: RichTextField;
    EconomyClassImage: ImageField;
    EconomyClassTitle: Field<string>;
    EconomyClassText: RichTextField;
  };
};

const SkyWingsFleet = ({ fields, params }: SkyWingsFleetProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;
  console.log(fields);

  return (
    <section className={`py-16 ${sxaStyles}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><Text field={fields.Title} /></h2>
            <p className="text-xl text-gray-600"><Text field={fields.Subtitle} /></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Aircraft Image */}
            <div className="relative">
              <Image field={fields.Image} alt={fields.Title.value} width={600} height={400} loading="lazy" className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Fleet</h3>
                <p className="text-lg">State-of-the-art Boeing 787 Dreamliners</p>
              </div>
            </div>

            {/* Fleet Stats */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-700">Aircraft in Fleet</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2.5</div>
                  <div className="text-gray-700">Years Average Age</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">On-Time Performance</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700">Daily Flights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cabin Classes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image field={fields.FirstClassImage} alt={fields.FirstClassTitle.value} width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-yellow-600">{fields.FirstClassTitle.value}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2"><Text field={fields.FirstClassTitle} /></h3>
                <div className="text-gray-600 mb-4">
                  <RichText field={fields.BusinessClassText} />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image field={fields.BusinessClassImage} alt={fields.BusinessClassText.value} width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-600">{fields.BusinessClassTitle.value}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2"><Text field={fields.BusinessClassTitle} /></h3>
                <div className="text-gray-600 mb-4">
                  <RichText field={fields.FirstClassText} />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image field={fields.EconomyClassImage} alt={fields.EconomyClassTitle.value} width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-green-600">{fields.EconomyClassTitle.value}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2"><Text field={fields.EconomyClassTitle} /></h3>
                <div className="text-gray-600 mb-4">
                  <RichText field={fields.EconomyClassText} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export const Default = withDatasourceCheck()<SkyWingsFleetProps>(SkyWingsFleet);
