import img from '../assets/images/image copy.png'

export default function SectionOne() {
    return(
        <>
            <section className="bg-bg-color h-149.75 w-full flex flex-col justify-center items-center gap-32 md:flex-row  md:justify-center">
                <div className='flex flex-col font-custom-font h-[320px] w-[657px]  font-semibold gap-12'>
                    <div className='h-[192px] w-[657px]'>
                        <h1 className='text-text-color text-3xl md:text-[64px] font-semibold'>Lessons and insights</h1>
                        <span className='text-main-green text-3x1 md:text-[64px]  font-semibold relative bottom-5'>from 8 years</span>
                        <p className='text-p-color'>Where to grow your business as a photographer: site or social media?</p>
                    </div>
                    <button className='bg-main-green h-13 w-32 rounded-sm text-white hover:bg-green-800 hover:duration-500 duration-500 transition-all cursor-pointer'>Register</button>
                </div>
                <div>
                    <img src={img} alt="" className='w-97.75 h-101.75'/>
                </div>
            </section>
        </>
    )
}