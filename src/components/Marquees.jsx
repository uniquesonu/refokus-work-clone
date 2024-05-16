
import Marque from './Marque'

const Marquees = () => {
    const data = [
        [
          "/marquee/1.svg","/marquee/2.svg","/marquee/3.svg","/marquee/4.svg","/marquee/5.svg","/marquee/6.svg","/marquee/7.svg","/marquee/8.svg","/marquee/9.svg"
        ],
        [
          "/marquee/1.svg","/marquee/2.svg","/marquee/3.svg","/marquee/4.svg","/marquee/5.svg","/marquee/6.svg","/marquee/7.svg","/marquee/8.svg","/marquee/9.svg"
        ],
        ]
  return (
    <div className='py-20 mt-32 relative overflow-hidden'>
        {data.map((item, index) => (
            <Marque key={index} item={item} direction={index===0 ? "left" : "right"}/>
        ))}
    </div>
  )
}

export default Marquees