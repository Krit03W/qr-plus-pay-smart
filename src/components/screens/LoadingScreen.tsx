
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoadingScreenProps {
  onBack: () => void;
  merchant: string;
  amount: number;
}

const LoadingScreen = ({ onBack, merchant, amount }: LoadingScreenProps) => {
  return (
    <div className="min-h-full bg-white p-4 pt-12">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:bg-gray-100 mr-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-900">Payment at {merchant}</h1>
      </div>

      <div className="text-center text-sm text-gray-600 mb-4">
        Total: ฿{amount.toFixed(2)}
      </div>

      <div className="text-center py-16">
        <div className="text-lg font-medium text-gray-700 mb-8">Discovering the best deals for you</div>
        
        {/* Loading animation */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-12 bg-blue-200 rounded animate-pulse"></div>
          <div className="w-3 h-16 bg-blue-300 rounded animate-pulse delay-75"></div>
          <div className="w-3 h-20 bg-blue-400 rounded animate-pulse delay-150"></div>
          <div className="w-3 h-16 bg-blue-300 rounded animate-pulse delay-225"></div>
          <div className="w-3 h-12 bg-blue-200 rounded animate-pulse delay-300"></div>
        </div>
      </div>

      <div className="fixed bottom-8 left-4 right-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-blue-600">Select your payment method</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
