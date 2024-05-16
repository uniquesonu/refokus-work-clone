
const Footer = () => {
  return (
    <div className='w-full pb-24'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-10'>
                <div className='basis-1/3'>
                    <h4 className='mb-4'>Socials</h4>
                    {
                        ["instagram","twitter (x?)", "LinkedIn"].map((item, index) => (
                            <p className="block mt-3 text-zinc-600 capitalize cursor-pointer" key={index}>{item}</p>
                        ))
                    }
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-4'>Site map</h4>
                    {
                        ["Home","Work", "Careers", "contact"].map((item, index) => (
                            <p className="block mt-3 text-zinc-600 capitalize cursor-pointer" key={index}>{item}</p>
                        ))
                    }
                </div>
                <div className='basis-1/2 flex flex-col justify-center items-end'>
                    <p className='mb-8 text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="/enterprises.svg" alt="images" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer