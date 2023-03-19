import './style/style.css';
import { useEffect, useState, useRef } from 'react';
import Card from './Components/UI/Card/Index';
import MenuBurger from './assets/icons/menu-burger.png';
import CrossIcon from './assets/icons/cross.png';
import ArrowDown from './assets/icons/arrow-down.png';

// import icons card
import ConceptionImg from './assets/card/conception.png';
import FabricationImg from './assets/card/fabrication.png';
import LivraisonImg from './assets/card/livraison.png';
import DesignImg from './assets/card/design.png';
import ReferencementImg from './assets/card/referencement.png';

function App() {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [isToggle, setIsToggle] = useState(false);
    const [isSrolling, setIsScrolling] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        window.addEventListener('scroll', reveal);
        return () => window.removeEventListener('scroll', reveal);
    }, []);

    useEffect(() => {
        const headerText = document.querySelector('.header-text');
        const text = headerText.textContent;
        headerText.textContent = ' ';

        let i = 0;

        function animateText() {
            if(i < text.length) {
                headerText.textContent += text.charAt(i);
                i++;
            } else {
                setTimeout(() => {
                    headerText.textContent= ' ';
                    i = 0;
                }, 1500);
            }
        }

        setInterval(animateText, 100);
    //eslint disable-next-line
    }, []);

    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        
        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }

        setIsScrolling(true);
    }

    const handleToggle = () => {
        setIsToggle(!isToggle);
        console.log("toggle:", isToggle);
    }

    const handleArrow = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <header>
                <div>
                    <h1>Pearl</h1>
                    {widthScreen > 767 ? (
                        <nav>
                            <a href="mailto:example@gmail.com" target={'_blank'} rel="noreferrer">Contact</a>
                            <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel="noreferrer">Github</a>
                            <a href="https://linkedin.com" target={'_blank'} rel="noreferrer">Linkedin</a>
                        </nav>
                    ) : (
                        <>
                            <div className='nav-phone'>
                                <button onClick={handleToggle}>
                                    <img src={isToggle ? CrossIcon : MenuBurger} alt="La barre de navigation." />
                                </button>

                                {isToggle && (
                                    <nav className='nav-active'>
                                        <a href="mailto:example@gmail.com" target={'_blank'} rel="noreferrer">Contact</a>
                                        <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel="noreferrer">Github</a>
                                        <a href="https://linkedin.com" target={'_blank'} rel="noreferrer">Linkedin</a>
                                    </nav>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className='header-content'>
                    <div className='content'>
                        <h2>Développement & création web</h2>
                        <p className='header-text'>Services de création et développement web</p>
                    </div>
                </div>
            </header>
            <main>
                <section className='about reveal'>
                    <Card img={ConceptionImg} alt= '' title='Conception' para1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.' para2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.'/>
                    <Card img={FabricationImg} alt= '' title='Fabrication' para1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.' para2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.'/>
                    <Card img={LivraisonImg} alt= '' title='Livraison' para1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.' para2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.'/>
                </section>

                <div className='div-separator reveal'></div>

                <section className='about little reveal'>
                    <Card img={DesignImg} alt= '' title='Design' para1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.' para2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.'/>
                    <Card img={ReferencementImg} alt= '' title='Référencement' para1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.' para2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto porro itaque ex asperiores similique.'/>
                </section>

                {widthScreen > 767 && (
                    <button onClick={handleArrow}><img src={ArrowDown} alt="Flèche directionnelle pour naviguer sur le site." className={isSrolling ? 'arrow-down active' : 'arrow-down'}/></button>
                )}
            </main>
            <footer ref={footerRef}>
                <nav className='nav-footer'>
                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Mes créations, tous mes projets open source</title><path fill="#fff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel='noreferrer'>Github</a>
                    </div>

                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Prendre contact avec moi</title><path fill="#fff" d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-4.638 6.251c.99-.576 1.864-1.296 2.638-2.17v2.053c-.667.588-1.391 1.096-2.175 1.527l-.463-1.41zm-4.883 3.06c-.978.125-2.355.188-3.479.188v-1.455c1.032 0 2.327-.056 3.229-.169l.25 1.436zm4.184-1.086l-.055.023c-.879.369-1.831.655-2.865.859l-.25-1.438c.982-.197 1.885-.473 2.714-.833l.456 1.389z"/>
                        </svg>
                        <a href="mailto:example@gmail.com" target={'_blank'} rel='noreferrer'>Contact</a>
                    </div>

                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Mon profil et CV</title><path fill="#fff" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                        <a href="https://linkedin.com" target={'_blank'} rel='noreferrer'>Linkedin</a>
                    </div>
                </nav>
                <p>Pearl Web © 2023 - ∞</p>
            </footer>
        </>
    );
}

export default App;