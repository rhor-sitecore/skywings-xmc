import React from 'react';
// DEMO TEAM CUSTOMIZATION - Removed Field and Text. Added RichTextField.
import {
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Image,
  LinkField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
// END CUSTOMIZATION

interface Fields {
  PromoIcon: ImageField;
  PromoIcon2: ImageField; // DEMO TEAM CUSTOMIZATION - Additional field
  PromoText: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoLink: LinkField;
  PromoText2: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoText3: RichTextField; // DEMO TEAM CUSTOMIZATION - Additional field
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`promo promo-top flex flex-col [&>*]:flex gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${props.params.styles}`}
        id={id ? id : undefined}
      >
        {/* Column 1: Image */}
        <div className="image relative flex-1 flex items-stretch max-h-96">
          <Image field={props.fields.PromoIcon} alt={props.fields.PromoText} width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
        {/* Column 2: Text */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div className="p-6 pt-0">
            <p className="text-sm text-blue-600 font-medium p-0">
              <JssRichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </p>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <JssRichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <p className="text-gray-600 mb-4 p-0">
              <JssRichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </p>
            <JssLink
              field={props.fields.PromoLink}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const ImageLeft = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`promo flex flex-col md:flex-row gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${props.params.styles}`}
        id={id ? id : undefined}
      >
        {/* Column 1: Image */}
        <div className="image relative flex-1 flex items-stretch">
          <Image field={props.fields.PromoIcon} alt="Image alt text" width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
        {/* Column 2: Text */}
        <div className="flex flex-col justify-center space-y-6 pr-8 flex-1">
          <div className="p-6">
            <p className="text-sm text-blue-600 font-medium p-0">
              <JssRichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </p>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <JssRichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <p className="text-gray-600 mb-4 p-0">
              <JssRichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </p>
            <div className="relative">
              <JssLink
                field={props.fields.PromoLink}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
              />
              {/* Circle badge - Hidden by default.  Turn on in Sytling settings in Pages. */}
              <span className="seat-counter hidden absolute -top-3 -right-3 items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white text-xs font-bold shadow-md z-10">
                12
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const ImageRight = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`promo promo-right flex flex-col md:flex-row gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${props.params.styles}`}
        id={id ? id : undefined}
      >
        {/* Column 1: Text */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div className="p-6 pt-0">
            <p className="text-sm text-blue-600 font-medium p-0">
              <JssRichText field={props.fields.PromoText3} className="text-sm text-blue-600 font-medium p-0" />
            </p>
            <h3 className="text-gray-900 text-2xl font-bold mb-2 p-0">
              <JssRichText field={props.fields.PromoText} className="text-2xl font-bold mb-2 p-0" />
            </h3>
            <p className="text-gray-600 mb-4 p-0">
              <JssRichText field={props.fields.PromoText2} className="text-gray-600 mb-4 p-0" />
            </p>
            <JssLink
              field={props.fields.PromoLink}
              className="inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            />
          </div>
        </div>
        {/* Column 2: Image */}
        <div className="image relative flex-1 flex items-stretch">
          <Image field={props.fields.PromoIcon} alt={props.fields.PromoText} width={600} height={400} loading="lazy" className="w-full h-auto object-cover" />
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

{/* <>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    <div className="relative">
      <img alt="Our Fleet &amp; Experience" width="600" height="400" loading="lazy" className="w-full h-80 object-cover rounded-lg shadow-lg" src="/-/media/Project/SkyWings/aircraft-exterior.jpg?h=600&amp;iar=0&amp;w=800">
    </div>
    <div className="flex flex-col justify-center space-y-6">
      <div className="p-6 pt-0">
        <p className="text-sm text-blue-600 font-medium mb-4 m-16">Valid until Aug 31</p>
        <h3 className="text-2xl font-bold mb-2">Modern Fleet</h3>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor amet mustache knausgaard. Humblebrag kombucha DIY enamel pin wayfarers tofu authentic. Tilde quinoa mumblecore fixie bitters. Meh knausgaard pabst cloud bread waistcoat. Put a bird on it tumblr man braid fingerstache tumeric echo park. Vinyl locavore gluten-free put a bird on it stumptown vice, jianbing leggings swag taxidermy whatever. Actually stumptown pop-up, 8-bit try-hard tumeric chartreuse.</p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Book Now</button>
      </div>
    </div>
  </div>

  <div className={`flex gap-8 mb-12 rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow ${props.params.styles}`} id={id ? id : undefined}>
    <div className="flex flex-col justify-center space-y-6 p-8 flex-1">
      <div className="p-6 pt-0">
        <p className="text-sm text-blue-600 font-medium mb-4"><JssRichText field={props.fields.PromoText3} /></p>
        <h3 className="text-2xl font-bold mb-2"><JssRichText field={props.fields.PromoText} /></h3>
        <p className="text-gray-600 mb-4"><JssRichText field={props.fields.PromoText2} /></p>
        <JssLink field={props.fields.PromoLink} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" />
      </div>
    </div>
    <div className="relative flex-1">
      <JssImage field={props.fields.PromoIcon} width={600} height={400} loading="lazy" className="w-full h-full object-cover" />
    </div>
  </div>
</div >
</> */}



// export const WithText = (props: PromoProps): JSX.Element => {
//   const id = props.params.RenderingIdentifier;
//   if (props.fields) {
//     return (
//       <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
//         <div className="component-content">
//           <div className="field-promoicon">
//             <JssImage field={props.fields.PromoIcon} />
//           </div>
//           <div className="promo-text">
//             {/* DEMO TEAM CUSTOMIZATION - Replace Text with JssRichText */}
//             <div>
//               <div className="field-promotext">
//                 <JssRichText className="promo-text" field={props.fields.PromoText} />
//               </div>
//             </div>
//             <div className="field-promotext">
//               <JssRichText className="promo-text" field={props.fields.PromoText2} />
//             </div>
//             {/* END CUSTOMIZATION */}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return <PromoDefaultComponent {...props} />;
// };

// // DEMO TEAM CUSTOMIZATION - New variant
// export const WithColumns = (props: PromoProps): JSX.Element => {
//   if (props.fields) {
//     return (
//       <div className={`component promo promo-columns ${props.params.styles}`}>
//         <div className="component-content">
//           <div className="field-promoicon">
//             <JssImage field={props.fields.PromoIcon} />
//           </div>
//           <div className="promo-text">
//             <div className="text-cols">
//               <div className="field-promotext">
//                 <JssImage field={props.fields.PromoIcon2} />
//                 <JssRichText className="rich-text" field={props.fields.PromoText} />
//               </div>
//               <div className="field-promotext2">
//                 <JssImage field={props.fields.PromoIcon2} />
//                 <JssRichText className="rich-text" field={props.fields.PromoText2} />
//               </div>
//               <div className="field-promotext3">
//                 <JssImage field={props.fields.PromoIcon2} />
//                 <JssRichText className="rich-text" field={props.fields.PromoText3} />
//               </div>
//             </div>
//             <div className="field-promolink">
//               <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return <PromoDefaultComponent {...props} />;
// };
// END CUSTOMIZATION
