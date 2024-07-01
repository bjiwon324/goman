import Dropdown from "@/components/common/DropDown";
import Logo from "../../public/icons/wrtingPageLogo.png";
import Image from "next/image";
import Button from "@/components/common/Button";
export default function WritingPage(){
  const options =[ '친구고민', '연애고민', '가족고민', '직장고민', '기타'];
  const handleSelect = (value: string) => {
    console.log('Selected value:', value);
  };
  return(
  <>
  <Image src={Logo} alt="로고 이미지"  width={360} height={90} className="ml-[17rem] mb-[1.4rem] mt-[3rem]"/>


  <main className="flex flex-col items-center">

<section className="bg-[#E2DEF9] rounded-[1rem] w-[100rem] mb-8">
  <div className=" py-[3rem] pl-5 pr-[13.9rem] ]">
  <input 
  placeholder="제목을 입력해 주세요."
  className=" w-[70rem] h-[4rem] mr-[6rem] rounded-[1rem] text-[1.5rem] py-3 pl-[1.4rem] "
  />
     <Dropdown options={options} onSelect={handleSelect} className="bg-[#F9F8FE] w-[8.8rem] h-[4rem] text-[1rem] font-normal"/>
     </div>
</section>

<section>
  <textarea
  placeholder="고민을 이야기 해 보세요."
  className="w-[100rem] h-[30.4rem] border-[#B9B8B8] border drop-shadow-md outline-none rounded-[1rem] text-[1.5rem] py-[1.7rem] px-[2rem]"
  />

</section>
<section className=" mt-[3rem]">
<Button text="등록" className="bg-[#C5A0EB] text-white border-[#73687F] hover:bg-[#EAD7FC] hover:text-[#B7B7B7] mr-[1rem]" />
  <Button text="취소" className=" border-[#73687F] text-black"/>
</section>
  </main>
  </>)
}