import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';
import QRCode from 'react-qr-code';

const Result_URL = ({ inputValue }) => {
    // console.log(inputValue);
    const [shortLink, setShortLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // console.log(shortLink);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
                long_url: inputValue,
            }, {
                headers: {
                    'Authorization': 'd168f5aeeb39b4eebd165513cc017fa2e69f72a8', // Replace with your Bitly access token
                },
            });
            setShortLink(response.data.link);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    if (loading) {
        return <p className="noData">Loading...</p>;
    }
    if (error) {
        return <p className="noData">Something went wrong :(</p>;
    }

    return (
        <div className=' '>
            <p>{shortLink}</p>
            
                <CopyToClipboard
                    text={shortLink}
                    onCopy={() => setCopied(true)}
                >
                    <button
                        className={`relative px-10 py-3 font-medium text-white transition duration-300 ${copied ? 'bg-green-500' : 'bg-red-500'
                            }`}
                        style={{ borderRadius: '4px' }}
                    >
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                            <svg
                                viewBox="0 0 487 487"
                                className="w-auto h-full opacity-100 object-stretch"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                    fill="#FFF"
                                    fillRule="nonzero"
                                    fillOpacity=".1"
                                />
                            </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg
                                viewBox="0 0 487 487"
                                className="object-cover w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8 0.3 0H487v486.7z"
                                    fill="#FFF"
                                    fillRule="nonzero"
                                    fillOpacity=".1"
                                />
                            </svg>
                        </span>
                        <span className="relative">{copied ? 'Link Copied' : 'Copy Link'}</span>
                    </button>
                </CopyToClipboard>
            
            
                <p>QR Code Generator</p>
            
            {shortLink.length > 0 && (
            <div className=' flex items-center text-center justify-center'>
                <QRCode  value={shortLink} />
            </div>
            )} 


        </div>
    );
};

export default Result_URL;
