import React, { ChangeEvent, FormEventHandler, useState } from "react"
  

 export default function SearchForm() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit : FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault()
    console.log(e)
  }

    return (
      <form onSubmit={handleSubmit} className="flex justify-start w-[80vw] sm:w-[60vw] text-[16px]">
        <input 
          type="search" 
          value={value} 
          onChange={handleChange} 
          placeholder="검색어를 입력해 주세요"
          className="bg-slate-50 rounded-[15px] flex-grow px-8 py-6 outline-none" 
        />
<button type="submit" className="rounded-xl flex-shrink-0 px-4 py-2 bg-slate-50 text-zinc-500 ml-3 font-semibold hover:bg-violet-400 hover:text-white transition duration-300">검색</button></form>
    );
  }
  
