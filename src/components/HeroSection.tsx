
import { useState } from 'react';
import { MapPin, ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-porter-black sm:text-5xl md:text-6xl">
                <span className="block">City logistics done</span>
                <span className="block text-porter-red">right for you</span>
              </h1>
              <p className="mt-3 text-base text-porter-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Delivery Partner provides intercity and intracity logistics services for individuals and businesses. Book mini trucks, bikes, and other commercial vehicles whenever you need.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <Tabs defaultValue="city">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="city" className="text-lg">City Transport</TabsTrigger>
                  <TabsTrigger value="packers" className="text-lg">Packers & Movers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="city">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-porter-red" />
                        </div>
                        <Input 
                          type="text" 
                          placeholder="Pickup Location" 
                          className="pl-10 h-12 text-lg" 
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-porter-gray" />
                        </div>
                        <Input 
                          type="text" 
                          placeholder="Drop Location" 
                          className="pl-10 h-12 text-lg" 
                          value={dropLocation}
                          onChange={(e) => setDropLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="now" defaultChecked />
                          <Label htmlFor="now">Now</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Checkbox id="schedule" />
                          <Label htmlFor="schedule">Schedule for later</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-porter-gray" />
                          </div>
                          <Input 
                            type="text" 
                            placeholder="10:00 AM" 
                            className="pl-10 h-10" 
                            disabled
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-porter-gray" />
                          </div>
                          <Input 
                            type="text" 
                            placeholder="Today" 
                            className="pl-10 h-10" 
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full md:w-auto bg-porter-red hover:bg-red-700 text-white h-12 text-lg rounded-lg">
                      Find Available Bikes
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="packers">
                  <div className="flex flex-col items-center justify-center h-40 text-center">
                    <p className="text-porter-gray text-lg">
                      For complete home shifting services with packing and moving solutions
                    </p>
                    <Button className="mt-4 bg-porter-red hover:bg-red-700 text-white h-12 text-lg rounded-lg">
                      Check Packers & Movers
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://img.freepik.com/free-vector/loaders-carrying-armchair-boxes-new-house_74855-14095.jpg?semt=ais_hybrid&w=740"
          alt="Logistics delivery person with package"
        />
      </div>
    </div>
  );
};

export default HeroSection;
