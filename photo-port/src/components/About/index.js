import React from 'react';
import coverImage from "../...assets/cover/cover-image.jpg"

function About () {
    return (
        <section className="my-5">
            <h1 id="about">Whomst Am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
            <div className="my-2">
                <p>
                    This is a placeholder waiting for it's chance to shine in the repo
                </p>
            </div>
        </section>
    );
}

export default About;