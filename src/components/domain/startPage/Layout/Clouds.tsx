import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface CircleProps {
  size?: 'sm'| 'md' | 'lg';
  isShadow?: boolean;
  className?: string;
}

function Circle({ size, isShadow, className  }: CircleProps) {
  let circleSizeClass = '';
  switch (size) {
    case 'sm':
      circleSizeClass = 'w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]';
      break;
    case 'md':
      circleSizeClass = 'w-[160px] h-[160px] sm:w-[320px] sm:h-[320px]';
      break;
    case 'lg':
      circleSizeClass = 'w-[220px] h-[220px] sm:w-[440px] sm:h-[440px]';
      break;
    default:
      circleSizeClass = 'w-[160px] h-[160px] sm:w-[320px] sm:h-[320px]';
      break;
  }

  return (
    <div className={`bg-violet-300 rounded-full ${circleSizeClass} ${className} ${isShadow ? 'shadow-md' : ''}`}></div>
  );
}

export default function Clouds() {
  return (
    <article className="relative top-[34%] sm:top-[45%] left-[45%] sm:left-[48%]">
      <Circle className="absolute bottom-[2rem] left-[-10rem] sm:bottom-[2rem] sm:left-[-22rem] !bg-yellow-200" size="sm" isShadow={true} /> 
      <Circle className="absolute bottom-[-5rem] left-[-11rem] sm:bottom-[-11rem] sm:left-[-23.5rem] animate-cloud-float" size="sm" isShadow={true} /> 
      <Circle className="absolute bottom-[-6rem] left-[-9rem] sm:bottom-[-12rem] sm:left-[-18rem] animate-cloud-float" size="lg" isShadow={true} /> 
      <Circle className="absolute bottom-[-7rem] left-[-2rem] sm:bottom-[-14rem] sm:left-[0rem] animate-cloud-float" isShadow={true} /> 
      <Circle className="absolute bottom-[-3rem] left-[4rem] sm:bottom-[-6rem] sm:left-[9rem] animate-cloud-float" isShadow={true}  /> 
      <Circle className="absolute bottom-[-2rem] left-[-0.5rem] sm:bottom-[-3rem] sm:left-[-1rem] animate-cloud-float" />
      <Image className="absolute bottom-[-6rem] left-[4rem] sm:bottom-[-12rem] sm:left-[14rem]" src={'/icons/Icon-violet-cloud.svg'} alt="구름 이미지" width={226} height={165}/>
      <Image className="hidden sm:inline-block absolute bottom-[0rem] left-[-28rem] " src={'/icons/Icon-violet-cloud.svg'} alt="구름 이미지" width={226} height={165}/>
    </article>
  );
}
