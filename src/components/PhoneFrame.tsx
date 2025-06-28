
import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-80 h-[700px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* Status Bar */}
          <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-xs font-medium z-10">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-4 h-2 border border-black rounded-sm">
                <div className="w-3 h-1 bg-black rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* App Content */}
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Phone frame highlights */}
      <div className="absolute top-8 right-1 w-1 h-12 bg-gray-800 rounded-full"></div>
      <div className="absolute top-20 right-1 w-1 h-8 bg-gray-800 rounded-full"></div>
      <div className="absolute top-32 right-1 w-1 h-8 bg-gray-800 rounded-full"></div>
      <div className="absolute top-16 left-1 w-1 h-16 bg-gray-800 rounded-full"></div>
    </div>
  );
};

export default PhoneFrame;
