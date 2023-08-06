import React from 'react'
import { Navbar } from '../Navbar';
import bgImage from '../assets/assets/technology/background-technology-mobile.jpg';
import spaceCapsule from '../assets/assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsuleDesktop from '../assets/assets/technology/image-space-capsule-portrait.jpg';

import launchVehicle from '../assets/assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehicleDesktop from '../assets/assets/technology/image-launch-vehicle-portrait.jpg';

import spaceport from '../assets/assets/technology/image-spaceport-landscape.jpg';
import spaceportDesktop from '../assets/assets/technology/image-spaceport-portrait.jpg';

import { TechData, TechBG } from '../data';

export const Capsule =()=> {
  const sampleImage = window.innerWidth;
  let imagePreview;
  if(sampleImage >= 1440){
    imagePreview = spaceCapsuleDesktop;
  }else if(sampleImage >= 310){
    imagePreview = spaceCapsule;
  }
  const obj ={
    name: 'Space capsule',
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.`,
    image: imagePreview
  }
  return (
    <>
    <TechBG />
    <Navbar />
      <TechData data={obj}/>
    </>
  )
}

export const Spaceport =()=> {
  const sampleImage = window.innerWidth;
  let imagePreview;
  if(sampleImage >= 1440){
    imagePreview = spaceportDesktop;
  }else if(sampleImage >= 310){
    imagePreview = spaceport;
  }
  const obj ={
    name: 'Spaceport',
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`,
    image: imagePreview
  }
  return (
    <>
      <TechBG />
      <Navbar />
      <TechData data={obj} />
    </>
  )
}

export const Vehicle =()=> {
  const sampleImage = window.innerWidth;
  let imagePreview;
  if(sampleImage >= 1440){
    imagePreview = launchVehicleDesktop;
  }else if(sampleImage >= 310){
    imagePreview = launchVehicle;
  }
  const obj ={
    name: 'Launch vehicle',
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`,
    image: imagePreview
  }
  return (
    <>
      <TechBG />
      <Navbar />
      <TechData data={obj} />
    </>
  )
}