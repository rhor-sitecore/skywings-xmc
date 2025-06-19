import { Button } from "@/src/components/components/ui/button"
import { Card } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import { Calendar, Clock, ArrowRight, Heart, Share2, User } from "lucide-react"
import Link from "next/link"
import {
    Field,
    withDatasourceCheck,
    Text,
    Image,
    ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type SkyWingsFeaturedBlogProps = ComponentProps & {
    fields: {
        Title: Field<string>;
        Excerpt: Field<string>;
        PublishDate: Field<string>;
        Image: ImageField;
        Author: Field<string>;
        ReadTime: Field<string>;
        Category: Field<string>;
    };
  };

const SkyWingsFeaturedBlog = (props: SkyWingsFeaturedBlogProps): JSX.Element => {
    return (
      <>
        <section className="py-12">
            <div className="container mx-auto px-4">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
                <p className="text-gray-600">Our editor&apos;s pick for this week</p>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                    <Image field={props.fields.Image} width={800} height={400} className="w-full h-64 lg:h-full object-cover" />
                    <Badge className="absolute top-4 left-4 bg-yellow-600">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <Badge variant="outline"><Text field={props.fields.Category} /> </Badge>
                    <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span><Text field={props.fields.Author} /></span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span><Text field={props.fields.PublishDate} /></span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span><Text field={props.fields.ReadTime} /></span>
                    </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4"><Text field={props.fields.Title} /></h3>
                    <p className="text-gray-600 mb-6"><Text field={props.fields.Excerpt} /></p>
                    <div className="flex items-center justify-between">
                    <Link href="#">
                        <Button>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </Card>
            </div>
        </section>
      </>
  );
};

export const Default = withDatasourceCheck()<SkyWingsFeaturedBlogProps>(SkyWingsFeaturedBlog);
