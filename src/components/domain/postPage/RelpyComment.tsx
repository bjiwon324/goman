import { useState } from "react";
import { CommentProps } from "./Comment";
import Image from "next/image";
import sunnyIcon from "../../../../public/icons/sunnyIcon.png";
import RecommnetIcon from "../../../../public/icons/reCommentIcon.png";

interface ReplyCommentProps{
  comment: CommentProps;
  user:string;
  time:string;
  onReplySubmit:(commentId: number, replyContent: string)=> void;
  onCancel:()=>void;
  replyingTo: number|null;
  setReplyingTo?: React.Dispatch<React.SetStateAction<number | null>>;
 
}
export default function ReplyComment({
  comment,
   onReplySubmit, 
   onCancel, 
   replyingTo,
 }: ReplyCommentProps) {
  const [replyContent, setReplyContent] = useState("");

  const saveReplyComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(e.target.value);

  };

  const handleReplySubmit =(e: React.FormEvent)=>{
    e.preventDefault();
    if(replyContent.trim() !== ""){
      onReplySubmit(comment.id!, replyContent);
      setReplyContent("");
    }
  }

  
  return (
    <>
      {comment.replies &&
        comment.replies.map((reply) => (
          <div key={reply.id} className="ml-8">
            <div className="flex gap-[0.5rem] pt-[1.5rem] ml-[3.2rem] items-center pb-[1.5rem] border-[#D9D9D9] border-b ">
              <Image
                src={RecommnetIcon}
                height={17}
                width={15}
                alt="답글아이콘"
                className="mr-2"
              />
              <Image src={sunnyIcon} height={24} width={24} alt="해아이콘" />
              <div className="flex flex-col text-[1.1rem] font-normal text-[#E353FA]">
                <span>{reply.user}</span>
                <span>{reply.time}</span>
              </div>
              <span className="ml-[2rem] text-[1.4rem] font-normal">
                {reply.commentText}
              </span>
            </div>
    
          </div>
        ))}

  
     {replyingTo === comment.id && (
             <div className="ml-[2rem] text-[1.2rem] text-gray-500 relative ">
          <textarea
            className="w-full p-2 mt-2 border  border-gray-300 rounded-md outline-none"
            placeholder="답글을 입력하세요"
            value={replyContent}
            onChange={saveReplyComment}
            
          />
          <div className="absolute top-3 right-4">
            <button
              className="px-4 py-2 mt-2 bg-[#DFC7FF] rounded-md hover:bg-[#E353FA] mr-[0.1rem]"
              onClick={handleReplySubmit} 
            >
              등록
            </button>
            <button
              className="px-4 py-2 mt-2 bg-[#DFC7FF] rounded-md hover:bg-[#E353FA]"
              onClick={onCancel}
            >
              취소
            </button>
          </div>
          
        </div>
        
     )}
      
    </>
  );
}
