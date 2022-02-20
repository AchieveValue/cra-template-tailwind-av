// System imports

// Packages imports
import { Link } from "react-router-dom";

// Custom Components Imports


const Error404Page = () => {
    // <Variables Definition>

    // Global states

    // </Variables Definition>



    // <UseEffects>

    // </UseEffects>



    // <Main Block Return>

    return (
        <div className="w-screen h-screen w-max-screen flex flex-col justify-center items-center poppins">
            <h1 className="text-primary text-2xl font-bold text-center">The page was not found</h1>
            <h4 className="text-secondary font-regular text-lg text-center mt-2">Maybe returning to the <Link to='/' className='text-primary hover:text-primaryAnimate duration-300'>landing page</Link> might help</h4>
        </div>
    )

    // </Main Block Return>
}

export default Error404Page;