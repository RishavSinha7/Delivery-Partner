import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const FeaturesSection = () => {
  // State to track window size for improved responsiveness
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      title: "City Bikes",
      description: "Quick deliveries for small packages within city limits",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/113179/star-city-left-rear-three-quarter.jpeg?isig=0&q=80",
      benefits: [
        "Deliver within 45 minutes",
        "Live tracking",
        "Safe and secure delivery"
      ]
    },
    {
      title: "City Trucks",
      description: "For moving furniture, appliances and heavy items",
      image: "https://www.91trucks.com/_next/image?url=https%3A%2F%2Fimages.91trucks.com%2Ftrucks%2Fmodels%2F53%2F1089%2Fmahindra-bolero-city-pikup-2062057025.jpg%3Fw%3D640%26v%3D1234&w=640&q=75",
      benefits: [
        "Multiple truck types",
        "Expert drivers",
        "Loading/unloading assistance"
      ]
    },
    {
      title: "Packers & Movers",
      description: "Complete home or office shifting solutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiifbtYlhngUPTTFcKgGQvd5DVCWWoqYNGVw&s",
      benefits: [
        "Professional packing",
        "Safe transportation",
        "Insurance options available"
      ]
    },
    {
      title: "Big Trucks",
      description: "Long-distance haulage and commercial freight transportation",
      image: "https://www.godigit.com/content/dam/godigit/directportal/en/mahindra-blazo-x-46.jpg",
      benefits: [
        "Interstate logistics",
        "Temperature-controlled options",
        "Bulk cargo capacity"
      ]
    }
  ];

  return (
    <div id="trucks" className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm sm:text-base text-porter-red font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-porter-black sm:text-4xl">
            Transportation solutions for every need
          </p>
          <p className="mt-3 sm:mt-4 max-w-2xl text-lg sm:text-xl text-porter-gray mx-auto">
            Choose from our range of vehicles to match your transportation requirements
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <img 
                    className="h-40 sm:h-44 md:h-48 w-full object-cover" 
                    src={feature.image} 
                    alt={feature.title}
                    loading="lazy" 
                  />
                </div>
                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-porter-black">{feature.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-porter-gray">{feature.description}</p>
                    <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-porter-red" />
                          </div>
                          <p className="ml-2 sm:ml-3 text-xs sm:text-sm text-porter-darkGray">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
