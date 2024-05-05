import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {data.map((element, index) => {
          if (element.pack == "Free") {
            return (
              <>
                <div className="div" key={index}>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-header">
                        <div className="card-text">{element.pack}</div>
                        <div className="card-text price">{element.price}</div>
                      </div>

                      <div className="card-body">
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.user}
                        </div>
                        <div className="card-text">
                          {" "}
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.storage}
                        </div>
                        <div className="card-text">
                          {" "}
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.publicProject}
                        </div>
                        <div className="card-text">
                          {" "}
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.privateProject}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.support}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.subdomain}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.report}
                        </div>
                        <br />
                        <div class="d-grid gap-2 col-6 mx-auto">
                          <button className="btn btn-primary">SELECT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          } else if (element.pack == "Plus") {
            return (
              <>
                <div className="div" key={index}>
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-text">{element.pack}</div>
                        <div className="card-text price">{element.price}</div>
                      </div>

                      <div className="card-body">
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.user}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.storage}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.publicProject}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.privateProject}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.support}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.subdomain}
                        </div>
                        <div className="card-text text-muted">
                          <span>
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </span>
                          {element.report}
                        </div>
                        <br />
                        <div class="d-grid gap-2 col-6 mx-auto">
                          <button className="btn btn-primary">SELECT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="div" key={index}>
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-text">{element.pack}</div>
                        <div className="card-text price">{element.price}</div>
                      </div>

                      <div className="card-body">
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.user}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.storage}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.publicProject}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.privateProject}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.access}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.support}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.subdomain}
                        </div>
                        <div className="card-text">
                          <span>
                            <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          </span>
                          {element.report}
                        </div>
                        <br />
                        <div class="d-grid gap-2 col-6 mx-auto">
                          <button className="btn btn-primary">SELECT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
