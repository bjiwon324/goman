import { ChangeEvent, useState } from "react";

export default function Form() {
  const [value, setValue] = useState('')

  const handleOnChange = (e : ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  const handleSubmit = (e: SubmitEvent) =>{
    e.preventDefault()
    console.log(e.target[0].value)

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
      <input
      value={value}
      onChange={handleOnChange}
        className="bg-neutral-100 w-full md:w-[120%] px-8 py-3 rounded-md text-center focus:outline-none text-zinc-500 focus:border-neutral-300"
        placeholder="닉네임을 설정해 주세요"
      />
      <button  disabled={value === ''} type="submit" className="relative w-full bg-pink-100 rounded-md py-3  text-zinc-500 font-semibold overflow-hidden group shadow-md disabled:bg-gray-300 disabled:shadow-none  disabled:text-neutral-400">
        고민 상담하러 가기
        <span className={`absolute top-3 right-0 bg-gradient-to-l from-transparent pr-2 transform -translate-x-full group-hover:translate-x-0 transition-transform ${
          value === '' ? 'hidden' : 'block'
        }`}>  &#10140;
        </span>
      </button>
    </form>
  );
}
