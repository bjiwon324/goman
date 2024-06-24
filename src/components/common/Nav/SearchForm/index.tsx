import React, { ChangeEvent, useState } from "react"
  

 export default function SearchForm() {
    const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

    return (
      <form className="flex justify-between w-[80vw] ">
        <input 
          type="search" 
          value={value} 
          onChange={handleChange} 
          placeholder="검색어를 입력해 주세요"
          className="bg-slate-50  w-[70vw] rounded-[15px] flex-grow px-6 py-4" 
        />
        <button type="submit" className="rounded-xl px-4 py-2 bg-slate-50 text-zinc-500 ml-3 font-semibold">검색</button>
      </form>
    );
  }
  
