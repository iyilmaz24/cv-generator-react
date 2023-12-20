

export default function CoverLetter({  styleClasses, children, shown }) {
    
    if(shown){
        return (
            <>
                <div className={styleClasses + " component-form-shown"}>
                    <form>
                        <input placeholder="Greeting"></input>
                        <textarea placeholder="Body"></textarea>
                        <input placeholder="Outro"></input>
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
