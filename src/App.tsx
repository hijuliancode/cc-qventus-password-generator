import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [isAuthenticated] = React.useState(true)

  return (
    <>
      {isAuthenticated ? (
        <div className='bg-green-500'>
          {/* TODO INTERNAL LAYOUT */}
          <Outlet />
        </div>
      ) : (
        <div className='bg-red-500'>
          {/* TODO: PUBLIC LAYOUT */}
          <Outlet />
        </div>
      )}
    </>
  )
}

export default App
