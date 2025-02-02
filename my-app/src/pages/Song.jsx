import { useState, useEffect } from 'react';

const Song = () => {
    const [audio, setAudio] = useState(null); 
    const [isPlaying, setIsPlaying] = useState(false); 

    useEffect(() => {
        const newAudio = new Audio('/music/The_Rolling_Stones.mp3');
        setAudio(newAudio);

        return () => {
            newAudio.pause(); 
        };
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause(); 
        } else {
            audio.play(); 
        }
        setIsPlaying(!isPlaying); 
    };

    return (
        <div>
            <button className='text-white text-2xl' onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default Song;
