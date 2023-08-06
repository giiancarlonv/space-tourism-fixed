import { Navbar } from "../Navbar";
import mark from '../assets/assets/crew/image-mark-shuttleworth.webp';
import douglas from '../assets/assets/crew/image-douglas-hurley.webp';
import anousheh from '../assets/assets/crew/image-anousheh-ansari.webp';
import victor from '../assets/assets/crew/image-victor-glover.webp';
import bgImage from '../assets/assets/crew/background-crew-mobile.jpg';
import { CrewData, CrewBG } from "../data";

export function Specialist(){
  const obj ={
    job: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    about: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`,
    image: mark
  }
  return(
    <>
      <CrewBG />
      <Navbar />
      <CrewData data={obj} />
    </>

  );
}
export function Commander(){
  const obj ={
    job: 'Commander',
    name: 'Douglas Hurley',
    about: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2..`,
    image: douglas
  }
  return(
    <>
      <CrewBG />
      <Navbar />
      <CrewData data={obj} />
    </>
  );
}
export function Engineer(){
  const obj ={
    job: 'Flight Engineer',
    name: 'Anousheh Ansari',
    about: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`,
    image: anousheh
  }
  return(
    <>
      <CrewBG />
      <Navbar />
      <CrewData data={obj} />
    </>

  );
}
export function Pilot(){
  const obj ={
    job: 'Pilot',
    name: 'Victor Glover',
    about: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer.`,
    image: victor
  }
  return(
    <>
      <CrewBG />
      <Navbar />
      <CrewData data={obj} />
    </>

  );
}