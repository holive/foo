import React, { useContext } from 'react'

import { AppContext } from '@/presentation/contexts'

import { Logo } from './Logo'

export const Header: React.FC = () => {
  const { setOpenModal } = useContext(AppContext)

  return (
    <div className="container mx-auto">
      <nav className="py-2 md:py-6">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Logo />
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <button
              onClick={() => setOpenModal(true)}
              className="p-2 lg:px-4 md:mx-2 text-primary text-center border border-solid border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              ADD NEW
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
