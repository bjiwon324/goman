import Image from 'next/image';

interface PageBtnProps {
  text: string;
  onClick?: () => void;
}

export default function PageBtn({ text, onClick }: PageBtnProps) {
  return (
    <div onClick={onClick} className='relative w-[4.5rem] h-[4.5rem] ' >
      <Image 
        src="/images/cloud (1) 1.png" 
        alt="구름이미지" 
        layout="fill"  // 이미지를 부모 요소 크기에 맞게 채우도록 설정
        objectFit="contain"  // 이미지가 부모 요소에 맞춰지도록 설정
      />
      <div  className='absolute inset-0 flex items-center justify-center text-center top-1 text-[1.1rem] font-normal'>
        {text}
      </div>
    </div>
  );
}
