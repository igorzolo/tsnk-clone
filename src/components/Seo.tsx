import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'ТСНК';
const DEFAULT_DESCRIPTION =
  'Российский производитель досмотрового оборудования. Системы безопасности для транспорта, промышленности и государственных объектов.';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = '/images/og-default.jpg',
  url,
}: SeoProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — досмотровое оборудование`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}