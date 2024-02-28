

export default function AdditionalDetails({ styleClasses, children, shown, functions:{ setLinkedIn, setGitHub, setOtherSite } }) {
    
    if(shown){

        const linkedInNode = document.getElementById("linkedInImg");
        const gitHubNode = document.getElementById("gitHubImg");
        const otherSiteNode = document.getElementById("otherImg");

        return (
            <>  
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="LinkedIn" onChange={(e) => {
                            setLinkedIn(e.target.value); if(e.target.value != ""){linkedInNode.style.display = "flex"}
                            else{linkedInNode.style.display = "none"}}} onFocus={(e) => {
                                setLinkedIn(e.target.value); if(e.target.value != ""){linkedInNode.style.display = "flex"}
                                else{linkedInNode.style.display = "none"}}}></input>

                        <input placeholder="GitHub" onChange={(e) => {
                            setGitHub(e.target.value); if(e.target.value != ""){gitHubNode.style.display = "flex"}
                            else{gitHubNode.style.display = "none"}}} onFocus={(e) => {
                                setGitHub(e.target.value); if(e.target.value != ""){gitHubNode.style.display = "flex"}
                                else{gitHubNode.style.display = "none"}}}></input>

                        <input placeholder="Website/Other" onChange={(e) => {
                            setOtherSite(e.target.value); if(e.target.value != ""){otherSiteNode.style.display = "flex"}
                            else{otherSiteNode.style.display = "none"}}} onFocus={(e) => {
                                setOtherSite(e.target.value); if(e.target.value != ""){otherSiteNode.style.display = "flex"}
                                else{otherSiteNode.style.display = "none"}}}></input>
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
