

export default function PersonalDetails({  styleClasses, children, shown }) {

    if (shown) {
        return (
            <>
                <div id="personal-details-form" className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                        <input placeholder="Phone #"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="City, State"></input>
                        <input placeholder="Current Title"></input>
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
                <div className={styleClasses + " component-form-closed"}>
                    <div className="form-title">
                        Personal Details
                        { children }
                    </div>

                </div>
            </>
        )
    }
}
