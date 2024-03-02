import '../styles/homePage.css'

function HomePage( { setHomePage } ) {



    return(<>

        <h1 id='homeTitle'>CovLetter.io</h1>

        <button id='homeButton' onClick={() => setHomePage(false)}>
            Get Started
        </button>
    
    </>)

}


export default HomePage;