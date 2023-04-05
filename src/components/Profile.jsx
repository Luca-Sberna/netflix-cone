import { Component } from "react";
import { Container } from "react-bootstrap";
import avatar from "../assets/img/avatar.png";

const Profile = () => (
  <Container className="w-50">
    <div
      id="cont-profile"
      className="container d-flex  border-bottom border-dark opacity-75 p-0"
    >
      <div>
        <h1 className="text-secondary ">Edit Profile</h1>

        <div id="cont-profile-2" class="border-top border-dark py-3">
          <div className="row ">
            <div className="col-4 ">
              <img src={avatar} width="140px" alt="user-img" />
            </div>
            <div className="col-8   ">
              <div className="name-user" /* style="width: 19rem;" */>
                <h3 className="text-secondary bg-info p-1 fs-5">
                  Strive Student
                </h3>
              </div>
              <div className=" py-3 border-bottom border-dark">
                <p className="text-secondary fs-5">Language:</p>
                <button
                  className="btn btn-black text-light border  border-secondary dropdown-toggle px-3 py-1  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ---
                </button>
                <ul class="dropdown-menu dropdown-menu-dark bg-dark">
                  <li>
                    <a className="dropdown-item text-secondary" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-secondary" href="#">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-secondary" href="#">
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>

              <p className="pt-3 text-secondary fs-5">Maturity Settings:</p>
              <p
                className="maturity-set text-uppercase text-secondary bg-success p-1 text-center"
                /* style="width: 13rem;" */
              >
                all maturity ratings
              </p>
              <p className="text-secondary">
                Show titles of all maturity ratings for this profile.
              </p>
              <div className="border-bottom border-dark pb-4">
                <button
                  type="button"
                  className=" btn btn-outline-success text-secondary border-secondary text-uppercase px-4 py-1"
                >
                  edit
                </button>
              </div>

              <p className="fs-5 pt-2 text-secondary">Autoplay controls</p>
              <div className="form-check ">
                <input
                  className="form-check-input bg-primary border-secondary fs-5  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="text-secondary fs-6"
                  htmlFor="flexCheckDefault"
                >
                  Autoplay next episode in a series on all devices
                </label>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input bg-primary border-secondary fs-5  "
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="text-secondary fs-6" for="flexCheckChecked">
                  Autoplay previews while browsing on all devices
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container justify-content-start  d-flex  py-4 border-dark opacity-75 ">
      <div className="row flex-nowrap gap-4 p-0">
        <button
          type="button"
          className="col-3 btn btn-light text-uppercase px-4 fw-bold border-secondary"
        >
          save
        </button>
        <button
          type="button"
          className="col-4 btn btn-outline-success text-uppercase border-secondary text-secondary"
        >
          cancel
        </button>
        <button
          type="button"
          className="col-6 btn btn-outline-success px-4 text-uppercase border-secondary text-secondary"
        >
          delete profile
        </button>
      </div>
    </div>
  </Container>
);
export default Profile;
