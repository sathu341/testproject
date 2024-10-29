import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [voices, setVoices] = useState([]);

    // Load voices when the component mounts
    React.useEffect(() => {
        const handleVoicesChanged = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
        handleVoicesChanged();
    }, []);

    const handleSpeak = () => {
        if (!text) return;

        const utterance = new SpeechSynthesisUtterance(text);

        // If a voice is selected, set it
        if (selectedVoice) {
            utterance.voice = voices.find(voice => voice.name === selectedVoice);
        }

        // Speak the text
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Text to Speech</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
                style={{ width: '100%', height: '100px', marginBottom: '10px' }}
            />
            <div>
                <select
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    value={selectedVoice || ''}
                    style={{ width: '100%', marginBottom: '10px' }}
                >
                    <option value="">Select Voice</option>
                    {voices.map((voice, index) => (
                        <option key={index} value={voice.name}>
                            {voice.name} ({voice.lang})
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSpeak} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Speak
            </button>
        </div>
    );
};

export default TextToSpeech;
