import { useState } from 'react';
import img from '../assets/images/image.png'
//=================Naterial UI===============
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function NavBar() {
    const [openNav , setOpenNav] = useState(false)

    function handleOpenNav() {
        if (openNav === false) {
            setOpenNav(() => true)
        }else if(openNav === true) {
            setOpenNav(() => false )
        }
    }

    return(
        <>
            <nav className='bg-bg-color text-nav-color justify-between flex  flex-row md:justify-evenly  md:pt-4 md:h-21 font-custom-font  md:flex  md:flex-row md:items-center '>
                <img src={img} alt="" className='w-38.75 h-6' />
                <div className=' flex-col gap-10 list-none hidden  text-[16px] text-nav-color  md:flex md:flex-row md:items-center'>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Home</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a className='relative z-10' href="#">Service</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Feature</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Product</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">Testimonial</a></li>
                    <li className='hover:text-main-green transition-all duration-500 hover:duration-500 active:text-main-green active:duration-500'><a href="#">FAQ</a></li>
                </div>
                <div className='flex flex-row gap-4'>
                    <button className='hidden md:flex md:justify-center md:items-center text-main-green bg-white cursor-pointer w-19.25 h-10 rounded-md hover:bg-gray-200 hover:duration-500 duration-300 transition-all'>Login</button>
                    <button  className='hidden md:flex text-white md:justify-center md:items-center bg-main-green cursor-pointer w-22.75 h-10 rounded-md hover:bg-green-800 hover:duration-500 duration-500 transition-all'>Sign up</button>
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
            </nav>
        </>
    )
}