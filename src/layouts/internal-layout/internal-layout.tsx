import React from 'react'

interface InternalLayoutProps {
  children: React.ReactNode
}

export const InternalLayout = ({ children }: InternalLayoutProps) => {
  return (
    <div>
      <h1>Internal Layout</h1>
      {children}
    </div>
  )
}
