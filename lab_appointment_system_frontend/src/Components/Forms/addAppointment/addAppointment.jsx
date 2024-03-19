import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const AddAppointment = () => {
  const [selectDate, setSelectedDate] = useState(null);
  const tests =[
    {label: "Blood Test", value: 1},
    {label: "Suger Test", value: 2},
    {label: "ECG Test", value: 3},
  ]
  return (
    <div><div className='item border border-primary rounded'>
      <div className='main pt-2 pb-2'>
        <h1>Make New Appointment</h1>
      </div>

      <div className='pt-5 text-center frm'>
        <form>
          <div className='row mb-3'>
            <div className='col-6 col-3'>

              <label id='lbel' className='me-3 col-3'>First Name</label>
              <input type="text" placeholder=" " disabled></input>

              <label id='lbel' className='me-3 col-3'>Last Name</label>
              <input type="text" placeholder=" " disabled></input>

              <label id='lbel' className='me-3 col-3'>Mobile Number</label>
              <input type="text" placeholder=" " disabled></input>

            </div>
            <div className='col-6'>
            <label id='lbel' className='me-3 col-3'>Select Test</label>
            <select className="from-select" id="">
              {tests.map(option => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>

            <label id='lbel' className='me-3 col-3'>Date</label>
            <DatePicker selected={selectDate} onChange={date=>setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            />
            </div>
          </div>

        </form>
        <div id='btn' className='d-flex justify-content-end me-5 pb-4'>
          <button className='btn btn-primary mx-2 btn-lg'>ADD</button>
          <button className='btn btn-danger btn-lg'>Cancel</button>
        </div>
      </div>
    </div></div>
  )
}

export default AddAppointment