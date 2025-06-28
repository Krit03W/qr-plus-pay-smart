
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PaymentMethod {
  id: number;
  name: string;
  type: string;
  discount: number;
  finalAmount: number;
  promotion: string;
}

interface ConfirmationScreenProps {
  onReturnHome: () => void;
  merchant: string;
  selectedPayment: PaymentMethod;
}

const ConfirmationScreen = ({ onReturnHome, merchant, selectedPayment }: ConfirmationScreenProps) => {
  return (
    <div className="min-h-full bg-white p-4 pt-12">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Your transaction has been completed</p>
        
        <Card className="mb-6 border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Merchant</span>
                <span className="font-semibold text-gray-900">{merchant}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Amount</span>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    ฿{selectedPayment.finalAmount.toFixed(2)}
                  </div>
                  <div className="text-xs text-green-600">
                    (Saved ฿{selectedPayment.discount})
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-semibold text-gray-900">{selectedPayment.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={onReturnHome}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold rounded-lg"
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
