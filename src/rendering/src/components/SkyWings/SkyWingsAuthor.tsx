import {
    RichText,
    Text,
    Field,
    ImageField,
    Image,
    withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/src/components/components/ui/button"
import { Card, CardContent } from "@/src/components/components/ui/card"
import { Twitter, Linkedin } from "lucide-react"

type SkyWingsAuthorProps = ComponentProps & {
    fields: {
        Name: Field<string>;
        Picture: ImageField;
        Bio: Field<string>;
    };
};

const SkyWingsAuthor = (props: SkyWingsAuthorProps): JSX.Element => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <Card className="mb-12">
                    <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                            <Image
                                field={props.fields.Picture}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">About <Text field={props.fields.Name} /></h3>
                                <div className="text-gray-600 mb-4"><RichText field={props.fields.Bio} /></div>
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline" size="sm">
                                        Follow
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export const Default = withDatasourceCheck()<SkyWingsAuthorProps>(SkyWingsAuthor);
