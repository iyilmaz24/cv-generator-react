import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/personalDetails'
import AdditionalDetails from './components/additionalDetails'
import CompanyDetails from './components/companyDetails'
import CoverLetter from './components/coverLetter'
import PreviewLetter from './components/previewLetter'

function App() {

  const [debugString, setDebugString] = useState('hello world!');

  const componentBaseStyle = "componentBaseStyles";

  return (
    <>
    <div id='parent-wrapper'>

      <div id='left-form'>
        <PersonalDetails styleClasses={componentBaseStyle} string={debugString} />

        <AdditionalDetails styleClasses={componentBaseStyle} string={"additional details"} />

        <CompanyDetails styleClasses={componentBaseStyle} string={"company details"}/>

        <CoverLetter styleClasses={componentBaseStyle} string={"coverLetter input component"} />
      </div>

      <div id='right-preview'>
        <PreviewLetter styleClasses={componentBaseStyle} string={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.`} />
      </div>

    </div>


    </>
  )
}

export default App
