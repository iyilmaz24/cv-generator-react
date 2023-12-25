

export default function PersonalDetails({  styleClasses, children, shown, functions }) {

    if (shown) {
        return (
            <>
                <div id="personal-details-form" className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="First Name" onFocus={   (event.target.value == "") ? 
                        // right now if the user focuses on the default input, it will disappear which is good
                            // but on the false for the ternary operator (?) we should return false, null or 
                            // something similar rather than invalidly calling the useState setter, it makes the app crash
                            functions.setFirstName("") : functions.setFirstName
                        } 
                        onChange={(event) => functions.setFirstName(event.target.value)}></input>
                        <input placeholder="Last Name" onChange={(event) => functions.setLastName(event.target.value)}></input>
                        <input placeholder="Phone #" onChange={(event) => functions.setPhoneNum(event.target.value)}></input>
                        <input placeholder ="Email" onChange={(event) => functions.setEmail(event.target.value)}></input>
                        <input placeholder="City, State" onChange={(event) => functions.setLocation(event.target.value)}></input>
                        <input placeholder="Current Title" onChange={(event) => functions.setCurrTitle(event.target.value)}></input>
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
