import Button from "./Button"
import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='n-left flex items-center'>
        <img src={Logo}  alt='logo' />
        <div className='flex gap-14 ml-24'>
        {["Home", "Work", "Culture", "News"].map((link,index) => (
          <a key={link} href="#" className='font-regular text-sm flex items-center gap-1'>
            {index === 1 && <span className='inline-block w-2 h-2 rounded-full bg-green-600 animate-pulse'></span>}
            {link}
            </a>
        ))}
        </div>
        
        </div>
        <Button title="Get Started"/>
    </div>
  )
}

export default Navbar