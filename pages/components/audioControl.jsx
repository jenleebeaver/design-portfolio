import React, { useEffect } from 'react';
import Tooltip from './toolTip.jsx';

export default function AudioControl() {
    let audio = React.useRef(null);
    let playButton = React.useRef(null);

    const [isPlaying, setIsPlaying] = React.useState(false);

    function handlePlay(){ 
        const audioContext = new AudioContext();
        const audioElement = audio.current.querySelector("audio"); 

        // check if context is in suspended state (autoplay policy for accessibility)
        if (audioContext.state === "suspended"){
            audioContext.resume();
        }

            //Play or pause track depending on state 
            if (!isPlaying){
                audioElement.play();
                setIsPlaying(true);
            } else {
                audioElement.pause();
                setIsPlaying(false)
            }
    }

    useEffect(() => {
        // creating instance of audio context that gives us access to features and functions of webAudio API
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();

        //get audio element
        const audioElement = audio.current.querySelector("audio"); 

        //selecting our play button
        const playElement = playButton.current.querySelector("button");
    }, []);


    return(
        <div ref={audio} className="audio-player">
            <audio src="./audio/debussy.mp3"></audio>
            <div ref={playButton} onClick={handlePlay}>
                <Tooltip text="Press play to listen to Prelude to the Afternoon of a Faun by Debussy.">
                    <button data-playing="false" role="switch" aria-checked="false">
                        <span>
                        ⏯
                        </span>
                    </button>
                </Tooltip>
            </div>
        </div>
    )
};