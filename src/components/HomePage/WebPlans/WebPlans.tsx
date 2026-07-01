import { RiArrowRightSFill } from "react-icons/ri"
const WebPlans = () => {
  return (
    <div className='bg-linear-to-br from-gray-100 to-gray-200 py-16 my-12 rounded-2xl'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-white p-12 rounded-3xl shadow-xl mb-4'>
                <h2 className='bg-linear-to-r from-emerald-600 to-cyan-200 text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text mb-6'>
                    web plans
                </h2>
                <p className='text-center text-lg text-gray-600 mx-auto max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit quaerat ipsa voluptatum quae quia obcaecati eum ducimus laudantium, laborum ab dolore nihil, nesciunt dolores cum. Ducimus iusto ratione eaque.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className=' rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-8 '>
                    <h3 className='text-2xl font-bold text-gray-700 mb-6'>
                        starter plan
                    </h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 1</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 2</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 3</span>
                        </li>
                    </ul>
                </div>

                <div className=' rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-8 transform scale-110 border-2 border-amber-400 '>
                    <h3 className='text-2xl font-bold text-gray-700 mb-6'>
                        pro plan
                    </h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 1</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 2</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 3</span>
                        </li>
                    </ul>
                </div>

                <div className=' rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-8 '>
                    <h3 className='text-2xl font-bold text-gray-700 mb-6'>
                        enterprise plan
                    </h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 1</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 2</span>
                        </li>

                        <li className='flex items-center text-gray-600'>
                            <RiArrowRightSFill className="mr-2 text-emerald-500 w-5 h-5"/>
                            <span>feature 3</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebPlans
