import { createContext, useContext, useEffect, useState } from 'react';
import Constant from '../data/constant';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // State
    const [newUrl, setNewUrl] = useState([]);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    // Actions
    useEffect(() => {
        const items = localStorage.getItem('items');
        if (items) {
            setNewUrl(JSON.parse(items));
        }
    }, []);

    const postUrl = async (formattedUrl) => {
        try {
            setLoading(true);
            await axios
                .post(
                    `${Constant.url}/create`,
                    {
                        url: formattedUrl,
                        domain: 'tinyurl.com',
                        expires_at: null,
                        description: 'string',
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                        },
                    },
                )
                .then((res) => {
                    setLoading(false);

                    const historyItem = {
                        originalUrl: url,
                        shortUrl: res.data['data']['tiny_url'],
                        createdAt: res.data['data']['created_at'],
                    };

                    setNewUrl((prevData) => {
                        const data = [historyItem, ...prevData];

                        localStorage.setItem('items', JSON.stringify(data)); // store in local storage
                        return data;
                    });
                });
        } catch (e) {
            console.log('error:', e);
            setLoading(false);
        }
    };

    const clearHistory = () => {
        if (history.length > 0) {
            setNewUrl([]);
            localStorage.removeItem('items');
        }
    };

    return (
        <AppContext.Provider value={{ newUrl, url, loading, setUrl, postUrl, clearHistory }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
export const useUrl = () => {
    return useContext(AppContext);
};
