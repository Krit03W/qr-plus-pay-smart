
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for payment methods and promotions
const mockPaymentMethods = [
  {
    id: 1,
    name: 'KBank Credit Card',
    type: 'credit',
    discount: 15,
    finalAmount: 135,
    promotion: 'ส่วนลด 15 บาท สำหรับการซื้อเครื่องดื่ม'
  },
  {
    id: 2,
    name: 'TrueMoney Wallet',
    type: 'ewallet',
    discount: 10,
    finalAmount: 140,
    promotion: 'ส่วนลด 10 บาท'
  },
  {
    id: 3,
    name: 'SCB Easy App',
    type: 'banking',
    discount: 8,
    finalAmount: 142,
    promotion: 'ส่วนลด 8 บาท'
  },
  {
    id: 4,
    name: 'Rabbit LINE Pay',
    type: 'ewallet',
    discount: 12,
    finalAmount: 138,
    promotion: 'ส่วนลด 12 บาท + คะแนน Rabbit'
  }
];

const PromptPayApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [merchant] = useState({
    name: 'Cafe Amazon',
    originalAmount: 150.00
  });

  // Find the best deal (lowest final amount)
  const bestDeal = mockPaymentMethods.reduce((best, current) => 
    current.finalAmount < best.finalAmount ? current : best
  );

  const handleScanQR = () => {
    setCurrentScreen('scanner');
  };

  const handleSimulateScan = () => {
    setCurrentScreen('recommendation');
    setIsLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleConfirmPayment = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setCurrentScreen('confirmation');
  };

  const handleReturnHome = () => {
    setCurrentScreen('home');
    setSelectedPayment(null);
  };

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'credit': return '💳';
      case 'ewallet': return '📱';
      case 'banking': return '🏦';
      default: return '💰';
    }
  };

  // Home Screen
  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 pt-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">PromptPay Plus+</h1>
            <p className="text-blue-600">ระบบจ่ายเงินอัจฉริยะ</p>
          </div>
          
          <Card className="mb-6 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  สแกน QR เพื่อจ่ายเงิน
                </h2>
                <p className="text-blue-600 mb-6">
                  ระบบจะแนะนำวิธีการชำระเงินที่คุ้มค่าที่สุดให้คุณ
                </p>
                <Button 
                  onClick={handleScanQR}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
                >
                  📱 เริ่มสแกน QR Code
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">💸</div>
                <p className="text-sm text-blue-600">ประหยัดได้</p>
                <p className="font-semibold text-blue-900">ถึง 50%</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-blue-600">จ่ายเงิน</p>
                <p className="font-semibold text-blue-900">ภายใน 3 วิ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Scanner Screen
  if (currentScreen === 'scanner') {
    return (
      <div className="min-h-screen bg-black relative">
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative">
            {/* Viewfinder */}
            <div className="w-64 h-64 border-4 border-white border-dashed rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm">วางกล้องให้ตรงกับ QR Code</p>
              </div>
            </div>
            
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-blue-400"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-blue-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-blue-400"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-blue-400"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-4 right-4">
          <Button 
            onClick={handleSimulateScan}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl mb-4"
          >
            จำลองการสแกนร้านกาแฟ ☕
          </Button>
          <Button 
            onClick={handleReturnHome}
            variant="outline"
            className="w-full border-white text-white hover:bg-white hover:text-black py-3 rounded-xl"
          >
            ย้อนกลับ
          </Button>
        </div>
      </div>
    );
  }

  // Recommendation Screen
  if (currentScreen === 'recommendation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6 pt-8">
            <Button 
              onClick={handleReturnHome}
              variant="ghost"
              className="absolute top-4 left-4 text-blue-600"
            >
              ← กลับ
            </Button>
            <h1 className="text-2xl font-bold text-blue-900">แนะนำการชำระเงิน</h1>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-blue-600 text-lg">กำลังค้นหาโปรโมชันที่ดีที่สุด...</p>
            </div>
          ) : (
            <>
              <Card className="mb-6 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">☕</div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-1">{merchant.name}</h2>
                    <p className="text-blue-600 mb-4">ยอดชำระ: {merchant.originalAmount.toFixed(2)} บาท</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3 mb-6">
                {mockPaymentMethods.map((method) => (
                  <Card 
                    key={method.id} 
                    className={`border-0 shadow-md transition-all duration-200 ${
                      method.id === bestDeal.id 
                        ? 'bg-green-50 border-2 border-green-400 shadow-lg' 
                        : 'hover:shadow-lg'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{getPaymentIcon(method.type)}</div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-blue-900">{method.name}</h3>
                              {method.id === bestDeal.id && (
                                <Badge className="bg-green-500 text-white text-xs">
                                  คุ้มที่สุด!
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-blue-600">{method.promotion}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 line-through">
                            {merchant.originalAmount.toFixed(2)}
                          </p>
                          <p className="text-lg font-bold text-green-600">
                            {method.finalAmount.toFixed(2)} บาท
                          </p>
                          <p className="text-xs text-green-600">
                            ประหยัด {method.discount} บาท
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button 
                onClick={() => handleConfirmPayment(bestDeal)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
              >
                ยืนยันการจ่ายเงิน {bestDeal.finalAmount.toFixed(2)} บาท
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Confirmation Screen
  if (currentScreen === 'confirmation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center py-12">
            <div className="text-8xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">ชำระเงินสำเร็จ!</h1>
            <p className="text-blue-600 mb-8">การทำรายการเสร็จสิ้น</p>
            
            <Card className="mb-6 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="text-sm text-blue-600">ร้านค้า</p>
                    <p className="font-semibold text-blue-900">{merchant.name}</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-sm text-blue-600">จำนวนเงิน</p>
                    <p className="font-semibold text-blue-900">
                      {selectedPayment?.finalAmount.toFixed(2)} บาท
                    </p>
                    <p className="text-sm text-green-600">
                      (ประหยัด {selectedPayment?.discount} บาท)
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-sm text-blue-600">วิธีการชำระเงิน</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{getPaymentIcon(selectedPayment?.type)}</span>
                      <p className="font-semibold text-blue-900">{selectedPayment?.name}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">เวลา</p>
                    <p className="font-semibold text-blue-900">
                      {new Date().toLocaleString('th-TH')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleReturnHome}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
            >
              เสร็จสิ้น
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PromptPayApp;
