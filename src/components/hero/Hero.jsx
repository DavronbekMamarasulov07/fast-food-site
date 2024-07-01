import "./Hero.css"
import hero_image from "../../images/hero.png"

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero_content">
                <div className="hero_wrapper">
                    <h2>
                        It's not just Food, it's an Experience 
                    </h2>
                    <p>
                        Order Your Favourite food & enjoy your day
                    </p>
                </div>
                <div className="hero_bg_image">
                    <img src={hero_image} alt="hero" />
                </div>
            </div>
        </div>
          
    </section>
  )
}

export default Hero
