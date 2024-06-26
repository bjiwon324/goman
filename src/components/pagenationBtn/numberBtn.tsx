import Image from 'next/image';

interface NumberBtnProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
 
}

export default function NumberBtn({ text, onClick}: NumberBtnProps) {
  
  return (
    <div onClick={()=>onClick}  className="relative w-[3rem] h-[3rem]">
      <Image 
        src="/images/numberCircle.png"
        alt="숫자동그라미이미지"
        layout="fill" // 이미지를 부모 요소 크기에 맞추기 위해 fill로 설정
        objectFit="contain" // 이미지가 부모 요소에 맞춰지도록 contain으로 설정
        
      />
      <div className="absolute inset-0 flex items-center justify-center text-[1.6rem] font-normal">
        {text}
      
      </div>
    </div>
  );
}
