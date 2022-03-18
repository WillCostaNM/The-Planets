import Link from 'next/link';


const Navbar = ({open, changeOpen}) => {

    console.log(open)
    return (<>
        
        <ul>
            <li>
                <div id="close-icon">
                    
                </div>
            </li>
            <li >
                <Link href="/">
                    <span onClick={()=>changeOpen()}>Mercúrio</span>
                </Link>
            </li>
            <li>
                <Link href="/venus">
                    <span onClick={()=>changeOpen()}>Vênus</span>
                </Link>
            </li>
            <li>
                <Link href="/terra">
                    <span onClick={()=>changeOpen()}>Terra</span>
                </Link>
            </li>
            <li>
                <Link href="/marte">
                    <span onClick={()=>changeOpen()}>Marte</span>
                </Link>
            </li>
            <li>
                Júpiter
            </li>
            <li>
                Saturno
            </li>
            <li>
                Urano
            </li>
            <li>
                Netuno
            </li>
        </ul>

        <style jsx>{`
            :global(body){
                overflow: ${open? 'hidden' : ''}
            }
            
            ul{
                padding-left: 20px;
                top: 0;
                background-color: rgb(13, 13, 68);
                height: 100vh;
                width: 50vw;
                position: absolute;
                z-index: 1;
                left: 0;
                font-size: 0.8em;
                font-weight: 700;
                letter-spacing: 1.2px;
                color: rgb(255, 255, 255, 0.6);
                transform: ${open ? 'translateX(0)' : 'translateX(-100%)'};
                transition: transform 0.3s ease-in-out;
            }
            
            #close-icon{
                height: 68px;
                width: 100%;
            }

            ul li{
                text-transform: uppercase;
                padding-bottom: 20px;
            }


            @media (min-width: 769px){

            }
        `}</style>
    </>)
}

export default Navbar;