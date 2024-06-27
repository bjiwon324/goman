import SideBar from "@/components/common/sidebar";
import Image from "next/image"
export default function PostPage(){
  return(<>
  <nav className="w-full h-[9rem] bg-violet-300">nav</nav>

  <SideBar/>
  <main className="ml-[20rem]">
  <section>
<div> 
  <Image src="/icos/backIcon.png" alt="되돌아가기 아이콘" width={24} height={24}/>손절했는데 누가 잘못한 거 같아?</div>
<div>
  <span>작성자: 뿌꾸</span>
  <span>10:11:13</span>
  <span>답글: 10개</span>
</div>
  </section>

  <section>
  아니 내가 약속시간에 늦었긴 했는데, 사정이 있었고 누구나 들으면 이해해 줄  상황이었거든? 
  갑자기 못가겠다고 미안하도 하고 기프티콘도 보내줬는데 읽씹하는거야 ㅋㅋㅋ 
  그래서 나도 그냥 차단 했어 이렇게 손절 각 인데? 
  다시 한번 연략 해복 얘기해봐야 할까? 
  </section>

  <section>
    <div>댓글</div>
    <div>
      와 대박인데?
    </div>
    
  </section>
  </main>
  </>)
}