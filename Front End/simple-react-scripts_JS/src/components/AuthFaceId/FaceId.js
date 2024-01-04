import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


const FaceId = () => {

    const videoRef = useRef(null);
    const [result, setResult] = useState('');

    useEffect(() => {
        const openCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        openCamera();

        return () => {
            // Cleanup: Stop the camera stream when the component is unmounted
            const stream = videoRef.current?.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, [videoRef]);

    const recognizeFace = async () => {
        // Ensure videoRef.current is a valid HTMLVideoElement
        if (videoRef.current instanceof HTMLVideoElement) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // Set canvas dimensions to match video dimensions
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;

            // Draw video frame onto the canvas
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

            // Convert canvas content to base64 data URL
            const imageData = canvas.toDataURL('image/png');

            try {
                const response = await axios.post('/face-recognition', { image: imageData });
                setResult(response.data);
            } catch (error) {
                console.error('Error recognizing face:', error);
            }
        } else {
            console.error('videoRef.current is not a valid HTMLVideoElement');
        }
    };

    return (
        <div>
        {/* <video ref={videoRef} width="640" height="480" autoPlay></video> */}
        <button onClick={recognizeFace}>Recognize Face</button>
        {result && (
          <div>
            <h2>Face Recognition Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    );
}

export default FaceId


