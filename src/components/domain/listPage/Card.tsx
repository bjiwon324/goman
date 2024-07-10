


export default function Card ({title, text, comment ,category} : CardData) {
  return(
  <article className="flex flex-col justify-between gap-2 w-[24rem] h-[18rem] border p-4 rounded-sm shadow-md bg-purple-100">
    <h3 className=" font-semibold single-line text-neutral-900 w-[70%] text-[20px]">{title}</h3>
    <p className="mt-[-1rem] three-lines text-neutral-500 text-[16px]" >{text}</p>
    <div className="flex justify-between text-neutral-400 text-[16px]">
      <p>답글 {comment}개</p>
      <p>{category}</p>
    </div>
  </article>)
}

