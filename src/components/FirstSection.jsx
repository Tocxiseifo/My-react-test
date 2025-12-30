/* eslint-disable no-unused-vars */
//===============Image Imports=============
import img from '../assets/images/image copy.png'
import img1 from '../assets/images/image copy 2.png'
import img2 from '../assets/images/image copy 3.png'
import img3 from '../assets/images/image copy 4.png'
import img4 from '../assets/images/image copy 5.png'
import img5 from '../assets/images/image copy 6.png'
import img6 from '../assets/images/image copy 7.png'
import img7 from '../assets/images/image copy 9.png'
import img8 from '../assets/images/image copy 8.png'
import img9 from '../assets/images/image copy 11.png'
import img10 from '../assets/images/image copy 12.png'

//===============Motion======================
import { motion, useMotionValue } from 'motion/react'
import Reveal from './Revel'

//===============HOOKS======================
import { useState } from 'react'

const image = [
    {
      img: img1,
      id:1
    },
    {
      img: img2,
      id:2
    },
    {
      img: img3,
      id:3
    },
    {
      img: img4,
      id:4
    },
    {
      img: img5,
      id:5
    },
    {
      img: img6,
      id:6
    },
    {
      img: img7, 
      id:7
    },
]


export default function SectionOne() {
    const [activeBtn, setActiveBtn] = useState(1);
    return(
        <Reveal>
            <section className='w-full h-auto md:h-314.5 flex flex-col  items-center'>
                <motion.div  className="bg-bg-color  h-auto md:h-149.75 w-full flex flex-col justify-center items-center lg:gap-32 md:gap-24  md:flex-col  md:justify-center pt-24">
                    <div className='flex flex-col-reverse h-auto md:flex-col-reverse lg:flex-row  font-custom-font lg:w-[95%] lg:h-80 w-full justify-center items-center font-semibold lg:gap-38 gap-24 md:h-162.5'>
                        <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className=' items-center text-center lg:text-start lg:items-start  lg:gap-0 justify-center mt-15 lg:h-57.5 lg:w-164.25 flex flex-col gap-4'>
                          <motion.h1 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.3}} className='text-text-color md:leading-19 text-3xl md:text-5xl lg:text-[64px] font-semibold'>Lessons and insights</motion.h1>
                          <motion.span initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='text-main-green text-4x1 md:leading-19 text-3xl md:text-5xl lg:text-[64px]  font-semibold relative lg:bottom-3  md:bottom-12 '>from 8 years</motion.span>
                          <motion.p initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className='text-p-color md:absolute -bottom-12 lg:bottom-0 lg:relative   md:text-[14px]'>Where to grow your business as a photographer: site or social media?</motion.p>
                          <button className='bg-main-green w-36.25 md:relative lg:relative lg:bottom-0 md:bottom-14   md:h-13 md:w-34 rounded-sm text-gray-100 hover:bg-green-800 hover:duration-500 duration-500 transition-all cursor-pointer active:bg-green-800 p-3.5 mt-7 mb-4 '>Register</button>
                        </motion.div>
                        <div className='h-68 w-[85%]  md:mt-2 md:h-62.5   lg:w-97.75 md:text-center  lg:h-101.75'>
                            <motion.img initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} src={img} alt="" className='w-97.75 h-101.75 relative lg:bottom-10 xl:bottom-3 sm:left-22 md:left-28  lg:left-0 object-contain'/>
                        </div>
                    </div>
                    <div className='flex flex-row w-11.5 h-2.5 gap-2 mb-2.5 md:relative md:bottom-32 lg:bottom-0'>
                        <button className={activeBtn === 1 ? 'h-2.5 w-2.5 bg-main-green rounded-[50%]': 'h-2.5 w-2.5 bg-green-200 rounded-[50%]'} onClick={() => setActiveBtn(1)}></button>
                        <button className={activeBtn === 2 ? 'h-2.5 w-2.5 bg-main-green rounded-[50%]': 'h-2.5 w-2.5 bg-green-200 rounded-[50%]'}  onClick={() => setActiveBtn(2)}></button>
                        <button className={activeBtn === 3 ? 'h-2.5 w-2.5 bg-main-green rounded-[50%]': 'h-2.5 w-2.5 bg-green-200 rounded-[50%]'}   onClick={() => setActiveBtn(3)}></button>
                    </div>
                </motion.div>
                <div className='flex flex-col justify-center items-center w-full h-auto lg:h-47.5 mt-4 lg:mt-64 gap-4'>
                    <div className='h-19 w-277.5 flex justify-center items-center flex-col gap-2'>
                      <motion.h1 initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.3}} className='text-text-color text-2xl md:text-4xl lg:text-[36px] font-semibold leading-11'>Our Clients</motion.h1>
                      <motion.p initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='text-p-color text-[11px] md:text-[16px] leading-6 font-normal'>We have been working with some Fortune 500+ clients</motion.p>
                    </div>
                    <motion.div  initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.2}} className='md:w-6xl h-24.5 flex flex-row lg:justify-evenly  md:justify-center xl:w-6xl xl:gap-34 md:gap-12 lg:gap-0 items-center justify-center w-78 [@media(min-width:375px)_and_(max-width:768px)]:w-full [@media(min-width:375px)_and_(max-width:768px)]:gap-3 [@media(min-width:500px)_and_(max-width:768px)]:justify-evenly lg:w-full  '>
                        {image.map((m)=>{
                        return(
                            <div key={m.id}>
                                <img src={m.img} alt="" srcset="" className='w-12 h-12' />
                            </div>
                        )
                        })}
                    </motion.div>
                    <Reveal animation='left'>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className='lg:h-104 h-auto w-full lg:w-360 gap-24 md:gap-4 flex flex-col  justify-center items-center mt-11  '>
                            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} className='h-30 w-360 justify-center flex flex-col gap-2 items-center text-center'>
                                <h1 className='text-text-color md:w-135.5 md:h-22 text-2xl w-78 h-auto md:text-4xl leading-11 font-semibold'>Manage your entire community in a single system</h1>
                                <p className='text-p-color h-6 w-360 text-[16px] leading-6'>Who is Nextcent suitable for?</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut", delay: 0.8 }} className='flex flex-col justify-center items-center md:flex-col gap-4 md:gap-8  lg:w-[75%] xl:w-full  lg:flex-row lg:gap-1   lg:h-70  lg:justify-evenly'>
                                <motion.div initial={{opacity:0 , x:-100}}    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className='w-74.75 h-65 rounded-lg gap-2 flex flex-col md:w-112.5 md:h-87.5 lg:w-74.75 lg:h-65 justify-center items-center text-center  shadow-[0_2px_4px_0_#ABBED133]'>
                                    <img src={img8} alt="" className='w-16.25 md:w-[40%] lg:w-16.25 md:h-32 lg:h-14 h-14' />
                                    <h1 className='text-text-color h-18 w-66.75 font-bold text-[28px] leading-9.5'>Membership Organisations</h1>
                                    <p className='text-p-color w-62.75 h-15 text-sm leading-5 font-normal '>Our membership management software provides full automation of membership renewals and payments</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut", delay: 1.5 }} className='w-74.75 h-65 rounded-lg gap-2 md:w-112.5 md:h-87.5 lg:w-74.75 lg:h-65 flex flex-col justify-center items-center text-center shadow-[0_2px_4px_0_#ABBED133]'>
                                    <img src={img9} alt="" className='w-16.25 md:w-[40%] lg:w-16.25 md:h-32 lg:h-14 h-14' />
                                    <h1 className='text-text-color h-18 w-62.5 text-center font-bold text-[28px] leading-9.5'>National Associations</h1>
                                    <p className='text-p-color w-60 h-20 text-sm leading-5 font-normal '>Our membership management software provides full automation of membership renewals and payments</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut", delay: 2 }} className='w-74.75 h-65 rounded-lg gap-2 md:w-112.5 md:h-87.5 lg:w-74.75 lg:h-65 flex flex-col justify-center items-center text-center shadow-[0_2px_4px_0_#ABBED133]'>
                                    <img src={img10} alt="" className='w-16.25 md:w-[40%] lg:w-16.25 md:h-32 lg:h-14 h-14' />
                                    <h1 className='text-text-color h-18 w-55 md:  text-[28px] leading-9.5 font-bold'>Clubs And Groups</h1>
                                    <p className='text-p-color w-62.75 h-15 text-sm leading-5 font-normal '>Our membership management software provides full automation of membership renewals and payments</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </Reveal>
                </div>
            </section>
        </Reveal>
    )
}
