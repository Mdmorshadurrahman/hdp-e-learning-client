import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen'>
            <div className='w-4/6 mx-auto'>
                <img src="https://i.ibb.co/q0v5YvJ/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-appli.jpg" alt="about us image" />
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-4/6 mx-auto pl-60 mb-20'>
                <h1 className='text-4xl py-5 font-semibold leading-relaxed text-black'>
                    Want to know More About US? </h1>
                <p className='text-lg leading-relaxed font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem, quaerat ullam aut laudantium id libero dignissimos aperiam voluptas suscipit nam. Placeat, repudiandae recusandae nulla numquam dolorum ad maxime velit.
                </p>
            </div>
        </div>
    );
};

export default About;