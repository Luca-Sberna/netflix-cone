import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap";
import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThirdGallery = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=60534065&s=fast-and-furious",
        );
        const data = await response.json();
        setMovies(data.Search.slice(0, 6));
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    getMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center ">
        <h2 className="text-light text-start p-2">Fast And Furious Saga</h2>
        <Col xs={12}>
          <Carousel indicators={null}>
            {[...Array(Math.ceil(movies.length / 3))].map((_, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {movies.slice(index * 3, (index + 1) * 6).map((movie) => (
                    <Col xs={2} key={movie.imdbID}>
                      <Link to={`/movie-details/${movie.imdbID}`}>
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="img-fluid h-100"
                        />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdGallery;
