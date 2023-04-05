import { Container } from "react-bootstrap";

const MyFooter = () => (
  <Container className="container link pt-5">
    <div class="logos">
      <a href="#">
        <i class="fa-brands fa-facebook "></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-instagram "></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-twitter "></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-youtube "></i>
      </a>
    </div>
    <div class="sub-links">
      <ul>
        <li>
          <a href="#">Audio and Subtitles</a>
        </li>
        <li>
          <a href="#">Audio Description</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Media Center</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Legal Notices</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>

    <footer>
      <button type="button" className="btn btn-outline-success">
        Service Code
      </button>
      <p class="pt-3">©️ 1997-2018 Netflix, Inc.</p>
    </footer>
  </Container>
);

export default MyFooter;
