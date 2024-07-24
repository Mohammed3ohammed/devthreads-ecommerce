import Image from "next/image";
import img0 from "../../public/banner-image.png";

const Banner = () => {
  return (
    <div className="main-container flex justify-center my-5">
      <Image 
      src={img0}
      width={1400}
      height={500}
      alt="banner"
      />
    </div>
  )
}

export default Banner;
