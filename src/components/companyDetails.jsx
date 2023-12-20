

export default function CompanyDetails({  styleClasses, children }) {
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
