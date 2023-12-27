

export default function PreviewLetter({ styleClasses, values }) {

    return (
        <>
            <div id="fullPage" className={styleClasses}>        
                <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", textAlign:"left"}}>
                    <div>
                        <div>
                            <span id="firstName">{values.firstName} </span>
                            <span id="lastName">{values.lastName}</span>
                        </div>
                        <div id="phoneNum">{values.phoneNum}</div>
                        <div id="email">{values.email}</div>
                        <div id="location">{values.location}</div>
                        <div id="currTitle">{values.currTitle}</div>
                    </div>

                    <div id="logosDiv">
                        <a href={values.linkedIn} target="_blank" id="linkedInLogo"></a>
                        <a href={values.gitHub} target="_blank" id="gitHubLogo"></a>
                        <a href={values.otherSite} target="_blank" id="otherLogo"></a>
                    </div>

                    {/* these logos will pop up initially, but disappear as soon as any form component is extended/opened */}
                    <div id="demoLogosDiv">
                        <a className="demoLogos" id="demoLogo1"></a>
                        <a className="demoLogos" id="demoLogo2"></a>
                        <a className="demoLogos" id="demoLogo3"></a>
                    </div>
                </div>


            <div>
                <div style={ { fontWeight:"800", margin:"1rem"} }>
                    <span id="companyName">{values.company} </span> 
                    <span id="jobTitle">{values.jobTitle}</span>
                </div>      
            </div>

            <div style={{width:"100%", flexDirection:"column", display:"flex", justifyContent:"space-between", textAlign:"left"}}>
                <div id="greeting">{values.greeting},</div>
                <div id="letterBody">
                    <br></br>
                    {values.letterBody}
                </div>
                <div>
                    <br></br>
                    <div id="outro">{values.outro},</div>
                    <div>
                        <span id="firstNameOutro">{values.firstName} </span>
                        <span id="lastNameOutro">{values.lastName}</span>
                    </div>
                </div>
            </div>


            </div>


        </>
    )
}
