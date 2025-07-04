'use clinet';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const HeroDateRange = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
    console.log(ranges.selection);
  };

  const handleCheckAvailability = async () => {
    try {
      // Prepare payload: convert dates to ISO string format
      const payload = {
        checkInDate: selectionRange.startDate.toISOString(),
        checkOutDate: selectionRange.endDate.toISOString(),
      };

      // POST request to backend API endpoint (adjust URL as needed)
      const response = await fetch(
        'https://royal-place-server.vercel.app/api/rooms-available',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to check availability');
      }

      const availableRooms = await response.json();
      console.log('Available Rooms:', availableRooms);

      // naviagte  roosms with pops
    } catch (error: any) {
      console.error(error);
      alert(`Error checking availability. Please try again. ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] w-full px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg w-full max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold text-white text-center">
          Select Your Stay Dates
        </h2>

        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          months={1}
          direction="horizontal"
          showDateDisplay={false} // hides the default input fields inside the picker
          className="rounded-lg"
        />

        <div className="text-center">
          <button
            onClick={handleCheckAvailability}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDateRange;
