import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/personalDetails'
import AdditionalDetails from './components/additionalDetails'
import CompanyDetails from './components/companyDetails'
import CoverLetter from './components/coverLetter'
import PreviewLetter from './components/previewLetter'
import ExpandButton from './components/expandButton'
import dummyText from './assets/dummyText'
import printDiv from './scripts/printDiv'


function App() {

  const [openForm, setOpenForm] = useState(0);

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [phoneNum, setPhoneNum] = useState("123-456-7890");
  const [email, setEmail] = useState("johnsmith@gmail.com");
  const [location, setLocation] = useState("Atlanta, Georgia");
  const [currTitle, setCurrTitle] = useState("Start-Up Intern");

  const [company, setCompanyName] = useState("Microsoft - ");
  const [jobTitle, setJobTitle] = useState("Software Engineer II");

  const [greeting, setGreeting] = useState("Dear Hiring Manager");
  const [outro, setOutro] = useState("Best Regards");
  const [letterBody, setLetterBody] = useState(dummyText);

  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [otherSite, setOtherSite] = useState(""); 

  const [home, setHome] = useState(false);
  if (home === true) {
    return <Navigate to="/" />;
  };

  const rightPreviewStyles = "component-preview component-base";
  const leftInputStyles = "component-form component-base";


  // as soon as the user opens any form component, make the demoLogosDiv disappear from display
  const demoLogosDiv = document.getElementById("demoLogosDiv");
  if(openForm != 0){
    demoLogosDiv.style.display = "none";
    demoLogosDiv.style.backgroundColor = "red";
  }

  return (
    <>
    <div id='content-wrapper'>

      <div id='top-header-div'>
        <div id='logo-text'>
          <span style={ {color:"rgb(30, 219, 103)"} }>Cov</span><span style={ {color:"rgb(255, 255, 255)"} }>Letter.io</span>
        </div>
        <div id='top-header-buttons-div'>
        {/* Turn these buttons into a react component later */}
          <button onClick={() => printDiv("fullPage")}>Export</button>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      </div>

      <div id='parent-wrapper'>
        <div id='left-form'>
          <PersonalDetails styleClasses={leftInputStyles} functions={ {setFirstName, setLastName, setPhoneNum, setEmail, setLocation, setCurrTitle} }
          children={<ExpandButton shown={openForm === 1} 
          click={() => {if(openForm !== 1){setOpenForm(1)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 1} />

          <AdditionalDetails styleClasses={leftInputStyles} functions={ {setLinkedIn, setGitHub, setOtherSite} } children={<ExpandButton shown={openForm === 2} 
          click={() => {if(openForm !== 2){setOpenForm(2)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 2} />

          <CompanyDetails styleClasses={leftInputStyles} functions={ {setCompanyName, setJobTitle} }
          children={<ExpandButton shown={openForm === 3} 
          click={() => {if(openForm !== 3){setOpenForm(3)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 3} />

          <CoverLetter styleClasses={leftInputStyles} functions={ {setGreeting, setOutro, setLetterBody} }
          children={<ExpandButton shown={openForm === 4} 
          click={() => {if(openForm !== 4){setOpenForm(4)}
              else{setOpenForm(0)} }} />} 
          shown={openForm === 4} />
        </div>
        
        <div id='right-preview' className='printClass'>
          <PreviewLetter styleClasses={rightPreviewStyles} values={ {firstName, lastName, phoneNum, email, location, currTitle, company, jobTitle,
          greeting, outro, letterBody, linkedIn, gitHub, otherSite} }/>
        </div>
      </div>

    </div>
    </>
  )
}

export default App


