
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HomeScreenProps {
  onScanQR: () => void;
}

const HomeScreen = ({ onScanQR }: HomeScreenProps) => {
  return (
    <div className="min-h-full bg-white p-6 pt-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-4">
          <div className="text-white text-2xl font-bold">QR</div>
          <div className="text-white text-sm">+</div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">QRPlus+</h1>
        <p className="text-gray-600 text-sm">We pick the best deal for you "every time".</p>
      </div>
      
      <div className="space-y-4 mb-8">
        <Button 
          onClick={() => {/* Google login */}}
          variant="outline"
          className="w-full py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <span className="mr-2">G</span>
          Continue with Google
        </Button>
        
        <Button 
          onClick={() => {/* Facebook login */}}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <span className="mr-2">f</span>
          Continue with Facebook
        </Button>
        
        <Button 
          onClick={onScanQR}
          className="w-full py-3 bg-black hover:bg-gray-800 text-white"
        >
          <span className="mr-2">🍎</span>
          Continue with Apple
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
