

export default function PreviewLetter({ string, styleClasses }) {
    return (
        <>
            <div className={styleClasses}>        
                <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", textAlign:"left"}}>
                    <div>
                        <div>Michael Smith</div>
                        <div>123-456-7890</div>
                        <div>covletter.io@outlook.com</div>
                        <div>Atlanta, Georgia</div>
                        <div>Startup Intern</div>
                    </div>

                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"3px"}}>
                        <div>| - |</div>
                        <div>| - |</div>
                        <div>| - |</div>
                        <div>| - |</div>
                        <div>| - |</div>
                    </div>
                </div>


            <div style={{backgroundColor:"gray", width:"100%", fontWeight:"bold"}}>
                <div>Google</div>    
                <div>Student Researcher</div>            
            </div>

            <div style={{width:"100%", height:"100%", flexDirection:"column", display:"flex", justifyContent:"space-between", textAlign:"left"}}>
                <div>Dear Hiring Manager,</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed diam nisi, viverra non elit convallis, egestas auctor quam. 
                    Integer feugiat sit amet ligula non ullamcorper. Suspendisse ac erat dui. 
                    Ut luctus leo dui, nec facilisis turpis condimentum ac. 
                    Nullam eget enim lobortis, cursus sem nec, molestie lectus. 
                    Fusce eu leo ac dolor malesuada cursus. Morbi eget arcu lacus. 
                    Curabitur in elit eget velit aliquam eleifend id tincidunt lorem. 
                    Nam vestibulum quis lectus eget pulvinar. 
                    Mauris dignissim convallis erat, in faucibus lectus eleifend ac.
                    </div>
                <div>
                    <div>Best Regards,</div>
                    <div>Michael Smith</div>
                </div>
            </div>


            </div>


        </>
    )
}
