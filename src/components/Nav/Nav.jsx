import { motion } from "framer-motion"

import { DotsIcon, CloseIcon } from "@/components/Icons"
import Dialog from '@mui/material/Dialog'
import { useState, forwardRef } from 'react'
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
})

export function Nav() {
  const [open, setIsOpen] = useState(false)
  const handleDialogOpen = () => {
    setIsOpen(true)
  }
  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const MobileNavLink = ({...rest}) => <NavLink {...rest} onClick={handleDialogClose} />

  return (
    <div className="fixed top-0 left-0 px-4 md:px-6 z-50 w-full bg-white">

      <div className="flex justify-between items-center h-16 md:h-20">

        <a href="#hero">
          <div className="flex flex-col group text-[#66bfff] hover:text-pink-300 cursor-pointer group-hover:text-pink-300">
            <span className="text-xl md:text-3xl font-extrabold">DAKOTA ARSENEAULT</span>
            <SplitText text="VIDEO EDITOR | MOTION DESIGNER" className="text-[13px] md:text-[19.5px] font-bold text-[#66bfff] group-hover:text-pink-300 cursor-pointer" />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:block p-4">
          <div className="flex text-[#66bfff] justify-end gap-3">
            <NavLink href="#reel">
              REEL
            </NavLink>
            
            <NavLink href="#work">
              WORK
            </NavLink>
            
            <NavLink href="#contact">
              CONTACT
            </NavLink>
          </div>
        </div>
        
        {/* Mobile nav */}
        <div className="md:hidden">
          <button onClick={handleDialogOpen}>
            <DotsIcon className="fill-[#66bfff] size-10 hover:fill-pink-300 cursor-pointer" />
          </button>
        </div>
        <Dialog
            open={open}
            onClose={handleDialogClose}
            fullScreen
            slots={{
              transition: Transition
            }}
          >
            <div className="relative w-full h-full bg-white">
              <button
                onClick={handleDialogClose}
                type="button"
                className="absolute z-50 top-4 text-2xl right-4 group cursor-pointer transition-transform duration-200 hover:scale-120 hover:drop-shadow-md"
              >
                <CloseIcon className="fill-[#66bfff] size-10" />
              </button>
              <div className="flex flex-col gap-4 text-[#66bfff] pt-20 px-6">
                <MobileNavLink href="#reel">
                  REEL
                </MobileNavLink>
                <Hairline />
                
                <MobileNavLink href="#work">
                  WORK
                </MobileNavLink>
                
                <MobileNavLink href="#contact">
                  CONTACT
                </MobileNavLink>
          </div>
            </div>
          </Dialog>

      </div>

    </div>
  )

}

function Hairline() {
  return (
    <div className="w-full h-1 bg-[#66bfff]"/>
  )
}

const NavLink = ({ href, children, ...rest }) => {
  return (
    <a
      href={href}
      className="hover:text-pink-300 text-xl md:text-2xl font-bold hover:underline"
      {...rest}
    >
      {children}
    </a>
  )}
  
function SplitText({ text, className }) {
  const letters = text.split("")

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
      className="inline-block"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.3 }}
          className={`inline-block ${className}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
  