import React, { useEffect, useState } from "react";
import swal from 'sweetalert';

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((perVal) => {
      return {
        ...perVal,
        [name]: value,
      };
    })
  };
  const formSubmit = (e) => {
    e.preventDefault();

    swal("submit!", `My Name is ${data.fullName},My Mobile number is ${data.phone} ,and My Email is ${data.email}  ${data.msg}`, "success");
  }

  let textInput = null;
  useEffect(() => {
    textInput.focus();
  }, [textInput])


  const contact = {
    fontWeight: "bold",
    fontSize: "30px",
  }
  return (
    <>
      <div className="my-4 cont">
        <h1 className="text-center" style={contact}>Contact US</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your FullName"
                  ref={(text) => { textInput = text; }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"

                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Email"

                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control resize"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}

                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
