// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // 导入默认样式

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const onNoteChange = (event) => {
    const newNotes = { ...notes, [date.toDateString()]: event.target.value };
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar onChange={onDateChange} value={date} />
      <textarea
        placeholder="Add your note here..."
        value={notes[date.toDateString()] || ''}
        onChange={onNoteChange}
      />
    </div>
  );
};

export default MyCalendar;
