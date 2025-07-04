import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Menu, X, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-porter-red font-bold text-3xl">Delivery Partner</Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#trucks" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-porter-black">
                Trucks
              </a>
              <a href="#bikes" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-porter-gray hover:text-porter-black">
                Bikes
              </a>
              <a href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-porter-gray hover:text-porter-black">
                How It Works
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-porter-gray hover:text-porter-black">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Button 
              variant="outline" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-porter-black bg-white hover:bg-porter-lightGray"
            >
            </Button>
            <Link to="/auth">
              <Button 
                variant="ghost"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-porter-black hover:bg-porter-lightGray"
              >
                <LogIn className="mr-2 h-4 w-4 text-porter-red" />
                <span>Login</span>
              </Button>
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-porter-gray hover:text-porter-black hover:bg-porter-lightGray focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-1000 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#trucks"
            className="block pl-3 pr-4 py-2 border-l-4 border-porter-red text-base font-medium text-porter-black bg-porter-lightGray"
          >
            Trucks
          </a>
          <a
            href="#bikes"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-porter-gray hover:text-porter-black hover:bg-porter-lightGray hover:border-porter-red"
          >
            Bikes
          </a>
          <a
            href="#how-it-works"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-porter-gray hover:text-porter-black hover:bg-porter-lightGray hover:border-porter-red"
          >
            How It Works
          </a>
          <a
            href="#contact"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-porter-gray hover:text-porter-black hover:bg-porter-lightGray hover:border-porter-red"
          >
            Contact
          </a>
          <div className="pl-3 pr-4 py-2">
            <Link to="/auth" className="block">
              <Button 
                variant="ghost"
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-porter-black hover:bg-porter-lightGray"
              >
                <LogIn className="mr-2 h-4 w-4 text-porter-red" />
                <span>Login</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
