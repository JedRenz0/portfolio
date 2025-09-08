import banner from '../assets/sky.jpg';


export default function Hero(){
    return(
        <section id="home" className="hero">
            <div className="hero-image">
                <img src={banner} alt="Banner"/>
            </div>
            <div className="hero-text">
                <h1>Hi, I'm Jed</h1>
                <p>Computer Engineering student and aspiring software developer.</p>
                <a href="#projects">See my work</a>
            </div>
        </section>
    );
}