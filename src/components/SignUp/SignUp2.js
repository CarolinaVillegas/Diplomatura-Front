import React, { Component } from 'react';
import { validateFields } from '../Others/Validation';
import { Button, FormGroup, FormControl, Modal } from 'react-bootstrap';
import classnames from 'classnames';
import './SignUp.css';

const initialState = {
  name: {
    value: '',
    validateOnChange: false,
    error: '',
  },
  email: {
    value: '',
    validateOnChange: false,
    error: '',
  },
  password: {
    value: '',
    validateOnChange: false,
    error: '',
  },
  submitCalled: false,
  allFieldsValidated: false,
  show: false,
};

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  //   handleClose() {
  //     this.setState({ show: false });
  //   }
  //   handleShow() {
  //     this.setState({ show: true });
  //   }

  handleBlur(validationFunc, evt) {
    const field = evt.target.name;

    if (
      this.state[field]['validateOnChange'] === false &&
      this.state.submitCalled === false
    ) {
      this.setState((state) => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value),
        },
      }));
    }
    return;
  }

  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState((state) => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : '',
      },
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // validate all fields
    const { name, email, password } = this.state;
    const nameError = validateFields.validateName(name.value);
    const emailError = validateFields.validateEmail(email.value);
    const passwordError = validateFields.validatePassword(password.value);

    if ([nameError, emailError, passwordError].every((e) => e === false)) {
      fetch('/users', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            // clear state and show all fields are validated
            this.setState({ ...initialState, allFieldsValidated: true });

            this.showAllFieldsValidated();
            //   this.setState({ show: false })

            // HTTP status code between 200-299
            return response.json();
          } else {
            return {};
          }
        })
        .then((userData) => {
          if (userData) {
            localStorage.setItem('name', userData.user.name);
            localStorage.setItem('email', userData.user.email);
            localStorage.setItem('token', userData.token);
          }
        });
    } else {
      // update the state with errors
      this.setState((state) => ({
        name: {
          ...state.name,
          validateOnChange: true,
          error: emailError,
        },
        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError,
        },
        password: {
          ...state.password,
          validateOnChange: true,
          error: passwordError,
        },
      }));
    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { name, email, password, allFieldsValidated } = this.state;
    return (
      <div className="SignUp">
        <Button variant="primary" onClick={() => this.setState({ show: true })}>
          Sign Up
        </Button>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {allFieldsValidated && (
              <p className="text-success text-center">
                Success, All fields are validated
              </p>
            )}

            {/* Form Starts Here */}
            <form className="form" onSubmit={(evt) => this.handleSubmit(evt)}>
              {/* Name field */}
              <FormGroup>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name.value}
                  placeholder="Enter your name"
                  className={classnames(
                    'form-control',
                    { 'is-valid': name.error === false },
                    { 'is-invalid': name.error }
                  )}
                  onChange={(evt) =>
                    this.handleChange(validateFields.validateName, evt)
                  }
                  onBlur={(evt) =>
                    this.handleBlur(validateFields.validateName, evt)
                  }
                />
                <div className="invalid-feedback">{name.error}</div>
              </FormGroup>
              {/* Email field */}
              <FormGroup>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email.value}
                  placeholder="Enter your email"
                  className={classnames(
                    'form-control',
                    { 'is-valid': email.error === false },
                    { 'is-invalid': email.error }
                  )}
                  onChange={(evt) =>
                    this.handleChange(validateFields.validateEmail, evt)
                  }
                  onBlur={(evt) =>
                    this.handleBlur(validateFields.validateEmail, evt)
                  }
                />
                <div className="invalid-feedback">{email.error}</div>
              </FormGroup>

              {/* Password field */}
              <FormGroup>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  value={password.value}
                  placeholder="Enter your password"
                  className={classnames(
                    'form-control',
                    { 'is-valid': password.error === false },
                    { 'is-invalid': password.error }
                  )}
                  onChange={(evt) =>
                    this.handleChange(validateFields.validatePassword, evt)
                  }
                  onBlur={(evt) =>
                    this.handleBlur(validateFields.validatePassword, evt)
                  }
                />
                <div className="invalid-feedback">{password.error}</div>
              </FormGroup>
              <Modal.Footer>
                <Button
                  type="submit"
                  variant="primary"
                  onMouseDown={() => this.setState({ submitCalled: true })}
                >
                  Sign Up
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SignUp2;
