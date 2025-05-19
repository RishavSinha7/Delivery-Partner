// ENHANCED VERSION OF DRIVER <PANEL>

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Navigation, Wallet, History, Package, Settings, Menu, X, User, ChevronUp, ChevronDown, Star, AlertCircle } from 'lucide-react';

// Import refactored components
import ActiveTripsTab, { Trip } from '@/components/driver/ActiveTripsTab';
import CompletedTripsTab from '@/components/driver/CompletedTripsTab';
import WalletTab from '@/components/driver/WalletTab';
import VehicleTab from '@/components/driver/VehicleTab';
import TripUpdateTab from '@/components/driver/TripUpdateTab';
import ProfileTab from '@/components/driver/ProfileTab';
import { cn } from '@/lib/utils';

// Mock data for trips
const mockTrips = [
  { 
    id: 'TR-1001', 
    pickup: '123 Main St, Bangalore', 
    dropoff: '456 Park Ave, Bangalore', 
    status: 'pending', 
    amount: 450, 
    commission: 45,
    driverAmount: 405,
    date: '2024-05-11'
  },
  { 
    id: 'TR-1002', 
    pickup: '789 Church St, Bangalore', 
    dropoff: '321 MG Road, Bangalore', 
    status: 'completed', 
    amount: 350, 
    commission: 35,
    driverAmount: 315, 
    date: '2024-05-10'
  },
  { 
    id: 'TR-1003', 
    pickup: '555 Brigade Road, Bangalore', 
    dropoff: '777 Indiranagar, Bangalore', 
    status: 'completed', 
    amount: 550, 
    commission: 55,
    driverAmount: 495, 
    date: '2024-05-09'
  },
];

