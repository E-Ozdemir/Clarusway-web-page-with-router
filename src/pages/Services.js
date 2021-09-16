import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'

const Services = () => {
    return (
      <div>
        <Navbar />
        <Subscribe />
        <div class="container-fluid d-flex p-4 ">
          <div class="container-fluid w-50 h-100">
            <h3 class="header my-3">Services</h3>
            <div class="card mb-3">
              <div class="card-body bg-light">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus ipsam! Quos fugiat aliquam veritatis esse dolorem, enim nostrum alias hic beatae pariatur nemo ut commodi eum repellendus nesciunt accusamus.
                </p>
                <p class="card-text"> Pricing: $1.000-$3.000</p>
              </div>
            </div>
            <div class="card  mb-3">
              <div class="card-body bg-light">
                <h5 class="card-title">Website Maintenance</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus ipsam! Quos fugiat aliquam veritatis esse dolorem, enim nostrum alias hic beatae pariatur nemo ut commodi eum repellendus nesciunt accusamus.
                </p>
                <p class="card-text"> Pricing: $1.000-$3.000</p>
              </div>
            </div>
            <div class="card  mb-3">
              <div class="card-body bg-light">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus ipsam! Quos fugiat aliquam veritatis esse dolorem, enim nostrum alias hic beatae pariatur nemo ut commodi eum repellendus nesciunt accusamus.
                </p>
                <p class="card-text"> Pricing: $1.000-$3.000</p>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-2 w-auto h-50 p-4 bg-secondary">
            <h2 class="header text-light h5">Get A Quote</h2>

            <div class="input-group my-3">
              <span class="input-group-text">Name</span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your Name"
              />
            </div>
            <div class="input-group my-3">
              <span class="input-group-text">E-Mail</span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your E-Mail"
              />
            </div>

            <div>
              <label for="" class="form-label text-light">
                Message
              </label>

              <textarea
                class="form-control"
                placeholder="Leave a message here"
                id=""
              ></textarea>
            </div>
            <button class="btn mt-3 text-light bg-warning px-4" >Send</button>
          </div>
        </div>
      </div>
    );
}


export default Services
