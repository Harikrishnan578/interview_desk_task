
import './App.css';
import Granparent from './Granparent';
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';

function App() {

  const user = {
    name: "Harikrishnan",
    age: 25,
    number: "9487781005",
    location: "Komarapalayam",
    pin: "6381183"
  }

  

  return (
   <JaaSMeeting
   roomName='interview_task'
   domain='meet.jit.si'
   getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100vh'; } }
   />
  );
}

export default App;
