import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Jeevan Chetna Foundation | Empowering Communities",
  description = "Jeevan Chetna Foundation is dedicated to empowering marginalized communities through education, healthcare, and sustainable livelihoods. Join us in creating a better tomorrow.",
  keywords = "Jeevan Chetna Foundation, NGO, charity, education, healthcare, sustainable livelihoods, community development, India, donate, volunteer, tree plantation, women empowerment",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterCreator = "@JeevanChetnaF", // Replace with actual Twitter handle if available
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const defaultOgUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.jeevanchetnafoundation.org'; // Replace with your actual domain

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || defaultOgUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "/jeevanchetna-logo.png"} /> {/* Use your default image */}

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl || defaultOgUrl} />
      <meta property="twitter:title" content={twitterTitle || title} />
      <meta property="twitter:description" content={twitterDescription || description} />
      <meta property="twitter:image" content={twitterImage || "/jeevanchetna-logo.png"} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
    </Helmet>
  );
};

export default SEO;