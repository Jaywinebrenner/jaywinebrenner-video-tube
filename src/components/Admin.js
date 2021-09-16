import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import { useAuth } from "../contexts/AuthContext"
import {auth} from '../firebase.js'
import db from '../firebase'
import uuid from 'react-uuid'
import ConfirmationModal from './ConfirmModal.js';




function Admin({allVideos}) {

    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState()
    const [title, setTitle] = useState()
    const [thumbnail, setThumbnail] = useState()
    const [videoUrl, setVideoUrl] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [idOfVideoToDelete, setIdOfVideoToDelete] = useState(null)


    const [isUploadVideoVisible, setIsUploadVideoVisible] = React.useState(false)
    const [isDeleteVideoVisible, setIsDeleteVideoVisible] = React.useState(false)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])





    const pushUploadVideo = () => {
        setIsUploadVideoVisible(true);
        setIsDeleteVideoVisible(false)
        setSuccessMessage(null)
    }

    const pushDeleteVideo = () => {
        setIsDeleteVideoVisible(true);
        setIsUploadVideoVisible(false)
        setSuccessMessage(null)
    }

    const showUploadVideo = () => (
        <UploadMovie>
             Upload a movie
             <LoginWrapper>
                <input type="title" 
                    className="form-control" 
                    id="title" 
                    aria-describedby="titleHelp" 
                    placeholder="Enter title" 
                    value={title}
                    onChange={e => handleTitle(e.target.value)}
                />
                <input type="thumbnail" 
                    className="form-control" 
                    id="thumbnail" 
                    aria-describedby="thumbnailHelp" 
                    placeholder="Enter thumbnail" 
                    value={thumbnail}
                    onChange={e => handleThumbnail(e.target.value)}
                />
                <input type="videoUrl" 
                    className="form-control" 
                    id="videoUrl" 
                    aria-describedby="videoUrlHelp" 
                    placeholder="Enter videoUrl" 
                    value={videoUrl}
                    onChange={e => handleVideoUrl(e.target.value)}
                />
                <LogginButton 
                    type="submit" 
                    onClick={handleUpload}
          >
                    Upload Video
                </LogginButton>
             </LoginWrapper>
        </UploadMovie>
      )
    

    const deleteVideo = (id) => {
        setIdOfVideoToDelete(id);
        setIsModalVisible(true);    

      }

    const areYouSureDelete = () => {
        console.log("ID IN DELETE", idOfVideoToDelete)
        db.collection('videos').doc(idOfVideoToDelete).delete();
        setIdOfVideoToDelete(null)
        setIsModalVisible(false)
      }

      const showDeleteVideo = () => (
        <div>
             Delete a Video
          
                 {allVideos && allVideos.map((video) => (
                     <DeleteMovie key={video.id}>
                            <div>
                                {video.name} 
                            </div>
                            <span onClick={() => deleteVideo(video.id)}>Delete</span>
                    </DeleteMovie>
                 ))}
          
           
        </div>
      )

    const handleEmail = (email) => {
        setError('')
        console.log("email", email)
        setEmail(email)
    }
    const handlePassword = (password) => {
        setError('')
        console.log("password", password)
        setPassword(password)
    }
    const handleTitle = (title) => {
        setError('')
        console.log("title", title)
        setTitle(title)
    }

    const handleVideoUrl = (videoUrl) => {
        setError('')
        console.log("videoUrl", videoUrl)
        setVideoUrl(videoUrl)
    }

    const handleThumbnail = (thumbnail) => {
        setError('')
        console.log("thumbnail", thumbnail)
        setThumbnail(thumbnail)
    }

    function logout() {
        return auth.signOut()
      }


    function handleLogin(e){
        e.preventDefault()
            setError("")
            setLoading(true)
            auth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                setError(error.message);
                setEmail('')
                setPassword('')
               })
            console.log(currentUser)
    } 

    async function handleUpload(e){
        e.preventDefault()
        try{
            let videoUUID = uuid()
            let upload = {
                id: videoUUID,
                name: title,
                thumbnail_url: thumbnail,
                video_url: videoUrl
            }
            const res = await db.collection('videos').doc(videoUUID).set(upload);
            setSuccessMessage("You have successfully uploaded your video.")
            setIsUploadVideoVisible(false);
            handleThumbnail('')
            handleTitle('')
            handleVideoUrl('')
            
        } catch(e) {
            alert(e)
        }

    }

  return (
      <Container>
          <h3>Welcome to the Admin Page {currentUser &&  <span onClick={logout}>Log Out</span>}</h3>

            {isModalVisible && <ConfirmationModal setIsModalVisible={setIsModalVisible} areYouSureDelete={areYouSureDelete} setIdOfVideoToDelete={setIdOfVideoToDelete}></ConfirmationModal>}
          {!currentUser &&
          <LoginWrapper>
             <input type="email" 
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                value={email}
                onChange={e => handleEmail(e.target.value)}
            />

                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={e =>handlePassword(e.target.value)}
                />

                <LogginButton 
                    type="submit" 
                    onClick={handleLogin}
          >
                    Login
                </LogginButton>
          </LoginWrapper>
        }

        {error && <Container>{error}</Container>}
          {
              currentUser &&
          <LoggedIn>
                <ButtonWrapper>
                    <Button onClick={pushUploadVideo}>Upload a movie</Button>
                    <Button onClick={pushDeleteVideo}>Delete a movie</Button>
                </ButtonWrapper>

                {isDeleteVideoVisible && showDeleteVideo()}
                {isUploadVideoVisible && showUploadVideo()}
            </LoggedIn>
            }
              {successMessage && <Container>{successMessage}</Container>}

      </Container>
  );
}

export default Admin;

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    margin-top: 20px;
    text-align: center;
    span {
        border: 1px white solid;
        border-radius: 3px;
        font-size: 12px;
        padding: 3px;
        cursor: pointer;
        margin-top: 60px;
        &:hover {
            background-color: darkgray;
        }
        
    }

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
    margin-top: 30px;
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