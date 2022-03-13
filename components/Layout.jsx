import Head from "next/head";

// components
import Navbar from "./Navbar.jsx";
import ParticlesBackground from "./ParticlesBackground.jsx";

const Layout = ({children}) => {

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

        <header>
            <div>
                OS PLANETAS
            </div>
            {/* <Navbar/> */}
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
                display: flex;
                justify-content: space-between;
                padding: 20px 80px 20px 80px;
                border-bottom: 1px solid;
                border-color: rgb(255,255,255, 0.2)
            }

            header div{
                font-family: 'Antonio', sans-serif;
                font-size: 2em;
                font-weight: 600;
            }
            main{
                display: flex;
                justify-content: center;
            }
            main div{
                padding-left: 40px; 
                padding-right: 40px; 
                border: 1px solid red;
                /* border: 1px solid red; */
            }


            /* MEDIA QUERY */

            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){

            }
            
            /* Small screen and laptops */
            @media (min-width: 769px) and (max-width: 1024px){

            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                main div{
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
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