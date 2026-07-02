import HeroImage from '../../../../public/bluewater.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <div className="flex flex-col items-center md:items-start gap-8">
            <h2 className="text-8xl font-bold text-blue-500 text-center md:text-left">
                Hero Page
            </h2>
            <p className="max-w-2xl text-gray-500 text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi quasi sequi eius, dignissimos perspiciatis quis molestias suscipit provident labore a deserunt voluptas iusto enim ut fugiat possimus eos culpa?
            </p>
        </div>
        <div>
            <Image src = {HeroImage} alt="blue image" className="h-100 w-100" loading='eager'/>
        </div>

    </div>
  )
}

export default Hero