const DriverPanel = () => {
  const navigate = useNavigate();
  const [isDriver, setIsDriver] = useState(true); // In a real app, this would come from authentication state
  const [completedTrips, setCompletedTrips] = useState<Trip[]>(mockTrips.filter(trip => trip.status === 'completed'));
  const [pendingTrips, setPendingTrips] = useState<Trip[]>(mockTrips.filter(trip => trip.status === 'pending'));
  const [walletBalance, setWalletBalance] = useState(750);
  const [activeTab, setActiveTab] = useState('active-trips');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEarningsSummary, setShowEarningsSummary] = useState(true);

  // Mock driver data
  const driverData = {
    name: "Rajesh Kumar",
    rating: 4.8,
    tripCount: 86,
    joinDate: "March 2023",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  };

  // Check if user is a driver and redirect if not
  useEffect(() => {
    if (!isDriver) {
      navigate('/');
    }
  }, [isDriver, navigate]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setMobileMenuOpen(false); // Close mobile menu when tab changes
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-porter-red to-red-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left section */}
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center text-white hover:text-gray-1000">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
            </div>
            
            {/* Center title - visible on all screens */}
            <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <div className="hidden sm:block h-8 w-8 rounded-full bg-white mr-2 overflow-hidden">
                <img src={driverData.avatar} alt="Driver" className="h-full w-full object-cover" />
              </div>
              Driver Dashboard
            </div>
            
            {/* Right section */}
            <div className="flex items-center">
              <div className="mr-2 sm:mr-4 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span className="font-medium hidden sm:inline text-white">₹</span>
                <span className="font-bold text-white">{walletBalance}</span>
              </div>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')} 
                className="border-white text-white hover:bg-white hover:text-porter-red bg-white bg-opacity-20"
                size="sm"
              >
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </Button>
              
              {/* Mobile menu button */}
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none"
                >
                  <span className="sr-only">Open menu</span>
                  {mobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driver stats bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="sm:hidden h-8 w-8 rounded-full bg-porter-red mr-2 overflow-hidden">
                <img src={driverData.avatar} alt="Driver" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-medium">{driverData.name}</h3>
                <div className="flex items-center text-xs text-gray-500">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  <span>{driverData.rating} • {driverData.tripCount} trips</span>
                </div>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Member since {driverData.joinDate}
            </div>
          </div>
        </div>
      </div>
      
      {/* Earnings summary - collapsible */}
      <div className="bg-white shadow-sm mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setShowEarningsSummary(!showEarningsSummary)}
            className="w-full flex items-center justify-between py-3 focus:outline-none"
          >
            <span className="font-medium text-porter-black">Weekly Earnings Summary</span>
            {showEarningsSummary ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {showEarningsSummary && (
            <div className="pb-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Today</div>
                <div className="text-lg font-bold">₹405</div>
                <div className="text-xs text-green-600">+₹45 from yesterday</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">This Week</div>
                <div className="text-lg font-bold">₹1,855</div>
                <div className="text-xs text-green-600">+₹205 from last week</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Trips This Week</div>
                <div className="text-lg font-bold">8</div>
                <div className="text-xs text-gray-500">Avg. ₹232 per trip</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Online Hours</div>
                <div className="text-lg font-bold">24h</div>
                <div className="text-xs text-gray-500">Avg. ₹77 per hour</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg mx-4 mb-4",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => handleTabChange('active-trips')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'active-trips' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <Package className="mr-3 h-5 w-5" />
              <span>Active Trips</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('completed-trips')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'completed-trips' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <History className="mr-3 h-5 w-5" />
              <span>Trip History</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('wallet')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'wallet' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <Wallet className="mr-3 h-5 w-5" />
              <span>Wallet</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('vehicle')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'vehicle' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <Truck className="mr-3 h-5 w-5" />
              <span>Vehicle</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('trip-update')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'trip-update' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <Navigation className="mr-3 h-5 w-5" />
              <span>Trip Update</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('profile')} 
            className={cn(
              "w-full text-left block px-3 py-3 rounded-md text-base font-medium",
              activeTab === 'profile' 
                ? "bg-porter-red bg-opacity-10 text-porter-red border-l-4 border-porter-red"
                : "text-gray-700 hover:bg-gray-50 hover:text-porter-red"
            )}
          >
            <div className="flex items-center">
              <User className="mr-3 h-5 w-5" />
              <span>Profile</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* New trip alert - can be shown conditionally */}
      {pendingTrips.length > 0 && (
        <div className="bg-porter-red text-white py-3 px-4 mx-4 sm:mx-auto max-w-7xl rounded-lg mb-4 shadow-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <div className="flex-grow">
              <p className="font-medium">New trip request available!</p>
              <p className="text-sm">Accept within 30 seconds to claim this trip.</p>
            </div>
            <Button size="sm" variant="secondary" className="ml-2 flex-shrink-0 whitespace-nowrap bg-white text-porter-red hover:bg-gray-100">
              View Details
            </Button>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-grow container mx-auto px-2 sm:px-4 pb-6">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          {/* Desktop TabsList - hidden on mobile */}
          <div className="hidden md:block">
            <TabsList className="grid grid-cols-6 mb-6">
              <TabsTrigger value="active-trips" className="flex items-center py-3">
                <Package className="mr-2 h-5 w-5" />
                <span className="font-medium">Active Trips</span>
                {pendingTrips.length > 0 && (
                  <span className="ml-2 bg-porter-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {pendingTrips.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed-trips" className="flex items-center py-3">
                <History className="mr-2 h-5 w-5" />
                <span className="font-medium">Trip History</span>
              </TabsTrigger>
              <TabsTrigger value="wallet" className="flex items-center py-3">
                <Wallet className="mr-2 h-5 w-5" />
                <span className="font-medium">Wallet</span>
              </TabsTrigger>
              <TabsTrigger value="vehicle" className="flex items-center py-3">
                <Truck className="mr-2 h-5 w-5" />
                <span className="font-medium">Vehicle</span>
              </TabsTrigger>
              <TabsTrigger value="trip-update" className="flex items-center py-3">
                <Navigation className="mr-2 h-5 w-5" />
                <span className="font-medium">Trip Update</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center py-3">
                <User className="mr-2 h-5 w-5" />
                <span className="font-medium">Profile</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Tab Contents */}
          <TabsContent value="active-trips">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <Package className="mr-2 h-5 w-5 text-porter-red" /> 
                Active Trips
              </h2>
              <ActiveTripsTab 
                pendingTrips={pendingTrips} 
                setPendingTrips={setPendingTrips} 
                setCompletedTrips={setCompletedTrips} 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="completed-trips">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <History className="mr-2 h-5 w-5 text-porter-red" /> 
                Trip History
              </h2>
              <CompletedTripsTab completedTrips={completedTrips} />
            </div>
          </TabsContent>
          
          <TabsContent value="wallet">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <Wallet className="mr-2 h-5 w-5 text-porter-red" /> 
                Wallet
              </h2>
              <WalletTab walletBalance={walletBalance} setWalletBalance={setWalletBalance} />
            </div>
          </TabsContent>
          
          <TabsContent value="vehicle">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <Truck className="mr-2 h-5 w-5 text-porter-red" /> 
                Vehicle
              </h2>
              <VehicleTab />
            </div>
          </TabsContent>
          
          <TabsContent value="trip-update">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <Navigation className="mr-2 h-5 w-5 text-porter-red" /> 
                Trip Update
              </h2>
              <TripUpdateTab />
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-porter-black mb-4 flex items-center">
                <User className="mr-2 h-5 w-5 text-porter-red" /> 
                Profile
              </h2>
              <ProfileTab />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DriverPanel;

// NORMAL VERSION OF DRIVER PANEL

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';
// import { ArrowLeft, Truck, Navigation, Wallet, History, Package, Settings, Menu, X } from 'lucide-react';

// // Import refactored components
// import ActiveTripsTab, { Trip } from '@/components/driver/ActiveTripsTab';
// import CompletedTripsTab from '@/components/driver/CompletedTripsTab';
// import WalletTab from '@/components/driver/WalletTab';
// import VehicleTab from '@/components/driver/VehicleTab';
// import TripUpdateTab from '@/components/driver/TripUpdateTab';
// import ProfileTab from '@/components/driver/ProfileTab';
// import { cn } from '@/lib/utils';

// // Mock data for trips
// const mockTrips = [
//   { 
//     id: 'TR-1001', 
//     pickup: '123 Main St, Bangalore', 
//     dropoff: '456 Park Ave, Bangalore', 
//     status: 'pending', 
//     amount: 450, 
//     commission: 45,
//     driverAmount: 405,
//     date: '2024-05-11'
//   },
//   { 
//     id: 'TR-1002', 
//     pickup: '789 Church St, Bangalore', 
//     dropoff: '321 MG Road, Bangalore', 
//     status: 'completed', 
//     amount: 350, 
//     commission: 35,
//     driverAmount: 315, 
//     date: '2024-05-10'
//   },
//   { 
//     id: 'TR-1003', 
//     pickup: '555 Brigade Road, Bangalore', 
//     dropoff: '777 Indiranagar, Bangalore', 
//     status: 'completed', 
//     amount: 550, 
//     commission: 55,
//     driverAmount: 495, 
//     date: '2024-05-09'
//   },
// ];

// const DriverPanel = () => {
//   const navigate = useNavigate();
//   const [isDriver, setIsDriver] = useState(true); // In a real app, this would come from authentication state
//   const [completedTrips, setCompletedTrips] = useState<Trip[]>(mockTrips.filter(trip => trip.status === 'completed'));
//   const [pendingTrips, setPendingTrips] = useState<Trip[]>(mockTrips.filter(trip => trip.status === 'pending'));
//   const [walletBalance, setWalletBalance] = useState(750);
//   const [activeTab, setActiveTab] = useState('active-trips');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Check if user is a driver and redirect if not
//   useEffect(() => {
//     if (!isDriver) {
//       navigate('/');
//     }
//   }, [isDriver, navigate]);

//   const handleTabChange = (value: string) => {
//     setActiveTab(value);
//     setMobileMenuOpen(false); // Close mobile menu when tab changes
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Left section */}
//             <div className="flex items-center">
//               <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
//                 <ArrowLeft className="h-5 w-5 mr-2" />
//                 <span className="hidden sm:inline">Back to Home</span>
//               </Link>
//             </div>
            
//             {/* Center title - visible on all screens */}
//             <div className="text-xl sm:text-2xl font-bold text-porter-red">Driver Panel</div>
            
//             {/* Right section */}
//             <div className="flex items-center">
//               <div className="mr-2 sm:mr-4">
//                 <span className="font-medium hidden sm:inline">Wallet:</span>
//                 <span className="sm:hidden">₹</span> {walletBalance}
//               </div>
//               <Button 
//                 variant="ghost" 
//                 onClick={() => navigate('/')} 
//                 className="text-porter-red"
//                 size="sm"
//               >
//                 <span className="hidden sm:inline">Logout</span>
//                 <span className="sm:hidden">Exit</span>
//               </Button>
              
//               {/* Mobile menu button */}
//               <div className="md:hidden ml-2">
//                 <button
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-porter-gray hover:text-porter-black focus:outline-none"
//                 >
//                   <span className="sr-only">Open menu</span>
//                   {mobileMenuOpen ? (
//                     <X className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Menu className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile menu */}
//       <div 
//         className={cn(
//           "md:hidden overflow-hidden transition-all duration-1000 ease-in-out bg-white border-b",
//           mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         )}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <button 
//             onClick={() => handleTabChange('active-trips')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'active-trips' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <Package className="mr-2 h-4 w-4" />
//               <span>Active Trips</span>
//             </div>
//           </button>
          
//           <button 
//             onClick={() => handleTabChange('completed-trips')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'completed-trips' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <History className="mr-2 h-4 w-4" />
//               <span>Trip History</span>
//             </div>
//           </button>
          
//           <button 
//             onClick={() => handleTabChange('wallet')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'wallet' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <Wallet className="mr-2 h-4 w-4" />
//               <span>Wallet</span>
//             </div>
//           </button>
          
//           <button 
//             onClick={() => handleTabChange('vehicle')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'vehicle' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <Truck className="mr-2 h-4 w-4" />
//               <span>Vehicle</span>
//             </div>
//           </button>
          
//           <button 
//             onClick={() => handleTabChange('trip-update')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'trip-update' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <Navigation className="mr-2 h-4 w-4" />
//               <span>Trip Update</span>
//             </div>
//           </button>
          
//           <button 
//             onClick={() => handleTabChange('profile')} 
//             className={cn(
//               "w-full text-left block px-3 py-2 rounded-md text-base font-medium",
//               activeTab === 'profile' 
//                 ? "bg-porter-lightGray text-porter-black border-l-4 border-porter-red"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-porter-black"
//             )}
//           >
//             <div className="flex items-center">
//               <Settings className="mr-2 h-4 w-4" />
//               <span>Profile</span>
//             </div>
//           </button>
//         </div>
//       </div>
      
//       {/* Main content */}
//       <div className="flex-grow container mx-auto px-2 sm:px-4 py-4 sm:py-8">
//         <Tabs value={activeTab} onValueChange={handleTabChange}>
//           {/* Desktop TabsList - hidden on mobile */}
//           <div className="hidden md:block">
//             <TabsList className="grid grid-cols-6 mb-6">
//               <TabsTrigger value="active-trips" className="flex items-center">
//                 <Package className="mr-2 h-4 w-4" />
//                 <span>Active Trips</span>
//               </TabsTrigger>
//               <TabsTrigger value="completed-trips" className="flex items-center">
//                 <History className="mr-2 h-4 w-4" />
//                 <span>Trip History</span>
//               </TabsTrigger>
//               <TabsTrigger value="wallet" className="flex items-center">
//                 <Wallet className="mr-2 h-4 w-4" />
//                 <span>Wallet</span>
//               </TabsTrigger>
//               <TabsTrigger value="vehicle" className="flex items-center">
//                 <Truck className="mr-2 h-4 w-4" />
//                 <span>Vehicle</span>
//               </TabsTrigger>
//               <TabsTrigger value="trip-update" className="flex items-center">
//                 <Navigation className="mr-2 h-4 w-4" />
//                 <span>Trip Update</span>
//               </TabsTrigger>
//               <TabsTrigger value="profile" className="flex items-center">
//                 <Settings className="mr-2 h-4 w-4" />
//                 <span>Profile</span>
//               </TabsTrigger>
//             </TabsList>
//           </div>
          
//           {/* Tab Contents */}
//           <TabsContent value="active-trips">
//             <ActiveTripsTab 
//               pendingTrips={pendingTrips} 
//               setPendingTrips={setPendingTrips} 
//               setCompletedTrips={setCompletedTrips} 
//             />
//           </TabsContent>
          
//           <TabsContent value="completed-trips">
//             <CompletedTripsTab completedTrips={completedTrips} />
//           </TabsContent>
          
//           <TabsContent value="wallet">
//             <WalletTab walletBalance={walletBalance} setWalletBalance={setWalletBalance} />
//           </TabsContent>
          
//           <TabsContent value="vehicle">
//             <VehicleTab />
//           </TabsContent>
          
//           <TabsContent value="trip-update">
//             <TripUpdateTab />
//           </TabsContent>
          
//           <TabsContent value="profile">
//             <ProfileTab />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default DriverPanel;

