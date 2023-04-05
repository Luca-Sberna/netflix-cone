import { Button, Dropdown } from "react-bootstrap";

const MyMain = () => (
  <>
    <div className=" d-flex m-0 p-0 justify-content-between align-items-center pt-4">
      <div className="d-flex align-items-center">
        <h1 className="text-secondary  p-2">TV Shows</h1>
        <Dropdown className="dropdown py-3 align-items-center">
          <Dropdown.Toggle
            variant="primary"
            className="border border-dark ms-5"
          >
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-dark border border-dark bg-primary shadow-lg">
            <Dropdown.Item>
              <a className="dropdown-item text-secondary rounded" href="#">
                Action
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a className="dropdown-item text-secondary rounded" href="#">
                Fantasy
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a className="dropdown-item text-secondary rounded" href="#">
                Comedy
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <Button type="button" className="btn btn-outline-success ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-text-left "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Button>
        <Button type="button" className="btn btn-outline-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </Button>
      </div>
    </div>
  </>
);

export default MyMain;
