import React, { useEffect, useState } from 'react';
import ppicture from "../assets/images/photo_2024-09-06_11-12-26.jpg"; 

const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [noteLoaded, setNoteLoaded] = useState(false);

    useEffect(() => {
        const imageTimer = setTimeout(() => {
            setImageLoaded(true);
        }, 200); // Delay for the image

        const noteTimer = setTimeout(() => {
            setNoteLoaded(true);
        }, 500); // Delay for the note

        return () => {
            clearTimeout(imageTimer);
            clearTimeout(noteTimer);
        };
    }, []);

    return (
        <div className="home flex h-screen">
            <div className="flex flex-row p-10 text-white">
                <div>
                    <div className={`note transition-all duration-700 ease-in-out transform ${noteLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h2 className="text-5xl font-semibold mb-3">Welcome to My Portfolio</h2>
                        <br></br>
                        <br></br>
                        <p className="text-4xl">
                            I'm a passionate web developer focused on creating impactful digital solutions.
                            With skills in both front-end and back-end developmen. Let's connect and explore together!
                        </p>
                    </div>
                </div>
                {/* Slide-in image */}
                <img
                    src={ppicture}
                    alt="Home"
                    className={`myimg h-auto transition-all duration-700 ease-in-out transform ${imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                />
            </div>
        </div>
    );
};

export default Home;
