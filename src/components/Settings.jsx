import { Component } from "react";
import { Container } from "react-bootstrap";
import avatar from "../assets/img/avatar.png";

const Settings = () => (
  <Container fluid className="bg-light ">
    <div className="col-8 offset-2 ">
      <h1 className="border-bottom border-dark pt-5 fs-2">Account</h1>

      <div className="row border-bottom border-dark">
        <div className="col-4">
          <div>
            <h5 className="text-uppercase text-info">membership & billing</h5>
            <button className="btn btn-info"> Cancel Membership</button>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex justify-content-between">
            <h6>student@strive.school</h6>
            <a className="text-decoration-none" href="#">
              Change account email
            </a>
          </div>

          <div className="d-flex justify-content-between">
            <h6>Password:*****</h6>
            <a className="text-decoration-none" href="#">
              Change password
            </a>
          </div>

          <div className="d-flex justify-content-between border-bottom border-dark mb-3 pb-3 ">
            <h6>Phone: 321 044 1279</h6>
            <a className="text-decoration-none" href="#">
              Change phone number
            </a>
          </div>

          <div className="d-flex justify-content-between">
            <h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-paypal"
                viewBox="0 0 16 16"
              >
                <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
              </svg>{" "}
              Paypal
            </h6>
            <a className="text-decoration-none" href="#">
              Update payment info
            </a>
          </div>

          <div className="d-flex justify-content-end border-bottom border-dark pb-3 mb-3">
            <a className="text-decoration-none" href="#">
              Billing details
            </a>
          </div>

          <div className="d-flex justify-content-end">
            <a className="text-decoration-none" href="#">
              Redeem gift card or promo code
            </a>
          </div>

          <div className="d-flex justify-content-end pb-3 mb-2">
            <a className="text-decoration-none" href="#">
              Where to buy gift cards
            </a>
          </div>
        </div>
      </div>

      <div className="row border-bottom border-dark">
        <div className="col-4">
          <div>
            <h5 className="text-uppercase text-info pt-2">plan details</h5>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex justify-content-between pb-2 pt-2">
            <h6>Premium</h6>
            <a className="text-decoration-none" href="#">
              Change plan
            </a>
          </div>
        </div>
      </div>

      <div className="row border-bottom border-dark">
        <div className="col-4">
          <div>
            <h5 className="text-uppercase text-info pt-2">settings</h5>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex flex-column">
            <a className="text-decoration-none pt-3" href="#">
              Parental controls
            </a>
            <a className="text-decoration-none" href="#">
              Test paticipation
            </a>
            <a className="text-decoration-none" href="#">
              Manage download device
            </a>
            <a className="text-decoration-none" href="#">
              Activate device
            </a>
            <a className="text-decoration-none" href="#">
              Recent device streaming activity
            </a>
            <a className="text-decoration-none pb-3" href="#">
              Sign out of all devices
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div>
            <h5 className="text-uppercase text-info pt-2">My profile</h5>
          </div>
        </div>

        <div className="col-8">
          <div className="row pt-3">
            <div className="d-flex justify-content-between pb-2">
              <a href="#" class="text-decoration-none fs-5 text-dark">
                <img src={avatar} height="30px" width="30px" alt="avatar" />
                <span>Strive Student</span>
              </a>

              <div className="d-flex flex-column align-items-end">
                <a className="text-decoration-none" href="#">
                  Manage profiles
                </a>
                <a className="text-decoration-none pb-3" href="#">
                  Add profile email
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="d-flex flex-column">
                <a className="text-decoration-none" href="#">
                  Language
                </a>
                <a className="text-decoration-none" href="#">
                  Playback
                </a>
                <a className="text-decoration-none" href="#">
                  Subtitle appearance
                </a>
              </div>
            </div>

            <div className="col-8">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column ">
                  <a className="text-decoration-none" href="#">
                    Viewing activity
                  </a>
                  <a className="text-decoration-none" href="#">
                    Ratings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Settings;
