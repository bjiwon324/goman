import Form from "../Form";
import Clouds from "./Clouds";

export default function Layout (){
return(
<section className="relative w-screen h-screen overflow-hidden" >
  <Clouds/> 
  <article className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-zinc-500 text-[4.8em] sm:text-[6.2rem] text-center text-nowrap">고<span className="text-[2rem] sm:text-[3rem]">민 그</span>만해!</h1>
    <Form/>
    </article> 
  </section>)
}