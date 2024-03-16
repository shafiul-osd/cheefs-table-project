import React from 'react';

function Banner() {
  return (
    <div className='max-w-[1440px] mx-auto my-5'>
      <div className="hero min-h-[70vh] w-[90%] mx-auto rounded-2xl overflow-hidden" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-10/12">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="flex gap-3 justify-center items-center">
              <button className="btn btn-success rounded-2xl text-white">Success</button>
              <button className="btn btn-outline btn-accent rounded-2xl text-white">Accent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
