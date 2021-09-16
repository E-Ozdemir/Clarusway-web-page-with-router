import React from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div>
      <Navbar />
      <Subscribe />
      <div class="container-fluid d-flex p-4">
        <div class="me-4">
          <h3 class="header my-3">About Us</h3>
          <div class="card mb-3 border-0 p-0 m-0">
            <div class="card-body bg-light">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, temporibus ipsam! Quos fugiat aliquam veritatis esse
                dolorem, enim nostrum alias hic beatae pariatur nemo ut commodi
                eum repellendus nesciunt accusamus.
              </p>
              <p class="card-text bg-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas placeat corporis reiciendis voluptatem. A, eum! Quo id et officiis, repellat reprehenderit animi delectus nobis eum magnam unde minima qui. Necessitatibus ad consectetur voluptatum ipsam neque voluptate maxime saepe laboriosam?</p>
            </div>
          </div>
        </div>
        
        <div>
          <div class="card ">
            <div class="card-body bg-secondary">
            <h3 class="header my-3 text-light">What We Do</h3>
              <p class="card-text "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas placeat corporis reiciendis voluptatem. A, eum! Quo id et officiis, repellat reprehenderit animi delectus nobis eum magnam unde minima qui. Necessitatibus ad consectetur voluptatum ipsam neque voluptate maxime saepe laboriosam?</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
