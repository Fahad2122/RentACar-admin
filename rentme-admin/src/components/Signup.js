import React, { useState } from "react";
import logo from "../cLogo2.png";

function Signup() {

  const [credentials, setCredentials] = useState({
    Name: "",
    "email": "",
    "phone": "",
    "password": "",
    "salary": "",
    "office": {}
  });
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = 'http://localhost:5000/api/emp/signup';
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        Name: credentials.Name,
        email: credentials.email,
        phone: credentials.phone,
        password: credentials.password,
        salary: credentials.salary,
        office: credentials.office
      })
    });
    const json = await data.json();
    console.log(json);
    if(json.success){
      alert("Signup successfull")
    }
    else{
      alert("Please Enter valid Credentials")
    }
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#ffff99" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-13 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center container">
                  <img
                    src={logo}
                    className="rounded mx-auto d-block container"
                    alt="Logo"
                  />

                  <h3 className="mb-5">SignUp</h3>

                  <form onSubmit={handleSubmit}>
                    <div >
                        <input
                          type="text"
                          className="form-control"
                          id="Name"
                          name="Name"
                          onChange={onChange}
                          placeholder="Name"
                        />

                      <div className="mt-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          onChange={onChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          onChange={onChange}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          onChange={onChange}
                          placeholder="Password"
                        />
                      </div>
                      <div className="mt-3 col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="salary"
                          name="salary"
                          onChange={onChange}
                          placeholder="salary"
                        />
                      </div>
                      <div className="mt-3 col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="office"
                          name="office"
                          onChange={onChange}
                          placeholder="Office"
                        />
                      </div>
                    </div>

                  <button
                    className="btn btn-warning btn-lg btn-block mt-4"
                    type="submit"
                    // onClick={(event)=>props.loginCheck(event.target.value)}
                  >
                    Signup
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
