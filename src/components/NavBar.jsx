/* eslint-disable no-unused-vars */
import { useState } from 'react';
import img from '../assets/images/image.png'

//=================Naterial UI===============
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { motion } from 'motion/react';
import Reveal from './Revel';

const variants ={
    hidden:{opacity:0} ,
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.25
        },
    },
}


export default function NavBar() {
    const [openNav , setOpenNav] = useState(false)

    function handleOpenNav() {
        if (openNav === false) {
            setOpenNav(() => true)
        }else if(openNav === true) {
            setOpenNav(() => false)
        }
    }

    return(
        <>
            <motion.nav className='pb-2 bg-bg-color text-nav-color items-center justify-between flex  flex-row md:justify-evenly  md:pt-4 md:h-21 font-custom-font  md:flex  md:flex-row md:items-center h-10'>
                <motion.img initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}}  src={img} alt="" className='w-38.75 h-6' />
                <motion.div  initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className=' flex-col gap-10 list-none hidden  text-[16px] text-nav-color  md:flex md:flex-row md:items-center'>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Home</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Service</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Feature</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Product</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Testimonial</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">FAQ</a></li>
                </motion.div>
                <div className='flex flex-row gap-4'>
                    <motion.button initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='hidden md:flex md:justify-center md:items-center text-main-green bg-white cursor-pointer w-19.25 h-10 rounded-md hover:bg-gray-200 hover:duration-500 duration-300 transition-all'>Login</motion.button>
                    <motion.button initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:1}}  className='hidden md:flex text-white md:justify-center md:items-center bg-main-green cursor-pointer w-22.75 h-10 rounded-md hover:bg-green-800 hover:duration-500 duration-500 transition-all'>Sign up</motion.button>
                    <button className='md:hidden flex justify-center items-center'><DragHandleIcon className='text-main-green' onClick={handleOpenNav} value={openNav}/></button>
                    <Drawer
                        variant="persistent"
                        anchor="right"
                        open={openNav}
                    >
                        <IconButton onClick={handleOpenNav}>
                            <DragHandleIcon/>
                        </IconButton>
                        <Divider />
                        <List className='w-40'>
                            <ListItem disablePadding className='flex flex-col gap-3'>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Home</a></li>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Service</a></li>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Feature</a></li>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Product</a></li>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Testimonial</a></li>
                                <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">FAQ</a></li>
                                <button  className=' flex justify-center items-center text-white md:justify-center md:items-center bg-main-green cursor-pointer w-22.75 h-10 rounded-md hover:bg-green-800 hover:duration-500 duration-500 transition-all active:bg-green-800 active:duration-500'>Sign up</button>
                                <button className='flex justify-center items-center md:justify-center md:items-center text-main-green bg-white cursor-pointer w-19.25 h-10 rounded-md hover:bg-gray-200 hover:duration-500 duration-300 transition-all active:bg-gray-200  active:duration-100'>Login</button>
                            </ListItem>
                        </List>
                    </Drawer>
                </div>
            </motion.nav>
        </>
    )
}