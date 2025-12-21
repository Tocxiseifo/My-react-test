// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Reveal from "./Revel";
import share from '../assets/images/image copy 25.png'
import logo from '../assets/images/image copy 26.png'
import instgram from '../assets/images/image copy 27.png'
import basket from '../assets/images/image copy 28.png'
import x from '../assets/images/image copy 29.png'
import youtube from '../assets/images/image copy 30.png'
import wing from '../assets/images/image copy 31.png'

export default function Footer() {
    return(
        <Reveal>
            <footer className="w-full h-157 flex flex-col justify-center items-center  mt-20 ">
                <div className="w-full h-75  gap-8 bg-bg-color flex flex-col justify-center items-center pb-3.5">
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}}  className="text-[64px] w-221.75 h-38 leading-19 font-semibold text-center text-[#263238]">Pellentesque suscipit fringilla libero eu.</motion.h1>
                    <span className="w-44.5 h-13 rounded-sm gap-2 bg-main-green text-white justify-center items-center flex flex-row cursor-pointer hover:bg-green-800 active:bg-green-800 hover:duration-500 duration-500 transition-all">Get a Demo<img src={share} alt="" srcset="" className="w-4 h-4 " /></span>
                </div>
                <div className="bg-footer-color w-full h-82 gap-31.25 flex flex-col md:flex-row md:justify-center md:items-center ">
                    <div className="w-87.5 h-47.5 gap-10 flex flex-col items-start">
                        <motion.img src={logo} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-47.75 h-[29.67px] gap-2.5" alt="" srcset="" />
                        <div className="w-87.5 h-12 gap-2 flex flex-col text-start">
                            <motion.p className="text-bg-color font-normal text-sm leading-5 h-5 w-87.5" whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} >Copyright © 2020 Nexcent ltd.</motion.p>
                            <motion.p className="text-bg-color font-normal text-sm leading-5 h-5 w-87.5" whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.8}} >All rights reserved</motion.p>
                            <div className="w-44 h-8 gap-4 flex flex-row">
                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.3'}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={instgram} alt="" className="w-4 h-4" />
                                </motion.div>

                                <motion.div initial={{opacity:0 ,x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' , delay:'0.5'}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img src={basket} alt="" className="w-4 h-4" />
                                </motion.div>

                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'0.7'}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={x} alt="" className="w-3.5 h-3.5" />
                                </motion.div>

                                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}  transition={{duration:1 , ease:'easeOut' , delay:'1'}} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 cursor-pointer">
                                    <img  src={youtube} alt="" className="w-4 h-3" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , x:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-158.75 h-50 gap-7.5 flex flex-row">
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-40 h-50 gap-6 flex flex-col">
                            <h1 className="text-white font-semibold text-[20px] leading-7 w-40 h-7">Company</h1>
                            <div className="w-40 h-37 gap-3 flex flex-col">
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.3}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">About us</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Blog</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Contact us</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Pricing</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.2}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Testimonials</motion.p>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:0.9}} className="w-40 h-50 gap-6 flex flex-col">
                            <h1 className="text-white font-semibold text-[20px] leading-7 w-40 h-7">Support</h1>
                            <div className="w-40 h-37 gap-3 flex flex-col">
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Help center</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.3}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Terms of service</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Legal</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.8}} className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Privacy policy</motion.p>
                                <motion.p whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:2}}  className="text-bg-color w-40 h-5 font-normal text-sm leading-5 cursor-pointer hover:underline">Status</motion.p>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.2}} className="w-62.5 h-23 flex flex-col gap-6">
                            <motion.h1 whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="text-white font-semibold text-[20px] leading-7 w-40 h-7">Stay up to date</motion.h1>
                            <motion.label whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} initial={{opacity:0 , y:-100}}   transition={{duration:1 , ease:'easeOut' ,delay:1.9}} className="relative w-64.75 h-10 block">
                                <img src={wing} alt="" className="w-4 h-4 absolute top-2.5 left-56.25"/>
                                <input type="text" className="w-full h-full rounded-lg bg-white/10 text-[#D9DBE1] placeholder:text-[#D9DBE1] pl-4 outline-none" placeholder="Your email address"/>
                            </motion.label>
                        </motion.div>
                    </motion.div>
                </div>
            </footer>
        </Reveal>
    )
} 