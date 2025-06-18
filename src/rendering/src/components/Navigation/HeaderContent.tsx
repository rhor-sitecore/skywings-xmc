import { Placeholder, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';

import { ParsedUrlQueryInput } from 'querystring';
import { HeaderProps } from './Header';

export type HeaderContentProps = HeaderProps & {
  pathname?: string;
  asPath?: string;
  query?: string | ParsedUrlQueryInput;
  sitecoreContext: SitecoreContextValue;
};

const HeaderContent = (props: HeaderContentProps): JSX.Element => {
  return (
    <>
      <Placeholder name="jss-header-content" rendering={props.rendering} />
    </>
  );
};

export default HeaderContent;
