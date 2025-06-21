'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PhoneInput() {
  const [phoneDigits, setPhoneDigits] = useState(50000000); // Default middle value

  // Format the number to always be 8 digits with leading zeros
  const formatPhoneDigits = (num: number) => {
    return num.toString().padStart(8, '0');
  };

  const fullPhoneNumber = `04${formatPhoneDigits(phoneDigits)}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Enter Your Phone Number
        </h1>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Australian Mobile Number
          </label>
          
          {/* Display the phone number */}
          <div className="text-center mb-6">
            <span className="text-2xl font-mono bg-gray-100 px-4 py-2 rounded border">
              {fullPhoneNumber}
            </span>
          </div>
          
          {/* The "brilliant" slider for phone number input */}
          <div className="mb-6">
            <label className="block text-xs text-gray-500 mb-2">
              Use the slider to select your 8-digit number:
            </label>
            <input
              type="range"
              min="0"
              max="99999999"
              step="1"
              value={phoneDigits}
              onChange={(e) => setPhoneDigits(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>00000000</span>
              <span>99999999</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/"
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Back
          </Link>
          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            onClick={() => alert(`Phone number submitted: ${fullPhoneNumber}`)}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
} 