import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const LandingPage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 330px;
  }
  @media screen and (min-width: 992px) {
    width: 420px;
  }
  @media screen and (min-width: 1200px) {
    width: 582px;
    height: 373px;
  }
`
export const LoginPageDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 458px;
    box-shadow: 0px 8px 40px 0px #07070714;
    border-radius: 8px;
  }
  @media screen and (min-width: 992px) {
    width: 400px;
    height: 458px;
  }
  @media screen and (min-width: 1200px) {
    width: 440px;
    height: 458px;
  }
`
export const WebsiteLogoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

export const WebsiteLogo = styled.img`
  width: 82px;
  height: 42px;
`
export const WebsiteTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  //   border: 1px solid #333;
  width: 300px;
  @media screen and (min-width: 992px) {
    width: 316px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #000000;
  font-weight: bold;
  line-height: 2.4;
`
export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
  border: none;
  border-radius: 2px;
  padding-left: 12px;
  outline: none;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #4094ef;
  line-height: 24px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 25px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ef4444;
  font-weight: 400;
  line-height: 2.4;
  margin: 0;
`
