
import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const DubaiMap = () => {
  const dubaiLandmarks = [
    { name: 'Burj Khalifa', position: { top: '45%', left: '60%' } },
    { name: 'Dubai Mall', position: { top: '50%', left: '58%' } },
    { name: 'Palm Jumeirah', position: { top: '40%', left: '25%' } },
    { name: 'Dubai Marina', position: { top: '35%', left: '20%' } },
    { name: 'DIFC', position: { top: '48%', left: '45%' } }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Area */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl relative overflow-hidden border-2 border-gray-100">
            {/* Dubai Simplified Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50"></div>
            
            {/* Coastline representation */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-200/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-200/30 to-transparent"></div>
            
            {/* Dubai landmarks */}
            {dubaiLandmarks.map((landmark, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ top: landmark.position.top, left: landmark.position.left }}
              >
                <div className="w-4 h-4 bg-vexa-gradient rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {landmark.name}
                </div>
              </div>
            ))}

            {/* VEXA Office Location */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: '48%', left: '45%' }}
            >
              <div className="relative">
                <MapPin className="w-8 h-8 text-vexa-purple animate-bounce" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-vexa-gradient text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg">
                  VEXA Creative
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Navigation className="w-6 h-6 text-vexa-blue" />
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Visit Our Dubai Office
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-vexa-gradient p-3 rounded-2xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  Dubai International Financial Centre<br />
                  Gate Village, Building 3<br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-vexa-gradient p-3 rounded-2xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                <p className="text-gray-600">
                  Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                  Friday - Saturday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-vexa-gradient p-3 rounded-2xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                <p className="text-gray-600">
                  +971 4 123 4567<br />
                  hello@vexacreative.net
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
            <p className="text-gray-600 text-sm">
              Located in the heart of Dubai's financial district, easily accessible by metro (DIFC Station) 
              or taxi. Visitor parking available in Gate Village.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiMap;
