import {
    Field,
    Image,
    ImageField,
    withDatasourceCheck,
    Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/src/components/components/ui/button"
import { Badge } from "@/src/components/components/ui/badge"
import {
  Star,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react"

export type SkyWingsDestinationBannerProps = ComponentProps & {
    fields: {
        Name: Field<string>;
        Country: Field<string>;
        Continent: Field<string>;
        Rating: Field<string>;
        BannerImage: ImageField
    }
};

const SkyWingsDestinationBanner = (props: SkyWingsDestinationBannerProps): JSX.Element => {
    return (
        <>
            <div className="container mx-auto px-4 py-4">
                <Link href="/destinations" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Destinations
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative">
                <div className="relative h-96 md:h-[500px]">
                    <Image
                        field={props.fields.BannerImage}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-blue-600"><Text field={props.fields.Continent} /></Badge>
                            <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="font-medium"><Text field={props.fields.Rating} /></span>
                                <span className="text-blue-100">34 reviews</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2"><Text field={props.fields.Name} /></h1>
                        <p className="text-xl text-blue-100"><Text field={props.fields.Country} /></p>
                    </div>

                    <div className="absolute top-8 right-8 flex space-x-2">
                        <Button variant="secondary" size="sm">
                            <Heart className="h-4 w-4 mr-2" />
                            Save
                        </Button>
                        <Button variant="secondary" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export const Default = withDatasourceCheck()<SkyWingsDestinationBannerProps>(SkyWingsDestinationBanner);
