import React from "react";
import background from "../assets/guild-wars-2-professions.jpg";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Container, Row, Button } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom";
import frame from "../styles/Containers.module.css";
import styles from "../styles/Landing.module.css";
import PostsPage from "./posts/PostsPage";

const LandingPage = () => {
  const currentUser = useCurrentUser();
  const loggedOutLanding = (
    <div className={styles.Styles}>
      <Row>
        <Container className="container-md">
          <Container
            className={`${frame.ContainerBorder} ${frame.FlexHeight} container-md justify-content-center`}
          >
            <Row className="justify-content-center">
              <div>
                <img src={background} alt="background-landing" />
              </div>
            </Row>
            <Row className="justify-content-center">
              <div className="text-center">
                <h5 className={styles.LandingText}>
                Do you love playing Guild Wars? <p></p>
                Sign up now to be part of our community!
                </h5>
              </div>
            </Row>
            <Row className="justify-content-center">
              <div>
                <Link to="/signup">
                  <Button
                    className={`${btnStyles.ButtonWhite} btn text-uppercase`}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
              </Row>
              <Row className="justify-content-center">
              <div className="text-center">
                <h5 className={styles.LandingText}>
                Already have an account with us? <p></p>
                Sign in here
                </h5>
              </div>
            </Row>
            <Row className="justify-content-center">
              <div>
                <Link to="/signin">
                  <Button
                    className={`${btnStyles.ButtonWhite} btn text-uppercase`}
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
              
            </Row>
          </Container>
        </Container>
      </Row>
    </div>
  );

  const loggedInLanding = (
    <div>
      <Container>
        <PostsPage />
      </Container>
    </div>
  );

  return (

    <div>{currentUser ? loggedInLanding : loggedOutLanding}</div>
  );
};

export default LandingPage;