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
      circleSizeClass = 'w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[20rem]';
      break;
    case 'md':
      circleSizeClass = 'w-[16rem] h-[16rem] sm:w-[32rem] sm:h-[32rem]';
      break;
    case 'lg':
      circleSizeClass = 'w-[22rem] h-[22rem] sm:w-[44rem] sm:h-[44rem]';
      break;
    default:
      circleSizeClass = 'w-[16rem] h-[16rem] sm:w-[32rem] sm:h-[32rem]';
      break;
  }

  return (
    <div className={`bg-violet-300 rounded-full ${circleSizeClass} ${className} ${isShadow ? 'shadow-md' : ''}`}></div>
  );
}

export default function Clouds() {
  return (
  <article className="relative top-[43%] left-[92%] sm:top-[46%] sm:left-[96%] transform translate-x-[-50%] translate-y-[-50%]">
    <Circle className="absolute bottom-[3.2rem] left-[-16rem] sm:bottom-[3.2rem] sm:left-[-35.2rem] !bg-yellow-200" size="sm" isShadow={true} /> 
    <Circle className="absolute bottom-[-8rem] left-[-17.6rem] sm:bottom-[-17.6rem] sm:left-[-37.6rem] animate-cloud-float" size="sm" isShadow={true} /> 
    <Circle className="absolute bottom-[-9.6rem] left-[-14.4rem] sm:bottom-[-19.2rem] sm:left-[-28.8rem] animate-cloud-float" size="lg" isShadow={true} /> 
    <Circle className="absolute bottom-[-11.2rem] left-[-3.2rem] sm:bottom-[-22.4rem] sm:left-[0rem] animate-cloud-float" isShadow={true} /> 
    <Circle className="absolute bottom-[-4.8rem] left-[6.4rem] sm:bottom-[-9.6rem] sm:left-[14.4rem] animate-cloud-float" isShadow={true}  /> 
    <Circle className="absolute bottom-[-3.2rem] left-[-0.8rem] sm:bottom-[-4.8rem] sm:left-[-1.6rem] animate-cloud-float" />
    <Image className="absolute bottom-[-9.6rem] left-[6.4rem] sm:bottom-[-19.2rem] sm:left-[22.4rem]" src={'/icons/Icon-violet-cloud.svg'} alt="구름 이미지" width={226} height={165}/>
    <Image className="hidden sm:inline-block absolute bottom-[0rem] left-[-44.8rem] " src={'/icons/Icon-violet-cloud.svg'} alt="구름 이미지" width={226} height={165}/>
</article>

  );
}
