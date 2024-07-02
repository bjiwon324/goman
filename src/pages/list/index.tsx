import Dropdown from "@/components/common/DropDown";
import Nav from "@/components/common/Nav";
import SideBar from "@/components/common/sidebar";
import CardList from "@/components/domain/listPage/CardList";

const totalMook = {count : 4, items : [{title: 'ddd', text: 'fadf' , category : 'sfdfa' , coment: 'sdfasdfa', creacted : '20200423' }, {title: 'ddd', text: 'fadf' , category : 'sfdfa' , coment: 'sdfasdfa', creacted : '20200423' },{title: 'ddd', text: 'fadf' , category : 'sfdfa' , coment: 'sdfasdfa', creacted : '20200423' },{title: 'ddd', text: 'fadf' , category : 'sfdfa' , coment: 'sdfasdfa', creacted : '20200423' },]}

export default function ListPage() {
  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };


  return (
    <>
    <Nav isListPage={true}/>
    <SideBar/>
    <section className=" w-[70%] mx-auto">
      <article className="flex justify-between items-center mt-10 mx-auto">
        <h2>총 {totalMook.count}개의 {}고민</h2>  
        <Dropdown options={['최신순', '댓글순']} 
        onSelect={handleSelect} />
      </article>
      <CardList/>
      </section>
    </>
  );
}
