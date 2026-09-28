import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({
  title,
  description,
  image = '/images/og-default.jpg',
  url,
}: SeoProps) {
  const { t } = useTranslation();
  const siteName = t('seo.siteName');
  const finalDescription = description ?? t('seo.defaultDescription');
  const fullTitle = title
    ? `${title} — ${siteName}`
    : `${siteName} — ${t('seo.defaultDescription')}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}