import { Outlet } from 'react-router-dom'
import { InternalLayout } from '@/layouts/index'

function App() {
  return (
    <InternalLayout>
      <Outlet />
    </InternalLayout>
  )
}

export default App
