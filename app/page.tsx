import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { BsPhone, BsSuitcase, BsSuitcase2, BsSuitcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home () {
  return (
    <div className=" w-full h-full">
      <header className="p-2 m-2   contents text-4xl font-bold ">


        <h1 className=" flex justify-center ">Himanshu Kumar Dutt</h1>
        <ul className="flex justify-center text-xs md:text-sm ml-1 md:gap-3">
          <li className="underline flex "> <BsPhone className="mt-[0.1rem]" /> <a href="phoneto:+917982033205">7982033205</a> </li>
          <li className="underline flex "> <GitHubLogoIcon /> <a target="_blank" href={`github.com/HimanshuKumarDutt094`} about="github link" >HimanshuKumarDutt094</a> </li>
          <li className="underline flex"> <LinkedInLogoIcon /> <a href={`linkedin.com/in/himanshu-dutt-77`} about="linkedin  link" >Himanshu-Dutt-77</a> </li>
          <li className="underline flex"> <BsSuitcaseFill /> <a href={`himanshudutt.tech`} about="porfolio link" >portfolio</a> </li>
          <li className="underline flex"> <MdEmail /> <a href={`mailto:adasimobenio@gmail.com`} about="email link" >himanshu.dutt@himanshudutt.me</a> </li>

        </ul>
      </header>
      <main className="p-6 w-full">
        <h3 className="text-3xl  "> Education
        </h3>
        <hr className=" border-black border-[2px]" />
        <table className=" ml-3 mr-3 mt-2  w-full  px-12" border={2} >
          <tr className="flex justify-between">
            <td className="font-bold">
              Guru Gobing Singh Indraprastha University
            </td>
            <td> Aug 2021-June 2024</td>
          </tr>
          <tr className="flex text-gray-500 justify-between">
            <td>
              BCA with minor Specialization in ML and AI            </td>
            <td>Current CGPA: 8.8</td>
          </tr>
          <tr className="flex justify-between">
            <td className="font-bold">
              Kamal Public School Vikaspuri
            </td>
            <td>  2019 - 2021</td>
          </tr>
          <tr className="flex text-gray-500 justify-between">
            <td>
              12th CBSE Boards (PCM-CS)
            </td>
          </tr>
        </table>
        <h3 className="text-3xl  "> Skills
          <hr className=" border-black border-[2px]" />
        </h3>
        <ul className="mx-3 mt-2">
          <li>
            <b>
              Languages:

            </b>
            JavaScript, TypeScript, Python, Golang, HTML/CSS</li>
          <li>
            <b>
              Frameworks:

            </b>
            NextJS, SvelteKit</li>
          <li>
            <b>
              Libraries:

            </b>            ReactJS,
            ExpressJS,
            Socket.io,
            Clerk Auth,
            Shadcn,
            NextUI
          </li>
          <li>
            <b>
              Databases:
            </b>
            MongoDB, SQL (SQLite, Postgres) </li>
          <li>
            <b>            Tools:
            </b>
            Git/GitHub,
            VS Code,
            Vercel,
            AWS EC2,
            Neovim (basics)
          </li>
        </ul>
        <h3 className="text-3xl  "> Projects
          <hr className=" border-black border-[2px]" />
        </h3>
        <ul>
          <li></li>
        </ul>
      </main>
      <footer></footer>
    </div >
  )
}
