import React, {useState} from 'react';
import styled from 'styled-components';
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "firebase";



function Admin() {

    const [isUploadVideoVisible, setIsUploadVideoVisible] = React.useState(false)
    const [isDeleteVideoVisible, setIsDeleteVideoVisible] = React.useState(false)
    const [loggedIn, setIsLoggedIn] = React.useState(false)

    const pushUploadVideo = () => {
        setIsUploadVideoVisible(true);
        setIsDeleteVideoVisible(false)
    }

    const pushDeleteVideo = () => {
        setIsDeleteVideoVisible(true);
        setIsUploadVideoVisible(false)
    }

    const pushLogin = () => {
        setIsLoggedIn(true);
    }

    const showDeleteMovie = () => (
        <UploadMovie>
             Upload a movie
        </UploadMovie>
      )

      const showUploadMovie = () => (
        <UploadMovie>
             Delete a movie
        </UploadMovie>
      )

      const [state , setState] = useState({
        email : "",
        password : "",
        isUploadVideoVisible: false,
        isDeleteVideoVisible: false
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    const signIn = () => {

    }
  

    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     if(state.password === state.confirmPassword) {
    //         sendDetailsToServer()    
    //     } else {
    //         props.showError('Passwords do not match');
    //     }
    // }

    




  return (
      <Container>
          <h3>Welcome to the Admin Page</h3>

          {!loggedIn &&
          <LoginWrapper>
             <input type="email" 
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                value={state.email}
                onChange={handleChange}
            />

                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange} 
                />

                <LogginButton 
                    type="submit" 
                    onClick={signIn(state.email, state.password)}
          >
                    Loggin
                </LogginButton>
          </LoginWrapper>
        }
          {
          loggedIn &&
          <LoggedIn>
                <ButtonWrapper>
                    <Button onClick={pushUploadVideo}>Upload a movie</Button>
                    <Button onClick={pushDeleteVideo}>Delete a movie</Button>
                </ButtonWrapper>

                {isDeleteVideoVisible && showDeleteMovie()}
                {isUploadVideoVisible && showUploadMovie()}
            </LoggedIn>
            }

      </Container>
  );
}

export default Admin;

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    margin-top: 20px;
    text-align: center;

`

const Button = styled.div`
    display: inline;
    border: 1px white solid;
    padding: 10px;
    margin: 0 20px;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
    &:hover {
        background-color: darkgray;
    }
`

const LogginButton = styled.div`
    display: inline;
    border: 1px white solid;
    padding: 10px;
    margin: 0 20px;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: darkgray;
    }
`

const ButtonWrapper = styled.div`
height: 100px;
margin-top: 30px;
`

const UploadMovie = styled.div`

`

const DeleteMovie = styled.div`

`

const LoginWrapper = styled.div`
text-align: center;
input {
    display: block;
    margin: 30px auto;
    width: 300px;
    border-radius: 5px;
    padding: 10px;
}
`

const LoggedIn = styled.div`

`