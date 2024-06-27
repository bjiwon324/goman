import Image from "next/image";
import SearchForm from "./SearchForm";
import Link from "next/link";

  interface Props {
    isListPage?:boolean
  }
  
  export default function Nav ({isListPage = false} : Props) {


    return(
        <nav className="w-[100vw] h-[250px] fixed top-0 flex flex-col justify-center  items-center bg-violet-200 mr-auto" >
          <div className=" flex flex-col justify-center  items-center  relative gap-[30px] py-[25px]">
           <h1 className={`text-zinc-500 text-[52px] text-center w-[300px] py-[30px] bg-navCloud bg-cover bg-center`}>고만해!</h1>
         {isListPage&& <> <SearchForm/>
            <Link href={'/'}><button className="absolute bottom-[40px] right-[5vw]"><Image alt="글 작성하기" src={"/icons/Icon-pencil.svg"} width={30} height={30}/>
            </button></Link> </>}
          </div>
        </nav>)
    }


