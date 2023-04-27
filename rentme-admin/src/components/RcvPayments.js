import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function RcvPayments() {
    const [payment_id, setPayment_id] = useState({});
      const onChange = (e) => {
        setPayment_id(e.target.value);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/emp/rcvpayment';
        const data = await fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            payment_id: payment_id
          })
        });
        const json = await data.json();
    console.log(json);
    if(json.success===1){
        alert("Payment Recieved successfully")
    }
    else if(json.success===2){
      alert("Payment already Done")
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
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">ID</label>
    <div className="col-sm-10 mt-2">
      <input type="number" className="form-control" id="user_id" name="user_id" onChange={onChange} placeholder="ID"/>
    </div>
  </div>
  
  <div className="form-group row">
    <div className="col-sm-10 mt-3">
      <button type="submit" className="btn btn-warning">Recieve Payments</button>
    </div>
  </div>
</form>
    </div>
    </section>
  )
}

export default RcvPayments
