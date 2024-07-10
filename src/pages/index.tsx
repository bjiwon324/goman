import SideBar from "@/components/common";
import Nav from "@/components/common/Nav";
import Link from "next/link";


export default function Home() {

  return (
    <>
    <Nav isListPage/>
    <Link href={'/list'}>listPage</Link>
    </>
  );
}
