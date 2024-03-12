import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }
  const clicked = () => {
    setIsVisible (false)
  }


  return (
    <nav className = 'flex items-center justify-between flex-wrap bg-slate-300 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight'>miCarInventory</Link>
      </div>
      <div className='block'>
        <button onClick={dropDown} className='flex items-center px-3 py-2 text-white  border roudner border-white hover:text-slate-50 hover:border-slate-50'>
          <i className='fas fa-bars'></i>
        </button>
      </div>
      { isVisible ? (
        <div className='w-full-block flex-goow items-center'>
          <div className='text-sm lg:flex-grow'>
            <button className='p-3 m-5 bg-slate-300 justify-center'>
              <div>
                <Link to = '/' onClick={clicked} className='flex place-items-center mt-4 ls:inline0block lg:mt-0 text-white hover:text-slate-50 mr-4'>Home</Link>
              </div>
            </button>
          </div>
          <button className='p-3 m-5 bg-slate-300 justify-center'>
              <div>
                <Link to = '/about' onClick={clicked} className='flex place-items-center mt-4 ls:inline0block lg:mt-0 text-white hover:text-slate-50 mr-4'>About</Link>
              </div>
            </button>
            <button className='p-3 m-5 bg-slate-300 justify-center'>
              <div>
                <Link to = '/inventory' onClick={clicked} className='flex place-items-center mt-4 ls:inline0block lg:mt-0 text-white hover:text-slate-50 mr-4'>MiInventory</Link>
              </div>
            </button>
            <button className='p-3 m-5 bg-slate-300 justify-center'>
              <div>
                <Link to = '/profile' onClick={clicked} className='flex place-items-center mt-4 ls:inline0block lg:mt-0 text-white hover:text-slate-50 mr-4'>Profile</Link>
              </div>
            </button>
        </div>
      ) : (
        <></>
      ) }
    </nav>
  )
}

export default Navbar
