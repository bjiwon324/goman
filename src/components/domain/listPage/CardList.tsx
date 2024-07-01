import Card from "./Card"

export const mook  : CardData[] = [{title : 'dddddd' , text : 'sfdfasdfadlfa', comment: 9, category : '친구고민' },{title : 'dddddd' , text : 'sfdfasdfadlfa', comment: 9, category : '친구고민' },]

export default function CardList () {
  return(
  <ul className="flex flex-wrap items-center justify-start gap-3 w-[80%]  p-[24px]">
    {mook? 
    mook.map((item, index) =>   
    <li key={index}>
      <Card {...item}/>
    </li>) :
        <li className="w-[16rem] h-[12rem] border rounded-sm shadow-md bg-purple-100 skeleton-loader"></li>}
        </ul>)
}