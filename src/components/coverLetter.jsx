

export default function CoverLetter({  styleClasses, children }) {
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
