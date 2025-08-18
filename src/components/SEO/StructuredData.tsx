import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'Review' | 'FAQPage';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    if (type === 'Organization') {
      return {
        ...baseData,
        name: "Degen Rewards",
        description: "Your trusted source for verified casino rewards, bonuses, and promotions.",
        url: "https://degenrewards.com",
        logo: "https://degenrewards.com/logo.png",
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          email: "degenrewards@gmail.com",
          contactType: "Customer Service"
        }
      };
    }

    if (type === 'WebSite') {
      return {
        ...baseData,
        name: "Degen Rewards",
        description: "Casino rewards, bonuses, and strategy guides",
        url: "https://degenrewards.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://degenrewards.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;