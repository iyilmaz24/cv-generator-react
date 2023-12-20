

export default function AdditionalDetails({  styleClasses, children, shown }) {
    if(shown){
        return (
            <>  
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="LinkedIn"></input>
                        <input placeholder="GitHub"></input>
                        <input placeholder="Website/Other"></input>
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
