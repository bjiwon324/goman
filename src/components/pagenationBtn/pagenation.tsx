import { useState } from "react";
import NumberBtn from "./numberBtn"
import PageBtn from "./pageBtn"
interface PageNationProps{
  total:number;//총 데이터 갯수 
  limit:number;//한 페이지에 보여줄 데이터 갯수 
  page:number;
  setPage: (page: number) => void;
}
export default function PageNation({total,limit,page,setPage}:PageNationProps){
const [btnActive, setBtnActive]=useState("");
const numPages = Math.ceil(total/limit);//총 페이지 개수임 = 배열이 아니고 배열의 길이

const handlePageBtn=(e:any,i:number)=>{
  setPage(i+1);
  setBtnActive(e.target.value);
}
  return(<>
  <PageBtn text="처음" onClick={()=>setPage(1)} />
    {Array(numPages)
    .fill(0)// 그래서 numPages가 배열의 길이만 가지고 있으니까 그 길이만큼의 배열을 만들어줘야 map사용 가능해서 fill이 사용되는 것! 
    .map((_,i)=>(
<NumberBtn text={String(i+1)}
 onClick={(e) => handlePageBtn(e, i)}
aria-current={page===i+1? "page":null}
/>
    ))
    }
  
  <PageBtn text="마지막" onClick={()=>setPage(numPages)} /> 
  </>)
}