import {
    RichText,
    Text,
    Field,
    ImageField,
    Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Head from 'next/head';
import { removeTags } from 'src/helpers/ContentSearchHelper';
import { Button } from "@/src/components/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/components/ui/tabs"
import { Separator } from "@/src/components/components/ui/separator"
import {
  Plane,
  Camera,
  Bed,
  Phone,
  Navigation,
  Sun,
  Cloud,
  Snowflake,
} from "lucide-react"

type SkyWingsDestinationDetailProps = ComponentProps & {
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
        Description: Field<string>;
    };
};

const destination = {
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    description:
      "Tokyo, Japan's bustling capital, seamlessly blends ultra-modern technology with traditional culture. From neon-lit skyscrapers in Shibuya to serene temples in Asakusa, Tokyo offers an incredible diversity of experiences that captivate millions of visitors each year.",
    heroImage: "/images/tokyo.jpg",
    rating: 4.9,
    reviewCount: 3521,
    flightPrice: "from $899",
    bestTime: "March - May, September - November",
    temperature: "10-28°C",
    timeZone: "JST (UTC+9)",
    language: "Japanese",
    currency: "Japanese Yen (JPY)",
    visaRequired: "No (90 days for most countries)",
    gallery: [
      "/images/tokyo.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      {
        name: "Shibuya Crossing",
        description: "World's busiest pedestrian crossing and iconic Tokyo symbol",
        image: "/placeholder.svg?height=200&width=300",
        category: "Landmark",
      },
      {
        name: "Senso-ji Temple",
        description: "Tokyo's oldest temple in the historic Asakusa district",
        image: "/placeholder.svg?height=200&width=300",
        category: "Temple",
      },
      {
        name: "Tokyo Skytree",
        description: "World's second-tallest structure with panoramic city views",
        image: "/placeholder.svg?height=200&width=300",
        category: "Observatory",
      },
      {
        name: "Tsukiji Outer Market",
        description: "Famous fish market and street food paradise",
        image: "/placeholder.svg?height=200&width=300",
        category: "Market",
      },
      {
        name: "Meiji Shrine",
        description: "Peaceful Shinto shrine surrounded by forest",
        image: "/placeholder.svg?height=200&width=300",
        category: "Shrine",
      },
      {
        name: "Harajuku District",
        description: "Youth culture hub known for fashion and pop culture",
        image: "/placeholder.svg?height=200&width=300",
        category: "District",
      },
    ],
    activities: [
      {
        category: "Culture & Temples",
        items: [
          "Visit Senso-ji Temple and explore Asakusa district",
          "Experience a traditional tea ceremony",
          "Explore Meiji Shrine and surrounding forest",
          "Discover the Imperial Palace East Gardens",
          "Visit Ueno Park and its museums",
        ],
      },
      {
        category: "Food & Dining",
        items: [
          "Try authentic sushi at Tsukiji Outer Market",
          "Experience a traditional kaiseki dinner",
          "Explore ramen shops in Shibuya and Shinjuku",
          "Visit an izakaya for drinks and small plates",
          "Take a food tour through local neighborhoods",
        ],
      },
      {
        category: "Modern Tokyo",
        items: [
          "Experience the energy of Shibuya Crossing",
          "Visit Tokyo Skytree for panoramic views",
          "Explore the electronics district of Akihabara",
          "Shop in the trendy Harajuku district",
          "Experience Tokyo's nightlife in Roppongi",
        ],
      },
      {
        category: "Day Trips",
        items: [
          "Visit Mount Fuji and Hakone hot springs",
          "Explore historic Kamakura and its Great Buddha",
          "Day trip to Nikko's temples and nature",
          "Visit Kawagoe's preserved Edo-period streets",
          "Explore the art island of Naoshima",
        ],
      },
    ],
    weather: [
      {
        season: "Spring",
        months: "Mar-May",
        temp: "10-20°C",
        icon: <Sun className="h-5 w-5" />,
        description: "Cherry blossom season, mild weather",
      },
      {
        season: "Summer",
        months: "Jun-Aug",
        temp: "20-30°C",
        icon: <Sun className="h-5 w-5" />,
        description: "Hot and humid with rainy season",
      },
      {
        season: "Autumn",
        months: "Sep-Nov",
        temp: "15-25°C",
        icon: <Cloud className="h-5 w-5" />,
        description: "Pleasant weather, fall colors",
      },
      {
        season: "Winter",
        months: "Dec-Feb",
        temp: "5-12°C",
        icon: <Snowflake className="h-5 w-5" />,
        description: "Cool and dry, occasional snow",
      },
    ],
    travelTips: [
      {
        category: "Transportation",
        tips: [
          "Get a JR Pass for unlimited train travel",
          "Tokyo Metro and JR lines cover the entire city",
          "IC cards (Suica/Pasmo) work on all public transport",
          "Avoid rush hours (7-9 AM, 5-7 PM) when possible",
          "Taxis are expensive but very clean and reliable",
        ],
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Bow slightly when greeting people",
          "Remove shoes when entering homes and some restaurants",
          "Don't eat or drink while walking",
          "Keep conversations quiet on public transport",
          "Cash is still king - many places don't accept cards",
        ],
      },
      {
        category: "Practical Tips",
        tips: [
          "Learn basic Japanese phrases - locals appreciate effort",
          "Free WiFi is available at most stations and convenience stores",
          "Convenience stores (konbini) are everywhere and very useful",
          "Tipping is not customary and can be considered rude",
          "Emergency number is 110 (police) or 119 (fire/ambulance)",
        ],
      },
    ],
    accommodation: [
      {
        type: "Luxury Hotels",
        examples: ["The Ritz-Carlton Tokyo", "Aman Tokyo", "Park Hyatt Tokyo"],
        priceRange: "¥40,000-80,000/night",
        description: "World-class service with stunning city views",
      },
      {
        type: "Business Hotels",
        examples: ["Hotel Gracery Shinjuku", "APA Hotels", "Daiwa Roynet Hotels"],
        priceRange: "¥8,000-15,000/night",
        description: "Efficient, clean rooms perfect for business travelers",
      },
      {
        type: "Traditional Ryokan",
        examples: ["Hoshinoya Tokyo", "Andon Ryokan", "Sadachiyo"],
        priceRange: "¥15,000-50,000/night",
        description: "Traditional Japanese inns with tatami rooms and kaiseki meals",
      },
      {
        type: "Budget Options",
        examples: ["Capsule hotels", "Hostels", "Manga cafes"],
        priceRange: "¥2,000-6,000/night",
        description: "Unique Japanese accommodation experiences",
      },
    ],
    flightInfo: {
      airports: ["Narita (NRT)", "Haneda (HND)"],
      flightTime: "11-14 hours from US West Coast",
      airlines: ["JAL", "ANA", "United", "American Airlines"],
      directFlights: ["Los Angeles", "San Francisco", "Seattle", "New York"],
    },
  }

