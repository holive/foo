import { render, screen } from '@testing-library/react'
import React from 'react'

import { AppContext } from '@/presentation/contexts'

import { Modal } from './Modal'

const makeSut = (openModal = false): void => {
  render(
    <AppContext.Provider
      value={{
        openModal,
        postList: [],
        setPostList: jest.fn(),
        setOpenModal: jest.fn(),
        fetchFoodList: { loadAll: jest.fn() },
        postFoodItem: { postItem: jest.fn() },
        deleteFoodItem: { removeItem: jest.fn() }
      }}
    >
      <Modal />
    </AppContext.Provider>
  )
}

describe('Modal Component', () => {
  test('Should not be present on first render', async () => {
    makeSut()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })
})
