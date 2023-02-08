import React, { useState } from 'react';
import AllSection from '../Tabs/AllSection';
import Chemistry from '../Tabs/Chemistry';
import Maths from '../Tabs/Maths';
import Physics from '../Tabs/Physics';

const Navbar = () => {
    const [buttonText, setButtonText] = useState("")

    if (buttonText === "All Sections") {
        return <AllSection></AllSection>
    }
    if (buttonText === "PHYSICS") {
        return <Physics></Physics>
    }
    if (buttonText === "CHEMISTRY") {
        return <Chemistry></Chemistry>
    }
    if (buttonText === "MATHS") {
        return <Maths></Maths>
    }

    return (
        <div>
            <div className=''>
                <button
                    onClick={(e) => setButtonText(e.target.innerText)}
                    className='mx-4'
                >All Sections</button>
                <button
                    onClick={(e) => setButtonText(e.target.innerText)}
                    className='mx-4'
                >PHYSICS</button>
                <button
                    onClick={(e) => setButtonText(e.target.innerText)}
                    className='mx-4'
                >CHEMISTRY</button>
                <button
                    onClick={(e) => setButtonText(e.target.innerText)}
                    className='mx-4'
                >MATHS</button>
            </div>
        </div>
    );
};

export default Navbar;