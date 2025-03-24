import React from 'react'
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';
function Child({user}) {

  console.log("Child drilling: ", user.number);

  return (
   <>
     <JaaSMeeting
   roomName='interview_task'
   domain='meet.jit.si'
   getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100vh'; } }
   />
   </>
  )
}

export default Child