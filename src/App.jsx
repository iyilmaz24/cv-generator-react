import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/personalDetails'
import AdditionalDetails from './components/additionalDetails'
import CompanyDetails from './components/companyDetails'
import CoverLetter from './components/coverLetter'
import PreviewLetter from './components/previewLetter'
import ExpandButton from './components/expandButton'

function App() {

  const [openForm, setOpenForm] = useState(1);

  const rightPreviewStyles = "component-preview component-base";
  const leftInputStyles = "component-form component-base";

  return (
    <>
    <div>

      <div id='top-header-div'>
        <div>CoverLetter.io</div>
        <div id='top-header-buttons-div'>
        {/* Turn these buttons into a react component later */}
          <button>Export</button>
          <button>Customize</button>
        </div>
      </div>

      <div id='parent-wrapper'>
        <div id='left-form'>
          <PersonalDetails styleClasses={leftInputStyles} children={<ExpandButton shown={openForm === 1} 
          click={() => {if(openForm !== 1){setOpenForm(1)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 1} />

          <AdditionalDetails styleClasses={leftInputStyles} children={<ExpandButton shown={openForm === 2} 
          click={() => {if(openForm !== 2){setOpenForm(2)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 2} />

          <CompanyDetails styleClasses={leftInputStyles} children={<ExpandButton shown={openForm === 3} 
          click={() => {if(openForm !== 3){setOpenForm(3)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 3} />

          <CoverLetter styleClasses={leftInputStyles} children={<ExpandButton shown={openForm === 4} 
          click={() => {if(openForm !== 4){setOpenForm(4)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 4} />
        </div>
        <div id='right-preview'>
          <PreviewLetter styleClasses={rightPreviewStyles} />
        </div>
      </div>

    </div>
    </>
  )
}

export default App
