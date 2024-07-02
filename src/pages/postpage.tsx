import SideBar from "@/components/common/sidebar";
import Image from "next/image"
import backIcon from "../../public/icons/backIcon.svg";
import clockIcon from "../../public/icons/clockIcon.png";
import bellIcon from "../../public/icons/bellIcon.png";
import sunnyIcon from "../../public/icons/sunnyIcon.png";
export default function PostPage(){
  const deatilCalss="text-[1rem] text-[#5F6368]"
  return(<>
  <nav className="w-full h-[9rem] bg-violet-300">nav</nav>

  <SideBar/>
  <main className="mx-[14rem] mt-[2rem]  mr-[1.4rem] ">
  <section className="border-b mb-[4.1rem] ">
<div className=" mb-[0.7rem]  "> 
  <Image src={backIcon} alt="되돌아가기 아이콘" width={24} height={24} className="mb-4"/>

  <h1 className="font-pretendard text-center mb-11 text-[2rem] ">손절했는데 누가 잘못한 거 같아?</h1>
  </div>
<div className="flex ml-[92rem] text-right mb-[1rem] ">
  <span className={deatilCalss}>작성자: 뿌꾸</span>

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

  <section className="border-t">
    <div className="border-b flex items-center text-[1.6rem] gap-[1rem] mt-[2.2rem] pb-6 pl-[2.3rem]">
      <Image src={bellIcon} width={24} height={24} alt="알림벨 아이콘"/>
      댓글
      </div>
      </section>
      <section className="bg-slate-200 ">
      <div className="flex gap-[0.5rem] pt-[1.5rem] ml-[3.2rem] items-center pb-[1.5rem] border-b ">
      <Image src={sunnyIcon} height={24} width={24} alt="해아이콘"/>
      <div className="flex flex-col text-[1.1rem] font-normal text-[#E353FA]">
        <span>망나뇽</span>
        <span>10:16</span>
      </div>
      <span className="ml-[2rem] text-[1.3rem] font-normal  "> 나라면 한번은 애기 해 볼거야</span>
      </div>
    </section>
    <section className="bg-slate-200 p-[1rem] h-full ">
      <form className="flex relative boreder-t border-slate-700">
    <textarea id="text" name="story" className="w-[166.7rem] h-[10.6rem] p-[1rem] outline-none "
    placeholder="권리침해, 욕설, 혐오, 명예회손, 비하 등의 내용을 기재하면 운영정책 및 관련 법률에 의거하여 제재될 수 있습니다. 상대방을 비하하는 발언을 삼가해주세요.">
  
    </textarea>
    <button type="submit" className="w-[6.3rem]  h-[3.5rem] rounded-xl bg-[#DFC7FF]  bottom-[3rem] right-[1rem] absolute hover:bg-[#E353FA]">등록</button>
</form>
    </section>
 
  </main>
  </>)
}