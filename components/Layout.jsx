import Head from "next/head";
import React, { useState } from "react";

// components
import Hamburguer from "./Hamburguer.jsx";
import ParticlesBackground from "./ParticlesBackground.jsx";

const Layout = ({children}) => {

    const [open, setOpen] = useState(false);

    function changeOpen(){
        setOpen(!open);
    }
    console.log(open)
    return(<>

        <ParticlesBackground/>

        <Head>
            <title>Os planetas</title>
            <meta
                name="description"
                content="Generated by create next app"
            />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <div 
            className={open ? '' : 'display-none'} 
            id="overlay"
            onClick={()=>changeOpen()}
        ></div>

        <header>
            <Hamburguer
                open={open}
                changeOpen={changeOpen}
            />



            <div>
                OS PLANETAS
            </div>
        </header>


        <main>
            <div>
                {children}
            </div>
        </main>

        <footer>
        </footer>



        <style jsx>{`

            header{
                position: relative;
                display: flex;
                align-items: center;
                padding: 20px 80px 20px 20px;
                border-bottom: 1px solid;
                border-color: rgb(255,255,255, 0.2);
                
            }

            header div{
                font-family: 'Antonio', sans-serif;
                font-weight: 600;
                font-size: 20px;
                margin-left: 30px;
            }

            #overlay{
                width: 100vw;
                height: 100vh;
                background-color: rgb(0,0,0,0.5);
                position: absolute;
                z-index: 1;
            }

            .display-none{
                display: none;
            }

            main{
                display: flex;
                justify-content: center;
                margin-top: 50px;
            }
            main div{
                padding-left: 40px; 
                padding-right: 40px; 
                /* border: 1px solid red; */
            }


            /* MEDIA QUERY */

            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){
                header{
                    padding-left:  30px ;
                    padding-right: 30px ;
                }
                header div{
                    font-size: 30px;
                }
            }
            
            /* Small screen and laptops */
            @media (min-width: 769px){
                header{
                    padding-left:  40px ;
                    padding-right: 40px ;
                }

                header div{
                    font-size: 38px;
                }
                main{
                    align-items: center;
                    height: 70vh;
                    margin-top: 0px;
                }
                main div{
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    max-width: 750px;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                main div{
                    max-width: 1000px;
                }
            }

            /*Very large screen and TVs */
            @media (min-width: 1201px){

            }


        `}</style>
    </>)
}

export default Layout;