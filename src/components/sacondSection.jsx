/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react'
import img13 from '../assets/images/image copy 13.png'
import img14 from '../assets/images/image copy 14.png'
import img15 from '../assets/images/image copy 15.png'
import img16 from '../assets/images/image copy 16.png'
import img17 from '../assets/images/image copy 18.png'
import img18 from '../assets/images/image copy 17.png'
import img19 from '../assets/images/image copy 19.png'


///
import img20 from '../assets/images/image copy 20.png'
import img21 from '../assets/images/image copy 3.png'
import img22 from '../assets/images/image copy 4.png'
import img23 from '../assets/images/image copy 5.png'
import img24 from '../assets/images/image copy 6.png'
import img25 from '../assets/images/image copy 7.png'
import img26 from '../assets/images/image copy 21.png'
import img27 from '../assets/images/image copy 22.png'
import img28 from '../assets/images/image copy 23.png'
import img29 from '../assets/images/image copy 24.png'

//=============Import Motion===========
import { motion , useInView, useScroll } from 'motion/react'
import Counter from './animation'
import Reveal from './Revel'

const variantChildrens ={hidden: {opacity: 0} , show: {opacity:1}}
export default function SecondSection() {
    
    return(
        <Reveal>
            <section className="h-[2242.4px] w-full flex flex-col gap-12">
                <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}  initial={{opacity:0 , y:-100}}  transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="w-full h-108.25 flex flex-col md:flex-row md:justify-center  md:items-center ">
                    <motion.img  initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} src={img13} alt="" className='w-110.5 h-108.25' />
                    <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}}  className='flex flex-col justify-center items-start text-center md:flex-col h-67 w-165.25 gap-4'>
                        <h1 className='h-22 w-137.5 text-4xl leading-11 text-left text-text-color font-semibold'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='h-20 w-150.25 text-p-color text-sm leading-5 font-normal text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='w-37.75 h-13 rounded-sm bg-main-green text-gray-100 hover:bg-green-800 active:bg-green-800 hover:duration-500 duration-500 transition-all cursor-pointer'>Learn More</button>
                    </motion.div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:100}}  transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className='w-full  h-72 flex flex-col justify-center items-center md:flex md:flex-row md:justify-evenly md:items-center md:text-center bg-bg-color'>
                    <motion.div initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className='w-135 h-30 flex flex-col text-start'>
                        <motion.h1 initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.9}} className='w-92.5 text-text-color text-4xl leading-11 font-semibold'>Helping a local <motion.span initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.2}} className='text-main-green text-4xl leading-11 font-semibold '>business reinvent itself</motion.span></motion.h1>
                        <motion.p initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.3}} className='text-[#18191F] text-[16px] leading-6 font-normal'>We reached here with our hard work and dedication</motion.p>
                    </motion.div>
                    <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className='w-135 h-40 flex flex-col flex-wrap gap-10'>
                        <motion.div initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1}} className='flex flex-row w-135 h-15 gap-7.5'>
                            <div className='w-63.75 h-15 flex flex-row gap-4 items-center'>
                                <img src={img14} alt="" className='w-12 h-12' />
                                <div className='w-47.75 h-15 flex flex-col text-start '>
                                    <h1 className='text-text-color text-[28px] leading-9 font-bold'><Counter value={2245341} /> </h1>
                                    <p className='text-p-color text-[16px] leading-6'>Members</p>
                                </div>
                            </div>
                            <div className='w-63.75 h-15 flex flex-row gap-4 items-center'>
                                <img src={img17} alt="" className='w-12 h-12' />
                                <div className='w-47.75 h-15 flex flex-col text-start '>
                                    <h1 className='text-text-color text-[28px] leading-9 font-bold'><Counter value={46328}/> </h1>
                                    <p className='text-p-color text-[16px] leading-6'>Clubs</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className='flex flex-row w-135 h-15 gap-7.5'>
                            <div className='w-63.75 h-15 flex flex-row gap-4 items-center'>
                                <img src={img15} alt="" className='w-12 h-12' />
                                <div className='w-47.75 h-15 flex flex-col text-start '>
                                    <h1 className='text-text-color text-[28px] leading-9 font-bold'><Counter value={828867}/></h1>
                                    <p className='text-p-color text-[16px] leading-6'>Event Bookings</p>
                                </div>
                            </div>
                            <div className='w-63.75 h-15 flex flex-row gap-4 items-center'>
                                <img src={img16} alt="" className='w-12 h-12' />
                                <div className='w-47.75 h-15 flex flex-col text-start '>
                                    <h1 className='text-text-color text-[28px] leading-9 font-bold'><Counter value={1926436}/> </h1>
                                    <p className='text-p-color text-[16px] leading-6'>Payments</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}  initial={{opacity:0 , y:-100}}  transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="w-full h-108.25 flex flex-col md:flex-row md:justify-center  md:items-center ">
                    <motion.img  initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} src={img18} alt="" className='w-110.5 h-108.25 relative right-12' />
                    <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}}  className='flex flex-col justify-center gap-8 items-start text-center md:flex-col h-77 w-150.25 '>
                        <div className='w-152.25 h-56 gap-3 flex flex-col'>
                            <h1 className='h-22 w-137.5 text-4xl leading-11 text-left text-text-color font-semibold'>How to design your site footer like we did</h1>
                            <p className='h-20 w-150.25 text-p-color text-sm leading-5 font-normal text-start'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        </div>
                        <button className='w-37.75 h-13 rounded-sm bg-main-green text-gray-100 hover:bg-green-800 active:bg-green-800 hover:duration-500 duration-500 transition-all cursor-pointer'>Learn More</button>
                    </motion.div>
                </motion.div>
                <Reveal>
                    <motion.div  initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} className='w-full h-97.5 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:text-center md:gap-19.5 bg-bg-color' >
                        <motion.img className='w-81.5 h-81.5' src={img19} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} />
                        <motion.dev className='w-187 h-81 gap-8'initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}>
                            <motion.dev  className='h-81 w-187 gap-4 flex flex-col justify-center text-start'>
                                <p className='text-p-color h-42 w-187 text-[16px] leading-6 font-medium'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                                <span className='text-main-green text-[20px] leading-7 font-semibold'>Tim Smith</span>
                                <p className='text-[#89939E] text-[16px] leading-6 font-normal'>British Dragon Boat Racing Association</p>
                                <div className='w-187 h-12 gap-8 flex flex-row items-center'>
                                    <div className='w-123.25 h-12 gap-10.25 flex flex-row'>
                                        <motion.img src={img20} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.3'}} className='w-12 h-12 rounded-lg'/> 
                                        <motion.img src={img21} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.5'}} className='w-12 h-12 rounded-lg'/>
                                        <motion.img src={img22} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.7'}} className='w-12 h-12 rounded-lg'/>
                                        <motion.img src={img23} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.9'}} className='w-12 h-12 rounded-lg'/>
                                        <motion.img src={img24} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'1'}} className='w-12 h-12 rounded-lg'/>
                                        <motion.img src={img25} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'1.2'}} className='w-12 h-12 rounded-lg'/>
                                    </div>
                                    <span className='text-main-green w-55.75 h-11 font-semibold text-[20px] leading-7 flex flex-row justify-center items-center cursor-pointer  hover:text-green-800 active:text-green-800 hover:duration-500 duration-500 transition-all'>Meet all customers <img src={img26} alt="" className='w-6 h-6' /></span>
                                </div>
                            </motion.dev>
                        </motion.dev>
                    </motion.div>
                </Reveal>
                <Reveal>
                    <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:100}}  transition={{duration:1 , ease:'easeOut' , delay:'0.3'}} className='w-full h-126.5 flex flex-col gap-4 items-center text-center'>
                        <div>
                            <motion.h1  initial={{opacity:0 , y:-100}} transition={{duration:1 , ease:'easeOut' , delay:'0.5'}} className='text-text-color font-semibold text-4xl leading-11 mb-2'>Caring is the new marketing</motion.h1>
                            <motion.p initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}    transition={{duration:1 , ease:'easeOut' , delay:'0.5'}} className='text-p-color w-157 h-18'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</motion.p>
                        </div>
                            <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' , delay:'0.7'}} className='h-91.5 w-full flex flex-col justify-center items-center md:gap-4 md:flex-row md:justify-center md:items-center md:-mt-14'>
                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' , delay:'0.5'}} className='w-92 h-91.5  relative flex flex-col justify-center items-center'>
                                    <div>
                                        <img src={img27} alt="" srcset="" className='w-92 h-71.5 rounded-lg' />
                                    </div> 
                                    <div className='w-79.25 h-44 rounded-lg gap-4 flex flex-col text-center justify-center items-center bg-bg-color -m-24 z-10 hover:duration-500 duration-500 transition-all hover:scale-110 shadow-[0px_8px_16px_0_#ABBED166]'>
                                        <h1 className='text-p-color text-[20px]  leading-7 w-71.25 h-21 font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</h1>
                                        <span className='text-main-green w-71.25 gap-2 h-11 font-semibold text-[20px] leading-7 flex flex-row justify-center items-center cursor-pointer hover:text-green-800 active:text-green-800 hover:duration-500 duration-500 transition-all '>Readmore <img src={img26} alt="" className='w-6 h-6' /></span>
                                    </div>
                                </motion.div>
                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' , delay:'0.8'}} className='w-92 h-91.5  relative flex flex-col justify-center items-center '>
                                    <div>
                                        <img src={img28} alt="" srcset="" className='w-92 h-71.5 rounded-lg' />
                                    </div> 
                                    <div className='w-79.25 h-44 rounded-lg gap-4 flex flex-col text-center justify-center items-center bg-bg-color -m-24 z-10 hover:duration-500 duration-500 transition-all hover:scale-110 shadow-[0px_8px_16px_0_#ABBED166]'>
                                        <h1 className='text-p-color text-[20px]  leading-7 w-71.25 h-21 font-semibold'>What are your safeguarding responsibilities and how can you manage them?</h1>
                                        <span className='text-main-green w-71.25 gap-2 h-11 font-semibold text-[20px] leading-7 flex flex-row justify-center items-center cursor-pointer  hover:text-green-800 active:text-green-800 hover:duration-500 duration-500 transition-all'>Readmore <img src={img26} alt="" className='w-6 h-6' /></span>
                                    </div>
                                </motion.div>
                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' , delay:'1.2'}} className='w-92 h-91.5  relative flex flex-col justify-center items-center'>
                                    <div>
                                        <img src={img29} alt="" srcset="" className='w-92 h-71.5 rounded-lg' />
                                    </div> 
                                    <div className='w-79.25 h-44 rounded-lg gap-4 flex flex-col text-center justify-center items-center bg-bg-color -m-24 z-10 hover:duration-500 duration-500 transition-all hover:scale-110 shadow-[0px_8px_16px_0_#ABBED166]'>
                                        <h1 className='text-p-color text-[20px]  leading-7 w-71.25 h-21 font-semibold'>Revamping the Membership Model with Triathlon Australia</h1>
                                        <span className='text-main-green w-71.25 gap-2 h-11 font-semibold text-[20px] leading-7 flex flex-row justify-center items-center cursor-pointer  hover:text-green-800 active:text-green-800 hover:duration-500 duration-500 transition-all'>Readmore <img src={img26} alt="" className='w-6 h-6' /></span>
                                    </div>
                                </motion.div>
                            </motion.div>
                    </motion.div>
                </Reveal>
            </section>
        </Reveal>
    )
}