import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import frame from "../../styles/Containers.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";


const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data)
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      {/* Spacing container */}
      <Container className={frame.SmallComponent}>
        {/* Content container */}
        <Container
          className={`${frame.ContentToneBorder} ${frame.Shadow}container-md`}
        >
          <h4 className={`${appStyles.ComicText} text-center text-uppercase`}>
         Welcome back gamer... it is time to sign in!
          </h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Gamer Name</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="Gamer Name"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={`${appStyles.InfoText} text-center`}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Row className="justify-content-center">
              <Button
                className={`${appStyles.InfoText} ${btnStyles.ButtonYellow} ${btnStyles.Medium} text-uppercase`}
                variant="primary"
                type="submit"
              >
                Sign In
              </Button>

              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Row>
          </Form>

          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signup">
              Do not have an account? <span>Sign up here!</span>
            </Link>
          </Container>
        </Container>
      </Container>
    </Row>
  );
};

export default SignInForm;