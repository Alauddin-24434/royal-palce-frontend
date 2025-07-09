'use client';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

//==== === HeroDateRange Component: Date range selector and availability checker === ===//
const HeroDateRange = () => {
  //==== === State to hold selected start and end dates === ===//
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  //==== === Handler for date range changes from date picker === ===//
  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
    console.log(ranges.selection);
  };

  //==== === Check availability by sending selected dates to backend API === ===//
  const handleCheckAvailability = async () => {
    try {
      //==== === Prepare payload with ISO string formatted dates === ===//
      const payload = {
        checkInDate: selectionRange.startDate.toISOString(),
        checkOutDate: selectionRange.endDate.toISOString(),
      };

      //==== === Send POST request to rooms availability API endpoint === ===//
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

      //==== === Handle non-ok responses === ===//
      if (!response.ok) {
        throw new Error('Failed to check availability');
      }

      //==== === Parse and log available rooms data === ===//
      const availableRooms = await response.json();
      console.log('Available Rooms:', availableRooms);

      //==== === TODO: Navigate to rooms listing page or show popup with results === ===//
    } catch (error: any) {
      //==== === Handle errors gracefully === ===//
      console.error(error);
      alert(`Error checking availability. Please try again. ${error.message}`);
    }
  };

  //==== === Render component UI === ===//
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg w-full max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold text-white text-center">
          Select Your Stay Dates
        </h2>

        {/*==== === DateRange picker component === ===*/}
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          months={1}
          direction="horizontal"
          showDateDisplay={false} // hides default input fields inside picker
          className="rounded-lg"
        />

        {/*==== === Check Availability button === ===*/}
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
