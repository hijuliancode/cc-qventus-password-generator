import React from 'react'

interface PublicLayoutProps {
  children: React.ReactNode
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <h1>Public Layout</h1>
      {children}
    </div>
  )
}
