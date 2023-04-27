import React from "react";

function Searchform() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = 'localhost:5000/api/car/keyward';
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      // body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await data.json();
    console.log(json);
    if(json.success){

    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <div className="container mt-4">
      <form handleSubmit={handleSubmit}>
        <div class="row">
          <div class="col-7">
            <input
              type="text"
              class="form-control"
              id="search"
              name="search"
              placeholder="Search"
            />
            <label className="form-label" htmlFor="search">
              From
            </label>
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control"
              id="dateFrom"
              name="dateFrom"
              placeholder="Last name"
            />
            <label className="form-label" htmlFor="dateFrom">
              From
            </label>
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control"
              id="dateto"
              name="dateto"
              placeholder="Last name"
            />
            <label className="form-label" htmlFor="dateto">
              To
            </label>
          </div>
          <div class="col-1">
            <input
              type="submit"
              class="form-control btn btn-warning"
              placeholder="Last name"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Searchform;
