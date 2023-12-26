

export default function PersonalDetails({  styleClasses, children, shown, functions }) {

    const firstNameNode = document.getElementById("firstName");
    const lastNameNode = document.getElementById("lastName");
    const phoneNumNode = document.getElementById("phoneNum");
    const emailNode = document.getElementById("email");
    const locationNode = document.getElementById("location");
    const currTitleNode = document.getElementById("currTitle");

    if (shown) {
        return (
            <>
                <div id="personal-details-form" className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="First Name" onFocus={(event) => {functions.setFirstName(event.target.value); firstNameNode.classList.add("textColorAnim")}} 
                        onBlur={() => {firstNameNode.classList.remove("textColorAnim")}} onChange={(event) => functions.setFirstName(event.target.value)}></input>

                        <input placeholder="Last Name" onFocus={(event) => {functions.setLastName(event.target.value); lastNameNode.classList.add("textColorAnim")}} 
                        onBlur={() => {lastNameNode.classList.remove("textColorAnim")}} onChange={(event) => functions.setLastName(event.target.value)}></input>

                        <input placeholder="Phone #"  onFocus={(event) => {functions.setPhoneNum(event.target.value); phoneNumNode.classList.add("textColorAnim")}} 
                        onBlur={() => {phoneNumNode.classList.remove("textColorAnim")}} onChange={(event) => functions.setPhoneNum(event.target.value)}></input>

                        <input placeholder ="Email" onFocus={(event) => {functions.setEmail(event.target.value); emailNode.classList.add("textColorAnim")}} 
                        onBlur={() => {emailNode.classList.remove("textColorAnim")}} onChange={(event) => functions.setEmail(event.target.value)}></input>

                        <input placeholder="City, State" onFocus={(event) => {functions.setLocation(event.target.value); locationNode.classList.add("textColorAnim")}} 
                        onBlur={() => {locationNode.classList.remove("textColorAnim")}} onChange={(event) => functions.setLocation(event.target.value)}></input>

                        <input placeholder="Current Title" onFocus={(event) => {functions.setCurrTitle(event.target.value); currTitleNode.classList.add("textColorAnim")}} 
                        onBlur={() => {currTitleNode.classList.remove("textColorAnim")}} onChange={(event) => {functions.setCurrTitle(event.target.value);}}></input>
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
