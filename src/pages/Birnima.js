import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../pages/birnima.css';

function Birnima() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='birnima m-3' style={{alignItems: "end"}}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default Birnima;