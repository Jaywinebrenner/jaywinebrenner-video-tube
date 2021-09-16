import React from 'react';
import styled from 'styled-components'


function ConfirmationModal({setIsModalVisible, areYouSureDelete, setIdOfVideoToDelete}) {

 

  return (
  
        <Modal id="id01" class="modal">
            <ModalBox class="modal-content" action="/action_page.php">
                <div class="container">
                <h1>Are you sure you want to delete this video?</h1>

                <Clearfix class="clearfix">
                    <button onClick={() => {setIsModalVisible(false); setIdOfVideoToDelete(null)}} type="button" class="cancelbtn">Cancel</button>
                    <button onClick={() => areYouSureDelete()}type="button" class="deletebtn">Delete</button>
                </Clearfix>
                </div>
            </ModalBox>
        </Modal>
  
  );
}

export default ConfirmationModal;

const Container = styled.div`
    h2 {
        margin-left: 20px;
    }
`

const Modal = styled.div`
 
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: black;
    padding-top: 50px;
`

const ModalBox = styled.div`
    background-color: #fefefe;
    margin: 5% auto 15% auto; 
    border: 1px solid #888;
    width: 60%;
    height: 250px;
    h1 {
        color: black;
    }
`
const Clearfix = styled.div`
    button {
        background-color: white;
        border: 1px solid black;
        padding: 10px;
        margin: 0 10px;
        border-radius: 3px;
        cursor: pointer;
        transition: .3s;
        &:hover {
            background-color: darkgray;
        }
    }
`