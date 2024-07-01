interface ButtonProps{
  className?:string;
  onClick?:()=>void;
  text:string;
  
}
export default function Button({className,text}:ButtonProps){
  return(<>
  <button className={`${className} text-[1.5rem] font-normal rounded-[1rem] h-[4rem] border w-[10rem]`}>{text}</button>
  </>)
}