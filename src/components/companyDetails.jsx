

export default function CompanyDetails({  styleClasses, children, shown, functions:{ setCompanyName, setJobTitle } }) {

    const companyNameNode = document.getElementById("companyName");
    const jobTitleNode = document.getElementById("jobTitle");
    
    if(shown){
        return (
            <>
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="Company" onFocus={(e) => {setCompanyName(e.target.value); companyNameNode.classList.add("textColorAnim")}}
                        onBlur={() => {companyNameNode.classList.remove("textColorAnim")}} onChange={(e) => {setCompanyName(e.target.value)}}></input>
                        
                        <input placeholder="Position" onFocus={(e) => {setJobTitle(e.target.value); jobTitleNode.classList.add("textColorAnim")}}
                        onBlur={() => {jobTitleNode.classList.remove("textColorAnim")}} onChange={(e) => {setJobTitle(e.target.value)}}></input>
                    </form>
                    <div className="form-title">
                        { children }
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className={styleClasses + " component-form-closed"}>
                    <div className="form-title">
                        Employer Details
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
