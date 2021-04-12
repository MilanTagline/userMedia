import React,{useState,Fragment} from 'react'
import { Camera } from "./camera";
import ValidateForm from './ValidateForm'

const App = () => {

  const [cardImage, setCardImage] = useState();

  console.log('cardImage :>> ', cardImage);

  return (
    <Fragment>
      <Camera
          onCapture={(blob) => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
    </Fragment>
    // <div style={{margin:"100px"}}>
    //   <ValidateForm/>
    // </div>
  )
}
export default App
