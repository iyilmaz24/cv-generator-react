

export default function AdditionalDetails({ styleClasses, children, shown, functions:{ setLinkedIn, setGitHub, setOtherSite } }) {
    
    if(shown){

        const linkedInNode = document.getElementById("linkedInLogo");
        const gitHubNode = document.getElementById("gitHubLogo");
        const otherSiteNode = document.getElementById("otherLogo");

        return (
            <>  
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="LinkedIn" onChange={(e) => {
                            setLinkedIn(e.target.value); linkedInNode.style.display = "flex"}}></input>
                        <input placeholder="GitHub" onChange={(e) => {
                            setGitHub(e.target.value); gitHubNode.style.display = "flex"}}></input>
                        <input placeholder="Website/Other" onChange={(e) => {
                            setOtherSite(e.target.value); otherSiteNode.style.display = "flex"}}></input>
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
                        Optional Details
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
