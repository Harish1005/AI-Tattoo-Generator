import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-white/70 backdrop-blur'>
      <div className='max-w-6xl mx-auto p-6 flex justify-between items-center'>
        <motion.div
          initial={{opacity:0, x:-25}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.50}}
          className='font-extrabold text-2xl'>
            <Link to="/">
              Tattoo <span className='text-indigo-700'>Studio</span>
            </Link>
        </motion.div>
        <motion.div
          initial={{opacity:0, x:25}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.50}}
          className=' border-2 border-indigo-700 px-3 py-2 rounded-full hover:bg-indigo-800 cursor-pointer shadow-lg'>
            🙎‍♂️
          </motion.div>
      </div>
    </header>
  )
}

export default Header
