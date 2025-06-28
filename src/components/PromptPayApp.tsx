
import React, { useState } from 'react';
import PhoneFrame from './PhoneFrame';
import HomeScreen from './screens/HomeScreen';
import ScannerScreen from './screens/ScannerScreen';
import LoadingScreen from './screens/LoadingScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

// Mock data for payment methods
const mockPaymentMethods = [
  {
    id: 1,
    name: 'Krungsri Credit Card',
    type: 'credit',
    discount: 15,
    finalAmount: 235,
    promotion: '10% points for ฿10 off'
  },
  {
    id: 2,
    name: 'TrueMoney Wallet',
    type: 'ewallet',
    discount: 12,
    finalAmount: 238,
    promotion: 'Cashback 5%'
  },
  {
    id: 3,
    name: 'PromptPay',
    type: 'banking',
    discount: 0,
    finalAmount: 250,
    promotion: 'Pay full amount'
  }
];

const PromptPayApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [merchant] = useState({
    name: 'Starbucks',
    originalAmount: 250.00
  });

  const handleScanQR = () => {
    setCurrentScreen('scanner');
  };

  const handleSimulateScan = () => {
    setCurrentScreen('loading');
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setCurrentScreen('payment');
    }, 3000);
  };

  const handleConfirmPayment = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setCurrentScreen('confirmation');
  };

  const handleReturnHome = () => {
    setCurrentScreen('home');
    setSelectedPayment(null);
  };

  const handleBack = () => {
    if (currentScreen === 'scanner') {
      setCurrentScreen('home');
    } else if (currentScreen === 'loading' || currentScreen === 'payment') {
      setCurrentScreen('scanner');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onScanQR={handleScanQR} />;
      
      case 'scanner':
        return (
          <ScannerScreen 
            onBack={handleBack}
            onSimulateScan={handleSimulateScan}
          />
        );
      
      case 'loading':
        return (
          <LoadingScreen 
            onBack={handleBack}
            merchant={merchant.name}
            amount={merchant.originalAmount}
          />
        );
      
      case 'payment':
        return (
          <PaymentScreen 
            onBack={handleBack}
            onConfirmPayment={handleConfirmPayment}
            merchant={merchant.name}
            originalAmount={merchant.originalAmount}
            paymentMethods={mockPaymentMethods}
          />
        );
      
      case 'confirmation':
        return (
          <ConfirmationScreen 
            onReturnHome={handleReturnHome}
            merchant={merchant.name}
            selectedPayment={selectedPayment}
          />
        );
      
      default:
        return <HomeScreen onScanQR={handleScanQR} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <PhoneFrame>
        {renderScreen()}
      </PhoneFrame>
    </div>
  );
};

export default PromptPayApp;
