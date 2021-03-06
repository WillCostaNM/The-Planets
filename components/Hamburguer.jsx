import React, { useState } from "react";

import Navbar from "./Navbar.jsx";

const Hamburguer = ({open, changeOpen}) => {
    
    
    return(<>
        
        <div 
            id="hamburguer"
            onClick={()=>changeOpen()}
            className={open ? 'hamburguer-rotate' : ''}
        >
            <span className="hamburguer-line"></span>
        </div>
        
        <Navbar
            open={open}
            changeOpen={changeOpen}
        />

        
        <style jsx>{`
            
            #hamburguer{
                position: relative;
                z-index: 2;
                width: 24px;
                height: 23px;
                display: flex;
                flex-direction: column;
                justify-content: center;

            }

            /* Linhas Hamburguer */
            .hamburguer-line{
                position: relative;
                display: block;
                background-color: #fff;
                height: 2px;
                transition: 0.3s ease-in-out;

            }


            .hamburguer-line::after, 
            .hamburguer-line::before{
                background: #fff;
                display: block;
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                transition: 0.3s ease-in-out;

            }

            .hamburguer-line::after{
                bottom: -7.1px;
            }

            .hamburguer-line::before{
                top: -7.1px;
            }




            .hamburguer-rotate .hamburguer-line{
                transform: rotate(45deg);
            }
            
            .hamburguer-rotate .hamburguer-line::before{
                transform: rotate(90deg);
                top: 0px;
            }
            .hamburguer-rotate .hamburguer-line::after{
                transform: rotate(90deg);
                bottom: 0px;
            }
        
        `}</style>
    
    </>)
}

export default Hamburguer;