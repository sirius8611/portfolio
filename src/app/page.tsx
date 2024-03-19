import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="mt-20">
      <div className="w-7/12">
      <h1 className="text-4xl">VinUniversity student, coder, and a wannabe entrepreneur.</h1>
      <p>I'm Hieu, a university student based in Vietnam. I'm currently pursuing a BS in Computer Science while also aspire to transform my ideas to a business.</p>
      </div>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="columns-3">
        {/* <Image alt="1" fill className="" sizes="(max-width: 768px) 213px, 33vw" src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image> */}
        {/* <Image alt="2" fill className=""  sizes="(max-width: 768px) 213px, 33vw" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image> */}
        {/* <Image alt="3" fill className=""  sizes="(max-width: 768px) 213px, 33vw" src="https://plus.unsplash.com/premium_photo-1676998930980-fc6d4922c0b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww"></Image> */}
        </div>
      </div>
    </div>
  );
}