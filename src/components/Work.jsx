import { useScroll } from "framer-motion"
import { useState } from "react";

const Work = () => {
  const [images, setImages] = useState(
    [
        {
          url: "/work1.png",
          top: "50%",
          left: "50%",
          isActive: false,
        },
        {
          url: "/work2.png",
          top: "56%",
          left: "44%",
          isActive: false,
        },
        {
          url: "/work3.png",
          top: "45%",
          left: "56%",
          isActive: false,
        },
        {
          url: "/work4.png",
          top: "60%",
          left: "53%",
          isActive: false,
        },
        {
          url: "/work5.png",
          top: "43%",
          left: "40%",
          isActive: false,
        },
        {
          url: "/work6.png",
          top: "65%",
          left: "55%",
          isActive: false,
        },
      ]
  );

  const { scrollYProgress } = useScroll()
  function imageHideShow(arr) {
    setImages(prev => (
      prev.map((item, index) => (
        arr.indexOf(index) === -1 ? 
        {...item, isActive: false} : 
        {...item, isActive: true}
      ))
    ));
  }
  

  scrollYProgress.on("change", (v) => {
    switch(Math.floor(v*100)) {
        case 0:
            imageHideShow([]);
            break;
        case 1:
            imageHideShow([0])
            break;
        case 2:
            imageHideShow([0,1])
            break;
        case 3:
            imageHideShow([0,1,2])
            break;
        case 4:
            imageHideShow([0,1,2,3])
            break;
        case 5:
            imageHideShow([0,1,2,3,4])
            break;
        case 6:
            imageHideShow([0,1,2,3,4,5])
            break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
            {images.map((image, index) => (
                image.isActive && (
                    <img
                key={index}
                src={image.url}
                width={500}
                height={500}
                alt=""
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{
                    top: image.top,
                    left: image.left,
                }}
                
              />
                )
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
