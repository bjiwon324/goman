import SideBar from "@/components/common/SideBar";
import Image from "next/image"
import backIcon from "../../public/icons/backIcon.svg";
import clockIcon from "../../public/icons/clockIcon.png";
import bellIcon from "../../public/icons/bellIcon.png";
import sunnyIcon from "../../public/icons/sunnyIcon.png";
import Nav from "@/components/common/Nav";
import Comment from "@/components/domain/postPage/CommentForm";
import CommentForm from "@/components/domain/postPage/CommentForm";

export default function PostPage(){
  const deatilCalss="text-[1rem] text-[#5F6368]"
  
  const today = new Date();
 
  return(<>
<Nav/>
<div>
<SideBar/>
  <main className="ml-[15rem] mt-[2rem] ">
  
  <section className="border-b mb-[4.1rem] w-full ">
<div className=" mb-[0.7rem]  "> 
  <Image src={backIcon} alt="되돌아가기 아이콘" width={24} height={24} className="mb-4"/>

  <h1 className="font-pretendard text-center mb-11 text-[2rem] ">손절했는데 누가 잘못한 거 같아?</h1>
  </div>
<div className="flex justify-end mb-[1rem] mr-[5rem] ">
  <span className={`{deatilCalss} `}>작성자: 뿌꾸</span>

  <span className={`${deatilCalss} flex gap-[0.6rem] mx-[1.1rem]`}> 
    <Image src={clockIcon} width={11} height={11} alt="시계아이콘"/>
    10:11:13</span>
  
  <span className={deatilCalss}>답글: 10개</span>
</div>
  </section>

  <section className="text-center text-[2rem] mx-[30rem] mb-[10rem]">
  아니 내가 약속시간에 늦었긴 했는데, 사정이 있었고 누구나 들으면 이해해 줄  상황이었거든? 
  갑자기 못가겠다고 미안하도 하고 기프티콘도 보내줬는데 읽씹하는거야 ㅋㅋㅋ 
  그래서 나도 그냥 차단 했어 이렇게 손절 각 인데? 
  다시 한번 연략 해복 얘기해봐야 할까? 
  </section>
<div className="flex flex-col">

    <CommentForm />
    </div>
  </main>
  </div>
  </>)
}