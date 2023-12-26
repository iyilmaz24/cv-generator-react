

export default function CompanyDetails({  styleClasses, children, shown, functions }) {
    
    if(shown){
        return (
            <>
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="Company"></input>
                        <input placeholder="Position"></input>
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
