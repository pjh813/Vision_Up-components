import React, { useState, useRef } from 'react';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleCircleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div
                style={{
                    width: '270px',
                    height: '270px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    backgroundColor: 'gray',
                }}
                onClick={handleCircleClick}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="selected"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                )}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '23px',
                        fontWeight: 'bold',
                    }}
                >
                    클릭하세요
                </div>
            </div>
            <div className="wholebox3">
                <textarea className="Text-area-a3"></textarea>
                <textarea className="Text-area-c3"></textarea>
            </div>
        </div>
        
    );
}

export default ImageUpload;
