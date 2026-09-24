import Image from 'next/image'
import logo from '../public/assets/images/logo-light.svg'

const Logo = () => {
    return (
        <div className='relative cursor-pointer'>
          <Image src={logo} alt="Workit"/>
        </div>
    )
}

export default Logo
