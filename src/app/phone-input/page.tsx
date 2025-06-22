'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PhoneInput() {
  const [phoneDigits, setPhoneDigits] = useState(50000000); // Default middle value
  const [advancedMode, setAdvancedMode] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); // Position as percentage
  const [isAnimating, setIsAnimating] = useState(false);

  // Format the number to always be 8 digits with leading zeros
  const formatPhoneDigits = (num: number) => {
    return num.toString().padStart(8, '0');
  };

  const fullPhoneNumber = `04${formatPhoneDigits(phoneDigits)}`;

  // Handle advanced mode physics
  useEffect(() => {
    if (advancedMode && !isAnimating) {
      setIsAnimating(true);
      
      // Simulate gravity/bounce effect
      const targetPosition = (phoneDigits / 99999999) * 100;
      let currentPos = sliderPosition;
      let velocity = 0;
      const gravity = 0.8;
      const bounce = 0.7;
      const friction = 0.95;
      
      const animate = () => {
        const distance = targetPosition - currentPos;
        
        if (Math.abs(distance) > 0.1 || Math.abs(velocity) > 0.1) {
          velocity += distance * 0.1;
          velocity *= friction;
          
          // Add some gravity effect when tilted
          velocity += gravity;
          
          currentPos += velocity;
          
          // Bounce off edges
          if (currentPos < 0) {
            currentPos = 0;
            velocity *= -bounce;
          } else if (currentPos > 100) {
            currentPos = 100;
            velocity *= -bounce;
          }
          
          setSliderPosition(currentPos);
          requestAnimationFrame(animate);
        } else {
          setSliderPosition(targetPosition);
          setIsAnimating(false);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [phoneDigits, advancedMode]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setPhoneDigits(newValue);
    
    if (!advancedMode) {
      setSliderPosition((newValue / 99999999) * 100);
    }
  };

  const handleAdvancedModeChange = () => {
    if (!advancedMode) {
      setAdvancedMode(true);
      // Trigger initial animation
      setSliderPosition((phoneDigits / 99999999) * 100);
    }
    // Can't uncheck - that's the evil part!
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Enter Your Phone Number
        </h1>
        
        <div className="mb-8">
          
          {/* Display the phone number */}
          <div className="text-center mb-6">
            <span className="text-2xl font-mono bg-gray-100 px-4 py-2 rounded border">
              {fullPhoneNumber}
            </span>
          </div>
          
          {/* Advanced mode checkbox */}
          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={advancedMode}
                onChange={handleAdvancedModeChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                Advanced Mode (More Precise!)
              </span>
            </label>
          </div>
          
          {/* The "brilliant" slider for phone number input */}
          <div className="mb-6 relative">
            <div 
              className={`transition-transform duration-500 ${
                advancedMode ? 'transform rotate-12 origin-left' : ''
              }`}
              style={{
                background: advancedMode ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' : 'transparent',
                padding: advancedMode ? '10px' : '0',
                borderRadius: advancedMode ? '10px' : '0',
              }}
            >
              <input
                type="range"
                min="0"
                max="99999999"
                step="1"
                value={phoneDigits}
                onChange={handleSliderChange}
                className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${
                  advancedMode ? 'advanced-slider' : ''
                }`}
                style={{
                  background: advancedMode ? 
                    `linear-gradient(to right, #ff6b6b 0%, #ff6b6b ${sliderPosition}%, #e0e0e0 ${sliderPosition}%, #e0e0e0 100%)` :
                    undefined
                }}
              />
              
              {advancedMode && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  PRO
                </div>
              )}
            </div>
            
            {advancedMode && (
              <div className="text-xs text-gray-500 mt-2 italic">
                ⚡ Physics-enabled precision slider with gravity assist!
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            onClick={() => alert(`Phone number submitted: ${fullPhoneNumber}`)}
          >
            Continue
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .advanced-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
          animation: glow 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(255, 107, 107, 0.5); }
          to { box-shadow: 0 0 20px rgba(255, 107, 107, 0.8); }
        }
      `}</style>
    </main>
  );
} 