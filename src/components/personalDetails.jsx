

export default function PersonalDetails({  styleClasses, children }) {
    return (
        <>
            <div className={styleClasses}>
                <div className="form-title">
                    Personal Details
                    { children }
                </div>

            </div>
        </>
    )
}
