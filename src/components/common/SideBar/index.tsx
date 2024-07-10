import Link from "next/link";
export default function SideBar(){
  const itemClasses = "text-black text-center text-[1rem] font-semibold hover:bg-[#DFC7FF] p-[0.5rem]"; 
  return( <div className="fixed">
    <aside className="w-[13rem] h-full bg-white relative drop-shadow-xl ">
    <div className="pt-[1rem] flex flex-col  h-full">
  <div className={itemClasses}><Link href="/" >전체 고민</Link> </div>
  <div className={itemClasses} ><Link href="/" >친구 고민</Link></div>
  <div className={itemClasses}><Link href="/" >연애 고민</Link></div>
  <div className={itemClasses}><Link href="/" >직장 고민</Link></div>
  <div className={itemClasses}><Link href="/" >가족 고민</Link></div>
  <div className={itemClasses}><Link href="/" >취업 고민</Link></div>
  <div className={itemClasses}><Link href="/" >자유게시판</Link></div>
  </div >
 
  </aside>
  </div>)
}