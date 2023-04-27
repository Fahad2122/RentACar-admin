import React, { useState } from 'react'

function InsertCar(props) {
    const [credentials, setCredentials] = useState({
        "Reg_No": "",
        "Name": "",
        "model": {},
        "Price": {},
        "city_id": {}
      });
      const [Image, setImage] = useState('');
      const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
      }

      const pathFun = (e) => {
        let fu1 = document.getElementById("Image").value;
        let newfu1 = fu1.replace("C:\\fakepath\\", '/');
        setImage(newfu1);
      }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/car/insertcar';
        const data = await fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            Reg_No: credentials.Reg_No,
            Name: credentials.Name,
            model: credentials.model,
            Image: Image,
            Price: credentials.Price,
            city_id: credentials.city_id
          })
        });
        const json = await data.json();
    // console.log(json);
    if(json.success){
        alert("Car inserted successfully")
    }
    else{
      alert("Please Enter valid Credentials")
    }
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#ffff99" }}>
    <div className='container py-5'>
        <h2>Insert Car</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label mt-3">Registraion Number</label>
    <div className="col-sm-10 mt-3">
      <input type="text" className="form-control" id="reg_No" name="Reg_No" onChange={onChange} placeholder="Registraion Number"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Name</label>
    <div className="col-sm-10 mt-2">
      <input type="text" className="form-control" id="Name" name="Name" onChange={onChange} placeholder="Name"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Model</label>
    <div className="col-md-3 mt-2">
      <input type="number" className="form-control" id="Model" name="model" onChange={onChange} placeholder="Model"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Price</label>
    <div className="col-md-3 mt-2">
      <input type="number" className="form-control" id="Price" name="Price" onChange={onChange} placeholder="Price"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">Image</label>
    <div className="col-sm-10 mt-2">
      <input type="file" className="form-control" id="Image" name="Image"  onChange={pathFun} placeholder="Image"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-2">City</label>
    <div className="col-md-3 mt-2">
      <input type="number" className="form-control" id="City" name="city_id" onChange={onChange} placeholder="City"/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10 mt-3">
      <button type="submit" className="btn btn-warning">Insert</button>
    </div>
  </div>
</form>
    </div>
    </section>
  )
}

export default InsertCar