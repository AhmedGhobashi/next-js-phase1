import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className="flex flex-row gap-[50px] justify-center">
    <h1>NextJS-1</h1>
    <p>This is my first nextJS project</p>
    </div>

    <div className="mt-16 flex flex-col gap-[35px] items-center">
    <Link href={"about"}>about</Link>
    <Link href={"products"}>product</Link>
    <Link href={"products/search"}>search</Link>
    </div>
    </>
  );
}
