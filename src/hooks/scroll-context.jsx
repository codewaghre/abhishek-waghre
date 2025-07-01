// ScrollContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -50% 0px",
                threshold: 0.2,
            }
        );


        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <ScrollContext.Provider value={{ activeSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);