const SkyWingsDestinationDetail = (props: SkyWingsDestinationDetailProps): JSX.Element => {
    const sxaStyles = `${props.params?.styles || ''}`;
    console.log(props);

    return (
        <>
            <Head>
                <meta property="og:description" content={removeTags(props.fields?.Title?.value)} />
                <meta property="og:title" content={props.fields?.Title?.value} />
                <meta property="og:image" content={props.fields?.Image?.value.src} />
                <meta property="og:type" content="destination" />
            </Head>
            <div className={`container mx-auto px-4 py-12 ${sxaStyles}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Description */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About <Text field={props.fields.Title} /></h2>
                            <div className="text-gray-700 text-lg leading-relaxed"><RichText field={props.fields.Description} /></div>
                        </section>

                        {/* Photo Gallery */}
                        {/* <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {destination.gallery.map((image, index) => (
                                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${destination.name} ${index + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section> */}

                        {/* Top Highlights */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {destination.highlights.map((highlight, index) => (
                                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-40">
                                            <Image
                                                src={highlight.image || "/placeholder.svg"}
                                                alt={highlight.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <Badge className="absolute top-2 left-2 bg-blue-600">{highlight.category}</Badge>
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-2">{highlight.name}</h3>
                                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Detailed Information Tabs */}
                        <section className="mb-12">
                            <Tabs defaultValue="activities" className="w-full">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="activities">Activities</TabsTrigger>
                                    <TabsTrigger value="weather">Weather</TabsTrigger>
                                    <TabsTrigger value="tips">Travel Tips</TabsTrigger>
                                    <TabsTrigger value="accommodation">Hotels</TabsTrigger>
                                </TabsList>

                                <TabsContent value="activities" className="mt-6">
                                    <div className="space-y-6">
                                        {destination.activities.map((category, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center space-x-2">
                                                        <Camera className="h-5 w-5 text-blue-600" />
                                                        <span>{category.category}</span>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {category.items.map((item, itemIndex) => (
                                                            <li key={itemIndex} className="flex items-start space-x-2">
                                                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                                <span className="text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="weather" className="mt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {destination.weather.map((season, index) => (
                                            <Card key={index}>
                                                <CardContent className="p-6">
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        {season.icon}
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900">{season.season}</h3>
                                                            <p className="text-sm text-gray-600">{season.months}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Temperature:</span>
                                                            <span className="font-medium">{season.temp}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">{season.description}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="tips" className="mt-6">
                                    <div className="space-y-6">
                                        {destination.travelTips.map((category, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center space-x-2">
                                                        <Navigation className="h-5 w-5 text-blue-600" />
                                                        <span>{category.category}</span>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-3">
                                                        {category.tips.map((tip, tipIndex) => (
                                                            <li key={tipIndex} className="flex items-start space-x-3">
                                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                                <span className="text-gray-700">{tip}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="accommodation" className="mt-6">
                                    <div className="space-y-6">
                                        {destination.accommodation.map((type, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <Bed className="h-5 w-5 text-blue-600" />
                                                            <span>{type.type}</span>
                                                        </div>
                                                        <Badge variant="outline">{type.priceRange}</Badge>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-600 mb-4">{type.description}</p>
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium text-gray-900">Popular Options:</h4>
                                                        <ul className="space-y-1">
                                                            {type.examples.map((example, exampleIndex) => (
                                                                <li key={exampleIndex} className="text-gray-700 text-sm">
                                                                    • {example}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Flight Booking Card */}
                        <Card className="mb-8 sticky top-24">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Plane className="h-5 w-5 text-blue-600" />
                                    <span>Book Your Flight</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{destination.flightPrice}</div>
                                    <p className="text-gray-600 text-sm">Round trip per person</p>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Flight Time:</span>
                                        <span className="font-medium">{destination.flightInfo.flightTime}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Airports:</span>
                                        <span className="font-medium">{destination.flightInfo.airports.join(", ")}</span>
                                    </div>
                                </div>

                                <Button className="w-full" size="lg">
                                    Search Flights
                                </Button>

                                <div className="text-center">
                                    <p className="text-xs text-gray-500">
                                        Direct flights available from {destination.flightInfo.directFlights.join(", ")}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Facts */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Quick Facts</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Language:</span>
                                    <span className="font-medium">{destination.language}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Currency:</span>
                                    <span className="font-medium">{destination.currency}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Time Zone:</span>
                                    <span className="font-medium">{destination.timeZone}</span>
                                </div>
                                <div className="flex items-start justify-between">
                                    <span className="text-gray-600">Visa:</span>
                                    <span className="font-medium text-right">{destination.visaRequired}</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Support */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                    <span>Need Help?</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm mb-4">
                                    Our travel experts are here to help you plan the perfect trip to {destination.name}.
                                </p>
                                <Button variant="outline" className="w-full">
                                    Contact Support
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Default = SkyWingsDestinationDetail;
