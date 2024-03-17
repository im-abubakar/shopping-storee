import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div class="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:"10"}}>
            <form class="mb-3 d-flex">
                <input type="search" class="form-control me-2" id="exampleFormControlInput1" placeholder="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
            </div>
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{filter: "brightness(30%)"}}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{filter: "brightness(30%)"}}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{filter: "brightness(30%)"}}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
