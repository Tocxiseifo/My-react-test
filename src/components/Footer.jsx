// eslint-disable-next-line no-unused-vars
import { motion , useInView} from "motion/react";
import Reveal from "./Revel";
import share from '../assets/images/image copy 25.png'
import logo from '../assets/images/image copy 26.png'
import instgram from '../assets/images/image copy 27.png'
import basket from '../assets/images/image copy 28.png'
import x from '../assets/images/image copy 29.png'
import youtube from '../assets/images/image copy 30.png'
import wing from '../assets/images/image copy 31.png'

import { useRef } from "react";

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
            <footer className="w-full h-157 flex flex-col justify-center items-center  mt-20 ">
                <div ref={ref} className="w-full h-75  gap-8 bg-bg-color flex flex-col justify-center items-center pb-3.5">
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}}  className="text-2xl lg:text-[64px] md:text-5xl w-full h-auto lg:w-221.75 lg:h-38 leading-19 font-semibold text-center text-[#263238]">Pellentesque suscipit fringilla libero eu.</motion.h1>
                    <span className="w-44.5 h-13 rounded-sm gap-2 bg-main-green text-white justify-center items-center flex flex-row cursor-pointer hover:bg-green-800 active:bg-green-800 hover:duration-500 duration-500 transition-all">Get a Demo<img src={share} alt="" srcset="" className="w-4 h-4 " /></span>
                </div>
                <div className="bg-footer-color w-full h-1000 md:h-82 md:gap-31.25  lg:gap-2 xl:gap.31.25 flex flex-col md:flex-row md:justify-center md:items-center ">
                    <div ref={ref} className="w-87.5 h-47.5 gap-10 flex flex-col items-start ml-3 md:pl-48  lg:pl-10  md:ml-0">
                        <motion.img  src={logo} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="md:w-47.75 mt-5 md:mt-0 h-6.5 w-35 md:h-[29.67px] gap-2.5" alt="" srcset="" />
                        <div className="w-87.5 h-12 gap-2 flex flex-col text-start  ">
                            <motion.p className="text-bg-color font-normal text-sm leading-5 h-5 w-87.5" whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} >Copyright © 2020 Nexcent ltd.</motion.p>
                            <motion.p className="text-bg-color font-normal text-sm leading-5 h-5 w-87.5" whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.8}} >All rights reserved</motion.p>
                            <div className="md:w-44 md:h-8 w-full h-auto gap-4  flex flex-row">
                                <motion.div
                                initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{duration:1 , ease:'easeOut' ,delay:0.4}}
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={instgram} alt="" className="w-4 h-4" />
                                </motion.div>

                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{duration:1 , ease:'easeOut' ,delay:0.7}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img src={basket} alt="" className="w-4 h-4" />
                                </motion.div>

                                <motion.div  initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{duration:1 , ease:'easeOut' ,delay:1}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={x} alt="" className="w-3.5 h-3.5" />
                                </motion.div>

                                <motion.div  initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={youtube} alt="" className="w-4 h-3" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-158.75 md:h-50 h-60 gap-7.5 flex flex-row ml-3 md:ml-0  ">
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-40 h-50 gap-6 flex flex-col">
                            <h1 className="text-white font-semibold text-[20px] leading-7 w-40 h-7">Company</h1>
                            <div className="w-40 h-37 gap-3 flex flex-col">
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.3}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">About us</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Blog</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Contact us</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Pricing</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.2}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Testimonials</motion.p>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.9}} className="w-40 h-50 gap-6 flex flex-col">
                            <h1 className="text-white font-semibold text-[20px] leading-7 w-40 h-7">Support</h1>
                            <div className="w-40 h-37 gap-3 flex flex-col">
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Help center</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.3}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Terms of service</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Legal</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.8}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Privacy policy</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:2}}  className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Status</motion.p>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.2}} 
                        className="md:w-62.5 w-full h-33  flex flex-col gap-6 mt-56 lg:mt-0  lg:right-6 xl:right-0 lg:pr-0 [@media(min-width:375px)_and_(max-width:1024px)]:pr-260 [@media(min-width:375px)_and_(max-width:1024px)]:pl-5    relative right-100 md:right-140  pr-28  md:-ml-65 lg:ml-0  pl-3 bg-footer-color">
                            <motion.h1 whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="text-white font-semibold text-[20px] md:ml-35 lg:ml-0 leading-7 w-40 h-7">Stay up to date</motion.h1>
                            <motion.label whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.9}} className="relative w-64.75 h-10 md:ml-34 lg:ml-0 flex">
                                <img src={wing} alt="" className="w-4 h-4 absolute top-2.5 left-56.25"/>
                                <input type="text" className="w-full h-full rounded-lg bg-white/10 text-[#D9DBE1] placeholder:text-[#D9DBE1] pl-4 outline-none" placeholder="Your email address"/>
                            </motion.label>
                        </motion.div>
                    </motion.div>
                </div>
            </footer>
    )
} 