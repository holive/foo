import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/outline'
import React, { Fragment, useContext } from 'react'

import { AppContext } from '@/presentation/contexts'

import { Form } from './components'

export const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
export const foodType = ['protein', 'carbohydrate', 'fat']
export const colorByType = {
  [foodType[0]]: '#6DDEAC',
  [foodType[1]]: '#AC6DDE',
  [foodType[2]]: '#DECB6D'
}

export const Modal: React.FC = () => {
  const { openModal, setOpenModal } = useContext(AppContext)

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpenModal}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          data-testid="modal"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full pt-1.5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-black-100"
                    >
                      <PlusIcon
                        className="h-6 w-6 text-primary inline mr-3"
                        aria-hidden="true"
                      />
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Let's add a new item
                    </Dialog.Title>

                    <Form setOpen={setOpenModal} />
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
