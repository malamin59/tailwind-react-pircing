import React, { useState } from 'react';
import Link from '../Link/Link';
import { Menu, X} from 'lucide-react';

const navigationData = [
    {
      id: "home",
      name: "Home",
      path: "/home"
    },
    {
      id: "about",
      name: "About", 
      path: "/about"
    },
    {
      id: "services",
      name: "Services",
      path: "/services"
    },
    {
      id: "portfolio",
      name: "Portfolio",
      path: "/portfolio"
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact"
    }
  ];
  


const NabBar = () => {
    const [open, setOpen] = useState(false);
    
    
    const links =navigationData.map(route => <Link key={route.id} route={route}> </Link>)
    return (
        
        <nav className='flex justify-between mx-4 mt-1'>
    <span className='flex' onClick={()=> setOpen(!open)} >
         {
        open ?  
         <X  className='md:hidden' ></X> : 
          <Menu className='md:hidden'></Menu> 
        }

<ul className={`md:hidden  text-black
  absolute 
  ${open ? 'top-6' : '-top-40' }
  bg-amber-600 ml-5 duration-1000` }> 

    { 
        links
    }
</ul>

        
    <h3 className='ml-4'> My  Navbar  </h3>
    </span>
<ul className='md:flex hidden'>
  {
      links
      
}
</ul>
        
            
            {/* <ul className='flex'>
                <li className='mr-10'> <a href="/"> Home</a></li>
                <li className='mr-10'> <a href="/"> About</a></li>
                <li className='mr-10'> <a href="/"> Blog</a></li>
            </ul> */}
 <button>sin in </button>
        </nav>

    
    );
};

export default NabBar;