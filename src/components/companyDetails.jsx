

export default function CompanyDetails({  styleClasses, children, shown }) {
    
    if(shown){
        return (
            <>
                <div className={styleClasses}>
                    Employer Details
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
                <div className={styleClasses}>
                    <div className="form-title">
                        Employer Details
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
