import './Hero.css'
import amazon from '../Assets/amazon.png'
import flipkart from '../Assets/flipkart.png'
import shoe from '../Assets/shoe_image.png'

const Hero = () => {
  return (
<>
<div className="main">
<div className="hero">
   <div className="component1">

    <div className="section1">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    </div>

    <div className="section2">
    <h6>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h6>
    </div>
    <div className="section3">
    <button className='btn1'>Shop Now</button>
        <button className='btn2'>Category</button>
    </div>
    <div className="section4">
        <h6>Also Available On</h6>
       <div className="brandLogo">
        <img src={flipkart} alt="" />
        <img src={amazon} alt="" />
        </div>
    </div>
   </div>
   <div className="component2">
    <img src={shoe} alt="" />
    </div>
</div>
</div>
</>
    )
}

export default Hero