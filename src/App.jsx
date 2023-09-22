
// import { data } from 'autoprefixer';
import './App.css'
import ReusableFrom from './components/ReusableFrom/ReusableFrom'
// import CoustomHookForm from './components/CoustomHookForm/CoustomHookForm'
// import RafForm from './components/RafForm/RafForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
const handleSingUpSubmit = data => {
 console.log('sign up data: ', data);
}
const handleUpdateProfile = data => {
console.log('update profile ', data);
}

  return (
    <div>
    {/* <SimpleForm></SimpleForm> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <RafForm></RafForm> */}
    {/* <CoustomHookForm></CoustomHookForm> */}
    <ReusableFrom formTitle={'sing up'} 
  
    handleSubmit={handleSingUpSubmit}>
      <div>
        <h2>Sing Up</h2>
        <p>Please sing up right now</p>
      </div>
    </ReusableFrom>
    <ReusableFrom formTitle={'profile Updete'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>

    <div>
        <h2>Update profile</h2>
        <p>Always keep your profile updated</p>
        </div>
    </ReusableFrom>
    </div>
  )
}

export default App
