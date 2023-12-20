

export default function AdditionalDetails({  styleClasses, children, shown }) {
    
    if(shown){
        return (
            <>  
                <div className={styleClasses}>
                    Optional Details
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
                        Optional Details
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
