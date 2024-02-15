import React from 'react';
import AdminNavBar from '../components/AdminNavBar';
import AddProduct from './AddProduct';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography } from "@mui/material";

import '../assets/css/Contact.css'


const AdminHome = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <AdminNavBar />
        </div>
    )
};

export default AdminHome;
