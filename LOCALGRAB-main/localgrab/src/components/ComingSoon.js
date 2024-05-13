import React from 'react'

function ComingSoon() {
  return (
    <>
        <video
            className="bg-video"
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
        >
            <source src="../videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="masthead">
            <div className="masthead-content text-white">
            <div className="container-fluid px-4 px-lg-0">
                <h1 className="fst-italic lh-1 mb-4">More services.. Coming Soon</h1>
                <p className="mb-5">
                We're working hard to finish the development of this site!! <br />{" "}
                Some more services will be added in the future!
                </p>
            </div>
            </div>
        </div>
        </>
  )
}

export default ComingSoon