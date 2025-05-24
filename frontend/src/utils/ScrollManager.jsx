import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Scroll to ID element after route change
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 50); // slight delay ensures element is in DOM
            }
        } else {
            // No hash? Scroll to top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
