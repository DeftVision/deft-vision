import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const scrollToTarget = () => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Slight delay ensures element is in DOM
        setTimeout(scrollToTarget, 50);
    }, [hash]);

    return null;
}
