import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';
    
    function DynamicMeta({ title, description, canonicalUrl }) {
      return (
        <div>
          <Helmet>
            <title>{title} |  Shahi </title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
          </Helmet>
          
          {/* Rest of your blog post content */}
        </div>
      );
    }
    
    export default DynamicMeta;