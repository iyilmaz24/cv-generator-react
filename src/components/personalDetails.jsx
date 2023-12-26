

export default function PersonalDetails( { styleClasses, functions:{setFirstName, setLastName, setPhoneNum, setEmail, setLocation, setCurrTitle}, children, shown } ) {

    const firstNameNode = document.getElementById("firstName");
    const lastNameNode = document.getElementById("lastName");
    const phoneNumNode = document.getElementById("phoneNum");
    const emailNode = document.getElementById("email");
    const locationNode = document.getElementById("location");   
    const currTitleNode = document.getElementById("currTitle");
    const outroFirstNameNode = document.getElementById("firstNameOutro");
    const outroLastNameNode = document.getElementById("lastNameOutro");

    if (shown) {
        return (
            <>
                <div id="personal-details-form" className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="First Name" onFocus={(event) => {setFirstName(event.target.value); firstNameNode.classList.add("textColorAnim"); outroFirstNameNode.classList.add("textColorAnim")}} 
                        onBlur={() => {firstNameNode.classList.remove("textColorAnim"); outroFirstNameNode.classList.remove("textColorAnim")}} onChange={(event) => setFirstName(event.target.value)}></input>

                        <input placeholder="Last Name" onFocus={(event) => {setLastName(event.target.value); lastNameNode.classList.add("textColorAnim"); outroLastNameNode.classList.add("textColorAnim")}} 
                        onBlur={() => {lastNameNode.classList.remove("textColorAnim"); outroLastNameNode.classList.remove("textColorAnim")}} onChange={(event) => setLastName(event.target.value)}></input>

                        <input placeholder="Phone #"  onFocus={(event) => {setPhoneNum(event.target.value); phoneNumNode.classList.add("textColorAnim")}} 
                        onBlur={() => {phoneNumNode.classList.remove("textColorAnim")}} onChange={(event) => setPhoneNum(event.target.value)}></input>

                        <input placeholder ="Email" onFocus={(event) => {setEmail(event.target.value); emailNode.classList.add("textColorAnim")}} 
                        onBlur={() => {emailNode.classList.remove("textColorAnim")}} onChange={(event) => setEmail(event.target.value)}></input>

                        <input placeholder="City, State" onFocus={(event) => {setLocation(event.target.value); locationNode.classList.add("textColorAnim")}} 
                        onBlur={() => {locationNode.classList.remove("textColorAnim")}} onChange={(event) => setLocation(event.target.value)}></input>

                        <input placeholder="Current Title" onFocus={(event) => {setCurrTitle(event.target.value); currTitleNode.classList.add("textColorAnim")}} 
                        onBlur={() => {currTitleNode.classList.remove("textColorAnim")}} onChange={(event) => {setCurrTitle(event.target.value);}}></input>
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
