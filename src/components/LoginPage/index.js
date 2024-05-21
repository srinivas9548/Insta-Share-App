import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginPageContainer,
  ResponsiveContainer,
  LandingPage,
  LoginPageDetailsContainer,
  WebsiteLogoAndTitle,
  WebsiteLogo,
  WebsiteTitle,
  FormContainer,
  InputContainer,
  LabelText,
  InputElement,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state

    return (
      <>
        <LoginPageContainer>
          <ResponsiveContainer>
            <LandingPage
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1716124684/mq1yrjqzds4hjkgo47d4.png"
              alt="website login"
            />
            <LoginPageDetailsContainer>
              <WebsiteLogoAndTitle>
                <WebsiteLogo
                  src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1716289704/kzuoug08izwrkaajem91.png"
                  alt="website logo"
                />
                <WebsiteTitle>Insta Share</WebsiteTitle>
              </WebsiteLogoAndTitle>
              <FormContainer onSubmit={this.onSubmitForm}>
                <InputContainer>
                  <LabelText htmlFor="username">USERNAME</LabelText>
                  <InputElement
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelText htmlFor="password">PASSWORD</LabelText>
                  <InputElement
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </InputContainer>
                {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                <LoginButton type="submit">Login</LoginButton>
              </FormContainer>
            </LoginPageDetailsContainer>
          </ResponsiveContainer>
        </LoginPageContainer>
      </>
    )
  }
}

export default LoginPage
