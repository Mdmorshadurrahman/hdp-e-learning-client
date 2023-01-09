import React from 'react';

const Home = () => {
    return (
        <div className='min-h-screen' >
            <div className="carousel w-4/6 mx-auto h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/4gVNgXd/carosul1.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/b3ZLnVh/card3.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/2FnZHMb/learning-education-ideas-insight-intelligence-study-concept.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center py-2 gap-2">
                <a href="#item1" className="btn btn-xs hover:bg-yellow-400">1</a>
                <a href="#item2" className="btn btn-xs hover:bg-yellow-400">2</a>
                <a href="#item3" className="btn btn-xs hover:bg-yellow-400">3</a>
            </div>
            <div className='w-4/6 mx-auto pl-60 py-20 '>
                <h1 className='text-4xl  font-light leading-relaxed text-gray-500'>
                    WELCOME to our <span className='text-black font-semibold'>e-learning </span> page!!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam unde illum recusandae, dolor saepe, ex fuga, itaque velit ullam aspernatur obcaecati nesciunt delectus odit. Amet illum nulla aliquam laborum maiores!
                </h1>
            </div>
            <div className=' w-4/6 mx-auto '>
                <div className='bg-yellow-400 text-center text-white text-4xl font-semibold py-4'>
                    <h1>
                        We are ready to boost your skills <br /> Software || Hardware
                    </h1>
                </div>
                <div className='flex'>
                    <div>
                        <img className='h-full p-5' src="https://i.ibb.co/TW5262Z/computer-motherboard-with-dolls.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-full p-5' src="https://i.ibb.co/R9YtzJN/web-design-internet-website-responsive-software-concept.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-4/6 mx-auto pl-60 py-20 '>
                <h1 className='text-xl font-light '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam unde illum recusandae, dolor saepe, ex fuga, itaque velit ullam aspernatur obcaecati nesciunt delectus odit. Amet illum nulla aliquam laborum maiores!
                </h1>
            </div>
        </div>
    );
};

export default Home;
