import {
    Image,
    Field,
    RichText,
    withDatasourceCheck,
    Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { SkyWingsDestinations } from 'src/types/skyWingsDestinations';
import { Button } from "@/src/components/components/ui/button"
import { Card, CardContent } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import {
    MapPin,
    Star,
    Clock,
    Thermometer,
    Calendar,
} from "lucide-react"

export type SkyWingsDestinationsListProps = ComponentProps & {
    fields: {
        Title: Field<string>;
        Content: Field<string>;
        items: SkyWingsDestinations[];
    }
};

const SkyWingsDestinationsList = (props: SkyWingsDestinationsListProps): JSX.Element => {
    console.log(props);
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
                        <p className="text-gray-600">Handpicked destinations for unforgettable experiences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {props.fields.items.map((destination, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className="relative">
                                    <Image
                                        field={destination.fields.Image}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-blue-600"><Text field={destination.fields.Type} /></Badge>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                            <span className="text-sm font-medium"><Text field={destination.fields.Rating} /></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold"><Text field={destination.fields.Title} /></h3>
                                        <p className="text-blue-100"><Text field={destination.fields.Country} /></p>
                                    </div>
                                    <div className="absolute bottom-4 right-4">
                                        <Badge variant="secondary" className="text-lg font-bold">
                                        <Text field={destination.fields.Price} />
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="text-gray-600 mb-4 line-clamp-2"><RichText field={destination.fields.Content} /></div>

                                    {/* Quick Info */}
                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-blue-600" />
                                            <span className="text-gray-600"><Text field={destination.fields.BestMonths} /></span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Thermometer className="h-4 w-4 text-blue-600" />
                                            <span className="text-gray-600"><Text field={destination.fields.ExpectedTemps} /></span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-blue-600" />
                                            <span className="text-gray-600"><Text field={destination.fields.SuggestedDuration} /></span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4 text-blue-600" />
                                            <span className="text-gray-600"><Text field={destination.fields.Continent} /></span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Top Highlights</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {/* {destination.highlights.slice(0, 3).map((highlight, index) => ( 
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {highlight}
                                                </Badge>
                                            ))}  */}
                                            {/* {destination.highlights.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{destination.highlights.length - 3} more
                                                </Badge>
                                            )} */}
                                            <Badge variant="outline" className="text-xs">
                                                Highlights here
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {/* {destination.activities.map((activity, index) => (
                                                <Badge key={index} variant="secondary" className="text-xs">
                                                    {activity}
                                                </Badge>
                                            ))} */}
                                            <Badge variant="secondary" className="text-xs">Activities here</Badge>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex space-x-2">
                                        <Button className="flex-1">Book Flight</Button>
                                        <Button variant="outline">Learn More</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button size="lg" variant="outline">
                            Load More Destinations
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export const Default = withDatasourceCheck()<SkyWingsDestinationsListProps>(SkyWingsDestinationsList);