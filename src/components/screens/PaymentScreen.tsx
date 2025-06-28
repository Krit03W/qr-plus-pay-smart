
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';

interface PaymentMethod {
  id: number;
  name: string;
  type: string;
  discount: number;
  finalAmount: number;
  promotion: string;
  logo?: string;
}

interface PaymentScreenProps {
  onBack: () => void;
  onConfirmPayment: (method: PaymentMethod) => void;
  merchant: string;
  originalAmount: number;
  paymentMethods: PaymentMethod[];
}

const PaymentScreen = ({ onBack, onConfirmPayment, merchant, originalAmount, paymentMethods }: PaymentScreenProps) => {
  const bestDeal = paymentMethods.reduce((best, current) => 
    current.finalAmount < best.finalAmount ? current : best
  );

  const getPaymentLogo = (name: string) => {
    if (name.includes('Krungsri')) return '⚠️';
    if (name.includes('TrueMoney')) return '💰';
    if (name.includes('PromptPay')) return '💳';
    return '💳';
  };

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

      <div className="text-center text-sm text-gray-600 mb-6">
        Total: ฿{originalAmount.toFixed(2)}
      </div>

      {/* Payment Methods */}
      <div className="space-y-3 mb-6">
        {paymentMethods.map((method) => (
          <Card 
            key={method.id}
            className={`cursor-pointer transition-all ${
              method.id === bestDeal.id 
                ? 'border-orange-200 bg-orange-50' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => onConfirmPayment(method)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs">
                    {getPaymentLogo(method.name)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{method.name}</div>
                    {method.id === bestDeal.id && (
                      <div className="text-xs text-orange-600">
                        10% points for ฿10 off
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">
                    Total: ฿{method.finalAmount.toFixed(2)}
                  </div>
                  {method.id === bestDeal.id && (
                    <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">
                      Recommended
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        onClick={() => onConfirmPayment(bestDeal)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold rounded-lg"
      >
        Confirm Payment (฿{bestDeal.finalAmount.toFixed(2)})
      </Button>
    </div>
  );
};

export default PaymentScreen;
