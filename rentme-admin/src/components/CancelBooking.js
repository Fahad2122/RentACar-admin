import React, { useState } from 'react'

function CancelBooking() {
    const [Order_id, setOrder_id] = useState({});
      const onChange = (e) => {
        setOrder_id(e.target.value);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/emp/cancelbooking';
        const data = await fetch(url, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            Order_id: Order_id
          })
        });
        const json = await data.json();
    console.log(json);
    if(json.success){
        alert("Order cancelled successfully")
    }
    else{
      alert("Please Enter valid Credentials")
    }
}
  return (
    <section className="vh-100" style={{ backgroundColor: "#ffff99" }}>
    <div className='container py-5'>
        <h2>cancel Booking</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">order ID</label>
    <div className="col-sm-10 mt-2">
      <input type="number" className="form-control" id="user_id" name="user_id" onChange={onChange} placeholder="ID"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Reason</label>
    <div className="col mt-2">
      <textarea type="text" className="form-control" id="reason" />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10 mt-3">
      <button type="submit" className="btn btn-warning">cancel Booking</button>
    </div>
  </div>
</form>
    </div>
    </section>
  )
}

export default CancelBooking
