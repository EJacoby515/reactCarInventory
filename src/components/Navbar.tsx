import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>miCarInventory</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-slate-200 border rounded border-slate-400 hover:text-white hover:border-white'>
                    
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 bg-slate-400 justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-slate-200 hover:text-white mr-4'>
                                Home
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-3 m-5 bg-slate-400 justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-slate-200 hover:text-white mr-4'>
                                About
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-3 m-5 bg-slate-400 justify-center'>
                        <div>
                            <Link to='/inventory' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-slate-200 hover:text-white mr-4'>
                                miCarInventory
                            </Link>
                        </div>

                    </Button>

                    <Button className='p-3 m-5 bg-slate-400 justify-center'>
                        <div>
                            <Link to='/profile' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-slate-200 hover:text-white mr-4'>
                                Profile
                            </Link>
                        </div>

                    </Button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar