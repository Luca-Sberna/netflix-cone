import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Badge,
  Card,
} from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const movieFetch = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=60534065&i=${params.imdbID}`,
      );
      if (response.ok) {
        const data = await response.json();
        setMovie(data);
      } else {
        setErrorMessage(
          `Errore nel caricamento dei contenuti. ERRORE: ${response.status}`,
        );
      }
    } catch (error) {
      setErrorMessage(`FATAL ERROR: ${error.message}`);
    }
  };

  useEffect(() => {
    movieFetch();
  }, [params.imdbID]);

  return (
    <Container fluid>
      {errorMessage && (
        <Row className="justify-content-center ">
          <Alert variant="danger">{errorMessage}</Alert>
        </Row>
      )}
      {movie ? (
        <>
          <Row className="justify-content-center ">
            <h2 className="text-light text-start p-2">{movie.Title}</h2>
          </Row>
          <Row className="justify-content-center ">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Link
                className={`nav-link rounded text-light ${
                  location.pathname === "/details" ? "active" : ""
                }`}
                to="/movie-details/"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid my-4"
                />
              </Link>
            </Col>
            <Col xs={12} md={8} className="text-light">
              <Row>
                <Col xs={4}>Director:</Col>
                <Col xs={8}>{movie.Director}</Col>
              </Row>
              <Row>
                <Col xs={4}>Writer:</Col>
                <Col xs={8}>{movie.Writer}</Col>
              </Row>
              <Row>
                <Col xs={4}>Actors:</Col>
                <Col xs={8}>{movie.Actors}</Col>
              </Row>
              <Row>
                <Col xs={4}>Year:</Col>
                <Col xs={8}>{movie.Year}</Col>
              </Row>
              <Row>
                <Col xs={4}>imdbRating:</Col>
                <Col xs={8}>{movie.imdbRating}</Col>
              </Row>
              <Row>
                <Col xs={4}>Runtime:</Col>
                <Col xs={8}>{movie.Runtime}</Col>
              </Row>
              <Row>
                <Col xs={4}>Plot:</Col>
                <Col xs={8}>{movie.Plot}</Col>
              </Row>
              <Row>
                <Col xs={4}>Genres:</Col>
                <Col xs={8}>
                  {movie.Genre.split(",").map((genre) => (
                    <Badge
                      pill
                      key={genre}
                      className="bg-secondary my-1 mx-1 px-2 py-1"
                    >
                      {genre}
                    </Badge>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <Row className="justify-content-center ">
          <Spinner animation="border" role="status" variant="secondary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;
