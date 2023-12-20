

export default function PersonalDetails({  styleClasses, children, shown }) {

    if (shown) {
        // display the full form + title and button shrunken
        return (
            <>
                <div className={styleClasses}>
                    Personal Details
                    <form>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </form>
                    <div className="form-title">
                        { children }
                    </div>

                </div>
            </>
        )
    }
    else {
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
}
