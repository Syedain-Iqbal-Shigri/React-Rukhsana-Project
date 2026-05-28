import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const openModal = (pkg = null) => {
    setSelectedPackage(pkg)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedPackage(null)
  }

  return (
    <BookingContext.Provider value={{ isOpen, openModal, closeModal, selectedPackage }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)
