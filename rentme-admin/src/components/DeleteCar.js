import React, { useState } from 'react'

function DeleteCar() {
    const [car_id, setcar_id] = useState({});
      const onChange = (e) => {
        setcar_id(e.target.value);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/emp/deletecar';
        const data = await fetch(url, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            Reg_No: car_id
          })
        });
        const json = await data.json();
    console.log(json);
    if(json.success){
        alert("Car deleted successfully")
    }
    else{
      alert("Please Enter valid Credentials")
    }
}
  return (
      <section className="vh-100" style={{ backgroundColor: "#ffff99" }}>
    <div className='container py-5'>
        <h2>Delete Car</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Car ID</label>
    <div className="col-sm-10 mt-2">
      <input type="text" className="form-control" id="user_id" name="user_id" onChange={onChange} placeholder="ID"/>
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
      <button type="submit" className="btn btn-warning">Delete Customer</button>
    </div>
  </div>
</form>
    </div>
    </section>
  )
}

export default DeleteCar
