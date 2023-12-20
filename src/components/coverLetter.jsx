

export default function CoverLetter({  styleClasses, children, shown }) {
    
    if(shown){
        return (
            <>
                <div className={styleClasses}>
                    Letter Body
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
                        Letter Body
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
