import { DestinationNav, Navbar } from "../Navbar";
import bgImage from '../assets/assets/destination/background-destination-mobile.jpg';
import { Destination, DestinationBG } from "../data";
import moon from '../assets/assets/destination/image-moon.webp';
import europa from '../assets/assets/destination/image-europa.webp';
import mars from '../assets/assets/destination/image-mars.webp';
import titan from '../assets/assets/destination/image-titan.webp';

export function Moon(){
  const obj = {
    name: 'Moon',
    image: moon,
    details: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: '384,400 km',
    time: '3 days'
  }
  return(
    <>
    <DestinationBG />
    <Navbar />
      {/**
      00 Home
      01 Destination
      02 Crew
      03 Technology
       */}
       
      <Destination data={obj} />
    </>
  );
}
export function Europa(){
  const obj = {
    name: 'Europa',
    image: europa,
    details: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`,
    distance: '628 mil. km',
    time: '3 years'
  }
  return(
    <>
     <DestinationBG />
    <Navbar />
      {/**
      00 Home
      01 Destination
      02 Crew
      03 Technology
       */}
    <Destination data={obj} />
    </>
  );
}
export function Mars(){
  const obj = {
    name: 'Mars',
    image: mars,
    details: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest`,
    distance: '225 mil. km',
    time: '9 months'
  }
  return(
    <>
     <DestinationBG />
    <Navbar />
      {/**
      00 Home
      01 Destination
      02 Crew
      03 Technology
       */}
    <Destination data={obj} />
    </>
  );
}
export function Titan(){
  const obj = {
    name: 'Titan',
    image: titan,
    details: `The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.`,
    distance: '1.6 bil. km',
    time: '7 years'
  }
  return(
    <>
    <DestinationBG />
    <Navbar />
      {/**
      00 Home
      01 Destination
      02 Crew
      03 Technology
       */}
    <Destination data={obj} />
    </>
  );
}
