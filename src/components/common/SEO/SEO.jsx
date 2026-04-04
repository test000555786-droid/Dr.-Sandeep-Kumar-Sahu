import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Dr. Sandeep Kumar Sahu | Endocrinologist, Cuttack',
  description = 'Expert Endocrinologist in Cuttack, Odisha. MBBS, MD, DM (Endocrinology) from SCB Medical College. Specializing in Diabetes, Thyroid, Hormonal Disorders at Sai Shree Health Care.',
  keywords = 'Endocrinologist Cuttack, Diabetes doctor Cuttack, Thyroid specialist Odisha, Hormone specialist, Dr Sandeep Kumar Sahu',
  ogImage = '/images/og-image.jpg',
  canonical,
}) => {
  const siteUrl = 'https://drsandeependicuttack.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Dr. Sandeep Kumar Sahu" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Physician',
          name: 'Dr. Sandeep Kumar Sahu',
          description: 'Endocrinologist specializing in Diabetes, Thyroid, and Hormonal Disorders',
          medicalSpecialty: 'Endocrinology',
          telephone: '+917008512773',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Near Shreema Hospital, Ring Road, Mangalabag',
            addressLocality: 'Cuttack',
            addressRegion: 'Odisha',
            postalCode: '753001',
            addressCountry: 'IN',
          },
          memberOf: {
            '@type': 'MedicalOrganization',
            name: 'Sai Shree Health Care',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
