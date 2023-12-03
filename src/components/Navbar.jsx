"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [navBG, setNavBG] = useState('navBackground'); //navigation-background

    const handleRouting = (path) => {
        router.push(path);
    }




    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setNavBG('navScrollBackground');
            }
            else if(window.scrollY < 100){
                setNavBG('navBackground');
            }
        });
   },[])





    return (
        <>
            <div className={`${navBG} fixed left-0 top-0 w-full flex justify-between bg-white items-center px-20`}>
                <div onClick={()=>handleRouting('/')} className="logo cursor-pointer">
                    <img src="logo.png" alt=""/>
                </div>

                <div className="flex justify-center items-center gap-6 py-5">
                    <h1 onClick={()=>handleRouting('/')} className="cursor-pointer">Home</h1>
                    <h1 onClick={()=>handleRouting('/team')} className="cursor-pointer">Team</h1>
                    <h1 onClick={()=>handleRouting('/service')} className="cursor-pointer">Service</h1>
                    <h1 onClick={()=>handleRouting('/projects')} className="cursor-pointer">Projects</h1>
                    <h1 onClick={()=>handleRouting('/testimonial')} className="cursor-pointer">Testimonials</h1>
                    <button className="px-4 py-2 border border-[#20B15A] font-medium rounded-lg">Login</button>
                    <button className="px-4 py-2 bg-[#20B15A] text-white font-medium rounded-lg">Register</button>
                </div>
            </div>


            {
                /*
                <div className="navbar fixed left-0 top-0 w-full flex justify-between bg-transparent items-center px-20">
                <div className="logo cursor-pointer">
                    <img src="logo.png" alt=""/>
                </div>

                <div className="flex justify-center items-center gap-6 py-5">
                    <Link href="/" className="cursor-pointer">Home</Link>
                    <Link href="/team" className="cursor-pointer">TeamList</Link>
                    <Link href="/service" className="cursor-pointer">Service</Link>
                    <Link href="/projects" className="cursor-pointer">Projects</Link>
                    <Link href="/testimonial" className="cursor-pointer">Testimonials</Link>
                    <button className="px-4 py-2 border border-[#20B15A] font-medium rounded-lg">Login</button>
                    <button className="px-4 py-2 bg-[#20B15A] text-white font-medium rounded-lg">Register</button>
                </div>
            </div>
                * */
            }
        </>
    );
};

export default Navbar;