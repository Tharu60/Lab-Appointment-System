import React from 'react'

const addAppointment = () => {
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
            <input type='text' id='category-name' />

            <label id='lbel' className='me-3 col-3'>Last Name</label>
            <input type='text' id='category-name' />

            <label id='lbel' className='me-3 col-3'>Mobile Number</label>
            <input type="text" />

            <label id='lbel' className='me-3 col-3'>Email</label>
            <input type="text" />

          </div>
          <div className='col-6'>
            <label id='lbel' className='me-3 col-3'>Address</label>
            <input type="text" />
            <label id='lbel' className='me-3 col-3'>Street</label>
            <input type="text" />
            <label id='lbel' className='me-3 col-3'>City</label>
            <input type="text" />
            <div id='gflx' >
            </div>
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

export default addAppointment