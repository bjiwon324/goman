import sunnyIcon from "../../../../public/icons/sunnyIcon.png";
import RecommnetIcon from "../../../../public/icons/reCommentIcon.png";
import Image from "next/image";
import { useState } from "react";
import ReplyComment from "./RelpyComment";

export interface CommentProps {
  id?: number;
  user: string;
  commentText: string;
  time: string;
  replies?: CommentProps[];

}

export default function Comment({ user, commentText, time }: CommentProps) {
  const [commentList, setCommentList] = useState<CommentProps[]>([]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [content, setContent] = useState("");


  const saveComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const pushCommentList = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() !== "") {
      setCommentList([
        ...commentList,
        {
          id: commentList.length + 1,
          user: user,
          commentText: content,
          time: time,
        
        },
      ]);
      setContent("");  
      setReplyingTo(null); 
    }
  };

  const writeComment = (id: number) => {
    setReplyingTo(id);

  };

  const handleReplySubmit = (commentId: number, replyContent: string) => {
    
    setCommentList(
      commentList.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...(comment.replies || []),
                {
                  id: -(comment.replies ? comment.replies.length + 1 : 1),
                  user: user,
                  commentText: replyContent,
                  time: time,
               
                },
              ],
            }
          : comment
      )
    );
     setReplyingTo(null);
  };

  return (
    <>
      {commentList.map((comment) => (
        <section
          key={comment.id}
          className="bg-slate-200 relative border-b border-b-[#D9D9D9]"
        >
          <div className="border-b-[#D9D9D9] flex gap-[0.5rem] pt-[1.5rem] ml-[3.2rem] items-center pb-[1.5rem] border-b ">
            <div>
              <Image src={sunnyIcon} height={24} width={24} alt="해아이콘" />
              <div className="flex flex-col text-[1.1rem] font-normal text-[#E353FA]">
                <span>{comment.user}</span>
                <span>{comment.time}</span>
              </div>
              <span className="ml-[2rem] text-[1.4rem] font-normal bprder-b bborder-b-[#D9D9D9] border-t bborder-t-[#D9D9D9]">
                {comment.commentText}
              </span>
            </div>
            <span
              className="text-[1.4rem] absolute z-10 top-[65%] right-16 font-normal hover:text-[#E353FA]"
               onClick={() => writeComment(comment.id!)}
            >
              답글
            </span>
          </div>
          
          { replyingTo === comment.id && (
          <ReplyComment
            key={`reply-${comment.id}`} 
            comment={comment}
            user={user}
            time={time}
            onReplySubmit={handleReplySubmit}
            onCancel={() => setReplyingTo(null)}
            replyingTo={replyingTo}
          />
        )}
      </section>
    ))}
     
      <section className="bg-slate-200 p-[1rem] h-full">
        <form
          className="flex relative boreder-t border-slate-700"
          onSubmit={pushCommentList}
        >
          <textarea
            id="text"
            name="story"
            className="w-[166.7rem] h-[10.6rem] p-[1rem] outline-none"
            placeholder="권리침해, 욕설, 혐오, 명예훼손, 비하 등의 내용을 기재하면 운영정책 및 관련 법률에 의거하여 제재될 수 있습니다. 상대방을 비하하는 발언을 삼가해주세요."
            value={content}
            onChange={saveComment}
          />
          <button
            type="submit"
            className="w-[6.3rem] h-[3.5rem] rounded-xl bg-[#DFC7FF] bottom-[3rem] right-[1rem] absolute hover:bg-[#E353FA]"
          >
            등록
          </button>
        </form>
      </section>
    </>
  );
}
