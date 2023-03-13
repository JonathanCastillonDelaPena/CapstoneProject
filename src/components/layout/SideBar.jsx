import React from "react";
import { Link } from "react-router-dom";


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <i className="bi bi-house-door custom-text-secondary"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Create',
        path: '/',
        icon: <i className="bi bi-file-earmark-plus"></i>,
        cName: 'nav-text'
    },
    {
        title: 'NewsFeed',
        path: '/',
        icon: <i className="bi bi-newspaper"></i>,
        cName: 'nav-text'
    }
    
];