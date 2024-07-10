import COMMENT_LIST from "@/pages/api/mocks/commetData";
import Comment from "./Comment";
import sunnyIcon from "../../../../public/icons/sunnyIcon.png";
import Image from "next/image";
export default function CommentList(props:any) {
  return (
    <>
      {COMMENT_LIST.map((comment,i) => (<>
         <section className="bg-slate-200 relative border-b border-b-[#D9D9D9]">
         <div className="flex gap-[0.5rem] pt-[1.5rem] ml-[3.2rem] items-center pb-[1.5rem] border-b ">
         <Image src={sunnyIcon} height={24} width={24} alt="해아이콘"/>
         <div className="flex flex-col text-[1.1rem] font-normal text-[#E353FA] ">
           <span>{comment.user}</span>
           <span>{comment.time}</span>
         </div>
         <span className="ml-[2rem] text-[1.4rem] font-normal  "> {comment.commentText}</span>
         </div>
         <span className="text-[1.4rem] absolute z-10 top-[65%] right-16 font-normal hover:text-[#E353FA]">답글</span>
       </section>
    
        </>
      ))}
<Comment  user={props.user} time={props.time} commentText={props.commentText}/>

</>
  );
}
