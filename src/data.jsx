import { DestinationNav, NavCrew, TechnologyNav } from './Navbar';
//import GestureRecognizer, {swipeDirection} from 'react-native-swipe-gestures';
import bgImageMobile from './assets/assets/home/background-home-mobile.jpg';
import bgImageTablet from './assets/assets/home/background-home-tablet.jpg';
import bgImageDesktop from './assets/assets/home/background-home-desktop.jpg';
import desImageMobile from './assets/assets/destination/background-destination-mobile.jpg';
import desImageTablet from './assets/assets/destination/background-destination-tablet.jpg';
import desImageDesktop from './assets/assets/destination/background-destination-desktop.jpg';
import crewImageMobile from './assets/assets/crew/background-crew-mobile.jpg';
import crewImageTablet from './assets/assets/crew/background-crew-tablet.jpg';
import crewImageDesktop from './assets/assets/crew/background-crew-desktop.jpg';
import techImageMobile from './assets/assets/technology/background-technology-mobile.jpg';
import techImageTablet from './assets/assets/technology/background-technology-tablet.jpg';
import techImageDesktop from './assets/assets/technology/background-technology-desktop.jpg';

export const Destination = ({data}) =>{
  return(
    <>
      <h5 className='page-title'>01 <strong>Pick your destination</strong></h5>
      <div className="desination-container">
        <div className='text-wrapper'>        
          <img src={data.image} alt="planet" />
        </div>

        <div className='planet-desc-wrapper'> 
          <DestinationNav />
          <div className="banner">
            <h1>{data.name}</h1>
              <p>{data.details}</p>
          </div>
          <div className="details">
            <div>
              <h5>Avg. distance</h5>
              <h1>{data.distance}</h1>
            </div>
            <div>
              <h5>Est. travel time</h5>
              <h1>{data.time}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const CrewData = ({data}) =>{
  return(
    <>
      <h5 className='page-title'>02<strong> Meet your crew</strong></h5>
      <div className="crew-container">
        <img src={data.image} alt="planet" />
        <div className='crew-details'>
          <NavCrew />
          <h3>{data.job}</h3>
          <h1>{data.name}</h1>
          <p>{data.about}</p>
        </div>
      </div>
    </>
  );
}
export const TechData = ({data}) =>{
  return(
    <>
      <h5 className='page-title'>03 <strong>Space launch 101</strong></h5>
      <main className='tech-container'>
          <div className='title-container'>
            <img src={data.image} alt="rocket" />
          </div>
          <section>
            <TechnologyNav />
            <div>
              <h4>The terminology...</h4>
              <h1>{data.name}</h1>
              <p>{data.desc}</p>
            </div> 
          </section>
      </main>
    </>
  );
}

export const HomeBG = () => {
  const bg = window.innerWidth;
  let bgImage;
  if(bg >= 1440){
    bgImage = bgImageDesktop;
  }else if(bg >= 810){
    bgImage = bgImageTablet;
  }else if(bg >= 310){
    bgImage = bgImageMobile;
  }
  return(
    <img src={bgImage} className="home-bg" />
  )
}
export const DestinationBG = () =>{
  const bg = window.innerWidth;
  let bgImage;
  if(bg >= 1440){
    bgImage = desImageDesktop;
  }else if(bg >= 810){
    bgImage = desImageTablet;
  }else if(bg >= 310){
    bgImage = desImageMobile;
  }
  return(
    <img src={bgImage} className="home-bg" />
  )
}
export const CrewBG = () =>{
  
  const bg = window.innerWidth;
  let bgImage;
  if(bg >= 1440){
    bgImage = crewImageDesktop;
  }else if(bg >= 810){
    bgImage = crewImageTablet;
  }else if(bg >= 310){
    bgImage = crewImageMobile;
  }
  return(
    <img src={bgImage} className="home-bg" />
  )
}
export const TechBG = () =>{
  const bg = window.innerWidth;
  let bgImage;
  if(bg >= 1440){
    bgImage = techImageMobile;
  }else if(bg >= 810){
    bgImage = techImageTablet;
  }else if(bg >= 310){
    bgImage = techImageDesktop;
  }
  return(
    <img src={bgImage} className="home-bg" />
  )
}