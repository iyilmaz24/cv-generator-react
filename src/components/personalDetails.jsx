

export default function PersonalDetails({  styleClasses, children, shown, functions }) {

    if (shown) {
        return (
            <>
                <div id="personal-details-form" className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="First Name" onFocus={(event) => functions.setFirstName(event.target.value)} onChange={(event) => functions.setFirstName(event.target.value)}></input>
                        <input placeholder="Last Name" onFocus={(event) => functions.setLastName(event.target.value)} onChange={(event) => functions.setLastName(event.target.value)}></input>
                        <input placeholder="Phone #"  onFocus={(event) => functions.setPhoneNum(event.target.value)} onChange={(event) => functions.setPhoneNum(event.target.value)}></input>
                        <input placeholder ="Email" onFocus={(event) => functions.setEmail(event.target.value)} onChange={(event) => functions.setEmail(event.target.value)}></input>
                        <input placeholder="City, State" onFocus={(event) => functions.setLocation(event.target.value)} onChange={(event) => functions.setLocation(event.target.value)}></input>
                        <input placeholder="Current Title" onFocus={(event) => {functions.setCurrTitle(event.target.value); document.getElementById("currTitle").classList.add("textColorAnim")}} 
                        onBlur={() => {document.getElementById("currTitle").classList.remove("textColorAnim")}} onChange={(event) => {functions.setCurrTitle(event.target.value);}}></input>

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
