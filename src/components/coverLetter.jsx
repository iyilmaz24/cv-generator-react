

export default function CoverLetter({  styleClasses, children, shown, functions:{ setGreeting, setOutro, setLetterBody } }) {
    
    if(shown){

        const greetingNode = document.getElementById("greeting");
        const outroNode = document.getElementById("outro");
        const letterBodyNode = document.getElementById("letterBody");

        return (
            <>
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="Greeting" onFocus={(e) => {setGreeting(e.target.value); greetingNode.classList.add("textColorAnim")}}
                        onBlur={() => {greetingNode.classList.remove("textColorAnim")}} onChange={(e) => {setGreeting(e.target.value)}}></input>

                        <textarea placeholder="Body" onFocus={(e) => {setLetterBody(e.target.value); letterBodyNode.classList.add("textColorAnim")}}
                        onBlur={() => {letterBodyNode.classList.remove("textColorAnim")}} onChange={(e) => {setLetterBody(e.target.value)}}></textarea>

                        <input placeholder="Outro" onFocus={(e) => {setOutro(e.target.value); outroNode.classList.add("textColorAnim")}}
                        onBlur={() => {outroNode.classList.remove("textColorAnim")}} onChange={(e) => {setOutro(e.target.value)}}></input>
                    </form>
                    <div className="form-title">
                        { children }
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className={styleClasses + " component-form-closed"}>
                    <div className="form-title">
                        Letter Body
                        { children }
                    </div>
                </div>
            </>
        )
    }
}
