
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Camera, Image, Zap } from 'lucide-react';

interface ScannerScreenProps {
  onBack: () => void;
  onSimulateScan: () => void;
}

const ScannerScreen = ({ onBack, onSimulateScan }: ScannerScreenProps) => {
  return (
    <div className="min-h-full bg-black relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 pt-12">
        <Button 
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* QR Scanner Viewfinder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main scanning area */}
          <div className="w-64 h-64 border-2 border-white/30 rounded-lg relative">
            {/* Corner brackets */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-white rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-r-4 border-t-4 border-white rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-4 border-b-4 border-white rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-white rounded-br-lg"></div>
            
            {/* Scanning line animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-white/60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between">
        <Button variant="ghost" size="sm" className="text-white">
          <Image className="w-6 h-6" />
        </Button>
        
        <Button 
          onClick={onSimulateScan}
          size="lg"
          className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 text-black"
        >
          <Camera className="w-8 h-8" />
        </Button>
        
        <Button variant="ghost" size="sm" className="text-white">
          <Zap className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ScannerScreen;
