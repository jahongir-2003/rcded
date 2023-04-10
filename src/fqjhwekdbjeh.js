// import React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { TextField } from "@mui/material";
// import Badge from "@mui/material/Badge";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// const Calendar = () => {
//   const [value, setvalue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         orientation="portrait"
//         openTo="day"
//         value={value}
//         onChange={(newValue) => {
//           setvalue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;

import React from "react";
import { DateCalendar } from '@mui/x-date-pickers-pro/DateCalendar';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DateCalendar } from '@mui/x-date-pickers-pro';
// import { DateCalendar } from '@mui/x-date-pickers';
// import { DateCalendar } from "@mui/x-date-pickers-pro/DateCalendar";
const Calendar = () => {
  function MyComponent() {
    return (
      <DateCalendar date={new Date()} onChange={(date) => console.log(date)} />
    );
  }
  MyComponent();
};

export default Calendar;
