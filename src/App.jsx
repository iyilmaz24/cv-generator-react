import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/personalDetails'
import AdditionalDetails from './components/additionalDetails'
import CompanyDetails from './components/companyDetails'
import CoverLetter from './components/coverLetter'
import PreviewLetter from './components/previewLetter'

function App() {

  const [debugString, setDebugString] = useState('hello world!');

  const rightPreviewStyles = "component-preview component-base";
  const leftInputStyles = "component-form component-base";

  return (
    <>
    <div id='parent-wrapper'>

      <div id='left-form'>
        <PersonalDetails styleClasses={leftInputStyles} />

        <AdditionalDetails styleClasses={leftInputStyles} />

        <CompanyDetails styleClasses={leftInputStyles} />

        <CoverLetter styleClasses={leftInputStyles} />
      </div>

      <div id='right-preview'>
        <PreviewLetter styleClasses={rightPreviewStyles} />
      </div>

    </div>


    </>
  )
}

export default App
