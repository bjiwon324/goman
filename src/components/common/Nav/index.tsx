import Image from "next/image";
import SearchForm from "./SearchForm";
import Link from "next/link";

  interface Props {
    isListPage?:boolean
  }
  
  export default function Nav ({isListPage = false} : Props) {


    return(
        <nav className="w-[100vw] h-[250px] sticky top-0 flex flex-col justify-center items-center bg-violet-200 mr-auto z-10" >
          <div className=" flex flex-col justify-center items-center gap-[30px] py-[25px]">
           <h1 className={`text-zinc-500 text-[52px] text-center w-[300px] py-[30px] bg-navCloud bg-cover bg-center`}>고만해!</h1>
         {isListPage&& 
         <div className="flex items-center gap-8"> 
          <SearchForm/>
          <Link href={'/'}><button type="button" className="group">
            <Image alt="글 작성하기" src={"/icons/Icon-pencil.svg"} width={30} height={30} className="group-hover:brightness-200 transition duration-300"/>
          </button></Link> 
            </div>}
          </div>
        </nav>)
    }


