import React, { useState } from 'react';
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from 'date-fns';

interface SimpleCalendarProps {
  onSelectDate: (date: Date) => void;
  selectedRange?: { from?: Date; to?: Date };
  bookedDates?: string[];
}

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function SimpleCalendar({
  onSelectDate,
  selectedRange,
  bookedDates = [],
}: SimpleCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const days = [];
  let day = calendarStart;

  while (day <= calendarEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  const prevMonth = () => setCurrentMonth(addDays(monthStart, -1));
  const nextMonth = () => setCurrentMonth(addDays(monthEnd, 1));

  return (
    <div className="p-4 bg-main rounded-lg text-foreground font-sans max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="px-1 md:px-2 bg-[#bf9310] rounded text-foreground hover:bg-[#a87e0d]"
          aria-label="Previous Month"
        >
          &lt;
        </button>

        <div className="text-sm font-bold">
          {format(currentMonth, 'MMMM yyyy')}
        </div>

        <button
          onClick={nextMonth}
          className="px-1 md:px-2 bg-[#bf9310]  rounded text-foreground hover:bg-[#a87e0d]"
          aria-label="Next Month"
        >
          &gt;
        </button>
      </div>

      {/* দিনগুলোর নাম */}
      <div className="grid grid-cols-7 text-center text-[#bf9310] font-medium mb-2">
        {daysOfWeek.map((dayName, index) => (
          <div key={index} className="py-1 border-b border-gray-700">
            {dayName}
          </div>
        ))}
      </div>

      {/* তারিখের গ্রিড */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((dayItem) => {
          const isCurrentMonth = isSameMonth(dayItem, currentMonth);
          const formattedDay = format(dayItem, 'yyyy-MM-dd');
          const isBooked = bookedDates.includes(formattedDay);
          const isPastDate = dayItem < new Date();

          const isSelected =
            (selectedRange?.from && isSameDay(dayItem, selectedRange.from)) ||
            (selectedRange?.to && isSameDay(dayItem, selectedRange.to));

          const isInRange =
            selectedRange?.from &&
            selectedRange?.to &&
            dayItem > selectedRange.from &&
            dayItem < selectedRange.to;

          const shouldDisable = !isCurrentMonth || isBooked || isPastDate;

          return (
            <button
              key={dayItem.toISOString()}
              onClick={() => onSelectDate(dayItem)}
              disabled={shouldDisable}
              className={`
                py-2 rounded-md transition-colors
                ${isSelected ? 'bg-yellow-400 text-black font-bold shadow-md' : ''}
                ${isInRange ? 'bg-yellow-200 text-black' : ''}
                ${shouldDisable ? 'bg-red-600 text-foreground cursor-not-allowed' : ''}
                ${
                  !shouldDisable && isCurrentMonth && !isSelected && !isInRange
                    ? 'hover:bg-yellow-600'
                    : ''
                }
              `}
              aria-label={format(dayItem, 'eeee, MMMM do, yyyy')}
              type="button"
            >
              <div className="text-sm font-semibold">
                {format(dayItem, 'd')}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
