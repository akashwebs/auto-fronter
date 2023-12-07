import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

const VideoScreen = () => {
    const playerRef = useRef(null);
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    

    

    return (
        <div ref={playerRef} className={`w-full h-full rounded-[10px] overflow-hidden relative bg-black`}>
            <ReactPlayer
                url={"https://www.youtube.com/embed/umpV7KTgtik"}
                // muted={true}
                controls={false}
                playing={true}
                autoPlay={true}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoScreen;