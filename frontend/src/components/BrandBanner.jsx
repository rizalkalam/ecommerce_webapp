import React from 'react';
import '../App.css'; // We'll create this next

// Import your SVG files
import VersaceLogo from '../assets/versace.svg';
import ErigoLogo from '../assets/prada.svg';
import ZaraLogo from '../assets/zara.svg';
import GucciLogo from '../assets/gucci.svg';
import CalvinKleinLogo from '../assets/calvin_klein.svg';

const BrandBanner = () => {
  const brands = [
    { id: 1, name: 'VERSACE', logo: VersaceLogo },
    { id: 2, name: 'ZARA', logo: ZaraLogo },
    { id: 3, name: 'GUCCI', logo: GucciLogo },
    { id: 4, name: 'ERIGO', logo: ErigoLogo },
    { id: 5, name: 'CALVIN KLEIN', logo: CalvinKleinLogo },
  ];

  return (
    <div className="brand-carousel">
      <div className="brand-track">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-slide">
            <img 
              src={brand.logo} 
              alt={brand.name}
              loading="lazy"
              className="brand-logo"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBanner;