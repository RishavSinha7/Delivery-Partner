
import { Button } from "@/components/ui/button";

const DownloadAppSection = () => {
  return (
    <section id="bikes" className="bg-porter-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Download the Porter App
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-red-100">
              Book, track, and manage all your logistics needs on the go. Available for iOS and Android devices.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-lg">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.11,2.69a5.32,5.32,0,0,0-4.36,2.49,5.23,5.23,0,0,0-4.35-2.49A5.08,5.08,0,0,0,3.05,7.78v0s0,.09,0,.14a7.55,7.55,0,0,0,1.72,4.67C6.42,14.7,12,19.27,12,19.27s6.18-5.11,7.33-7.13a7.05,7.05,0,0,0,1.45-4.37A5.17,5.17,0,0,0,17.11,2.69Z"/>
                </svg>
                App Store
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-lg">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.92,10.02C17.39,7.99,15.53,6.53,13.37,6.53c-1.59,0-3,0.83-3.81,2.07c-0.8-1.24-2.21-2.07-3.81-2.07c-2.15,0-4.02,1.46-4.55,3.49c-0.06,0.25-0.09,0.5-0.09,0.77c0,0.21,0.02,0.42,0.05,0.63c0.46,4.06,7.13,8.06,8.4,8.06l0,0c1.27,0,7.94-4.01,8.4-8.06c0.03-0.21,0.05-0.42,0.05-0.63C18.01,10.53,17.98,10.27,17.92,10.02z"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="mx-auto" 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Porter App on mobile phone" 
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
