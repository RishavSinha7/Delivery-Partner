
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "City Bikes",
      description: "Quick deliveries for small packages within city limits",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Deliver within 45 minutes",
        "Live tracking",
        "Safe and secure delivery"
      ]
    },
    {
      title: "City Trucks",
      description: "For moving furniture, appliances and heavy items",
      image: "https://images.unsplash.com/photo-1586186551287-a267dc92fa4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Multiple truck types",
        "Expert drivers",
        "Loading/unloading assistance"
      ]
    },
    {
      title: "Packers & Movers",
      description: "Complete home or office shifting solutions",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Professional packing",
        "Safe transportation",
        "Insurance options available"
      ]
    }
  ];

  return (
    <div id="trucks" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-porter-red font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-porter-black sm:text-4xl">
            Transportation solutions for every need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-porter-gray lg:mx-auto">
            Choose from our range of vehicles to match your transportation requirements
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={feature.image} alt={feature.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-porter-black">{feature.title}</h3>
                    <p className="mt-3 text-base text-porter-gray">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-porter-red" />
                          </div>
                          <p className="ml-3 text-sm text-porter-darkGray">{benefit}</p>
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
