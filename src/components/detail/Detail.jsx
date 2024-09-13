import React from 'react'
import "./detail.css"
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
const Detail = () => {
const{chatId,user,isCurrentUserBlocked,isReceiverBlocked,changeBlock}=useChatStore();
const{currentUser}=useUserStore()
  const handleBlock= async()=>{
    if(!user) return;
    const userDocRef=doc(db,"users",currentUser.id)
    try{
      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked? arrayRemove(user.id):arrayUnion(user.id),
      });

      changeBlock()


    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar||"./images/avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet consecte</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./images/arrowUp.png" alt="" />
          </div>
        </div>
        
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./images/arrowUp.png" alt="" />
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./images/arrowDown.png" alt="" />
          </div>
        </div>

        <div className="photos">


          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://content.invisioncic.com/l323473/monthly_2024_08/large.IMG_7991.jpg.963cd801d5f2b23f4b80059ed511d82d.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./images/download.png" alt="" className='icon'/>
          </div>


          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://content.invisioncic.com/l323473/monthly_2024_08/large.IMG_7991.jpg.963cd801d5f2b23f4b80059ed511d82d.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./images/download.png" alt="" className='icon'/>
          </div>


          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://content.invisioncic.com/l323473/monthly_2024_08/large.IMG_7991.jpg.963cd801d5f2b23f4b80059ed511d82d.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./images/download.png" alt="" className='icon' />
          </div>


          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://content.invisioncic.com/l323473/monthly_2024_08/large.IMG_7991.jpg.963cd801d5f2b23f4b80059ed511d82d.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./images/download.png" alt="" className='icon'/>
          </div>

        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./images/arrowUp.png" alt="" />
          </div>
        </div>

        <button onClick={handleBlock}>{
          isCurrentUserBlocked?"You are Blocked":isReceiverBlocked?"User Blocked":"Block User"
          
          
          }</button>
        <button className='logout' onClick={()=>auth.signOut()}>Logout </button>
      </div>
    </div>
  )
}

export default Detail
