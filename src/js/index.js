// Interceptor de errores de WebSocket
(function() {
    const originalConsoleError = console.error;
    console.error = function(message, ...args) {
        if (typeof message === 'string' && message.includes('WebSocket connection to')) {
            // No mostrar el mensaje de error de WebSocket en la consola
            return;
        }
        originalConsoleError.apply(console, [message, ...args]);
    };
})();

//import react into the bundle
import React from 'react'
import { createRoot } from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//initialize root
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout />)
