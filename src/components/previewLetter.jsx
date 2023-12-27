

export default function PreviewLetter({ styleClasses, values }) {

    return (
        <>
            <div className={styleClasses}>        
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
                </div>


            <div>
                <div style={ { fontWeight:"800" } }>
                    <span id="companyName">{values.company} </span> 
                    <span id="jobTitle">{values.jobTitle}</span>
                </div>      
            </div>

            <div style={{width:"100%", height:"100%", flexDirection:"column", display:"flex", justifyContent:"space-between", textAlign:"left"}}>
                <div id="greeting">{values.greeting},</div>
                <div id="letterBody">
                    {values.letterBody}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed diam nisi, viverra non elit convallis, egestas auctor quam. 
                    Integer feugiat sit amet ligula non ullamcorper. Suspendisse ac erat dui. 
                    Ut luctus leo dui, nec facilisis turpis condimentum ac. 
                    Nullam eget enim lobortis, cursus sem nec, molestie lectus. 
                    Fusce eu leo ac dolor malesuada cursus. Morbi eget arcu lacus. 
                    Curabitur in elit eget velit aliquam eleifend id tincidunt lorem. 
                    Nam vestibulum quis lectus eget pulvinar. 
                    Mauris dignissim convallis erat, in faucibus lectus eleifend ac. */}
                </div>
                <div>
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
