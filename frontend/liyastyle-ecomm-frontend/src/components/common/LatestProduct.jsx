import React from 'react'

import Men1 from "../../assets/image/mens/ten.jpg"

const LatestProduct = () => {
  return (
    <>
      <section className="section-2 py-5">
        <div className="container p-4">
          <h2>New Arrivales</h2>
          <div className="row mt-4">
            {[...Array(8)].map((_, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx}>
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={Men1} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="">Blue color sute for men</a>
                    <div className="price">
                      $60 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestProduct