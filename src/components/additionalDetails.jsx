

export default function AdditionalDetails({  styleClasses, children }) {
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
