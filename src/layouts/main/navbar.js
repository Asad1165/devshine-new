'use client';
import React, { useState } from 'react';
import '../main/scss/navbar.scss';
import { Icon } from '@iconify/react';

const navItems = [
    { id: 'projects', icon: 'mdi:paperclip', label: 'Projects' },
    { id: 'process', icon: 'mdi:key-outline', label: 'Process' },
    { id: 'chat', icon: 'mdi:chat-outline', label: 'Chat' }
];

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [lang, setLang] = useState('EN');
    return (
        <div className="navbar">
            <div className="left">
                <div className="brand">DePart</div>
                <div className="divider" />
            </div>
            <div className="icons">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`icon-item ${activeItem === item.id ? 'active' : ''}`}
                        onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    >
                        <Icon icon={item.icon} width="18" />
                        <span className="icon-label">{item.label}</span>
                    </div>
                ))}
                <div className="langToggle">
                    <div className="toggle-bg">
                        <div className={`toggle-thumb ${lang === 'EN' ? 'left' : 'right'}`} />
                        <div
                            className={`toggle-label ${lang === 'EN' ? 'active' : ''}`}
                            onClick={() => setLang('EN')}
                        >
                            EN
                        </div>
                        <div
                            className={`toggle-label ${lang === 'ES' ? 'active' : ''}`}
                            onClick={() => setLang('ES')}
                        >
                            ES
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
