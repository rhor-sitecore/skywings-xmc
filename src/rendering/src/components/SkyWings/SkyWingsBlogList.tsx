import Link from 'next/link';
import {
  Text,
  Image,
  RichText,
  DateField,
  LayoutServicePageState,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { SkyWingsNews } from 'src/types/skyWingsNews';
import { newsDateFormatter } from '../../helpers/DateHelper';
import { Button } from "@/src/components/components/ui/button"
import { Card, CardContent } from "@/src/components/components/ui/card"
import { Badge } from "@/src/components/components/ui/badge"
import { Calendar, Clock, Heart, Share2, User } from "lucide-react"

type SkyWingsBlogListProps = ComponentProps & {
  fields: {
    items: SkyWingsNews[];
  };
};

const SkyWingsBlogList = (props: SkyWingsBlogListProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;
  const hasNews = !!props?.fields?.items?.length;
  const sxaStyles = `${props.params?.styles || ''}`;
  !hasNews && console.warn('Missing Datasource Item');
  const pageEditingMissingDatasource = !hasNews && isPageEditing && <p>Missing Datasource Item</p>;

  const newsCards =
    props.fields.items &&
    props.fields.items.map((news, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <Image
            field={news.fields.Image}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-blue-600"><Text field={news.fields.Category} /></Badge>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span><Text field={news.fields.Author} /></span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>
                <DateField
                  field={news.fields.PublishDate}
                  render={newsDateFormatter}
                />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span><Text field={news.fields.ReadTime} /></span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2"><Text field={news.fields.Title} /></h3>
          <div className="text-gray-600 text-sm mb-4 line-clamp-3"><RichText field={news.fields.Excerpt} /></div>
          <div className="flex items-center justify-between">
            <Link href={`/blog/${news.url}`}>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </Link>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ));

  const newsList = hasNews && (
    <section className={`py-12 bg-gray-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
          <p className="text-gray-600">Fresh travel inspiration and tips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsCards}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {newsList}
      {pageEditingMissingDatasource}
    </>
  );
};

export const Default = SkyWingsBlogList;
