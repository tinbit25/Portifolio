import React, { useEffect, useState } from 'react';
import ppicture from "../assets/images/mypic-removebg.png"; 

const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [noteLoaded, setNoteLoaded] = useState(false);

    useEffect(() => {
        const imageTimer = setTimeout(() => {
            setImageLoaded(true);
        }, 200);

        const noteTimer = setTimeout(() => {
            setNoteLoaded(true);
        }, 500);

        return () => {
            clearTimeout(imageTimer);
            clearTimeout(noteTimer);
        };
    }, []);

    return (
        <div className="home flex flex-col md:flex-row h-screen p-5 md:p-10 text-white">
            <div className="flex-1 mb-5 md:mb-0">
                <div className={`note transition-all duration-700 ease-in-out transform ${noteLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-3 fascinate-inline-regular">Welcome to My Portfolio</h2>
                    <p className="text-xl md:text-4xl gowun-batang-regular">
                        I'm a passionate web developer focused on creating impactful digital solutions.
                        With skills in both front-end and back-end development. Let's connect and explore together!
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={ppicture}
                    alt="Home"
                    className={`myimg h-auto transition-all duration-700 ease-in-out transform ${imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
                />
            </div>
        </div>
    );
};

export default Home;