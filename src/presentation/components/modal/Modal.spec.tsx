import { render, screen } from '@testing-library/react'
import React from 'react'

import { AppContext } from '@/presentation/contexts'

import { Modal } from './Modal'

type SutTypes = {}

const makeSut = (openModal = false): SutTypes => {
  render(
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal: jest.fn(),
        fetchFoodList: { loadAll: jest.fn() },
        postFoodItem: { postItem: jest.fn() }
      }}
    >
      <Modal />
    </AppContext.Provider>
  )

  return {}
}

describe('Modal Component', () => {
  test('Should not be present on first render', async () => {
    makeSut()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })
})
