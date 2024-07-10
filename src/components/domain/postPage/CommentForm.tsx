import Image from "next/image"
import bellIcon from "../../../../public/icons/bellIcon.png";
import CommentList from "./CommentList";


export default function CommentForm(){

  return(<>
    <section className="border-t">
    <div className="border-b flex items-center text-[1.6rem] gap-[1rem] mt-[2.2rem] pb-6 pl-[2.3rem]">
      <Image src={bellIcon} width={24} height={24} alt="알림벨 아이콘"/>
      댓글
      </div>
      </section>
<CommentList/>

    </>
  )
}