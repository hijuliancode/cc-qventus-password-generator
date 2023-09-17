import { Header, ContainerComponent } from '@/components'

interface InternalLayoutProps {
  children: React.ReactNode
}

export const InternalLayout = ({ children }: InternalLayoutProps) => {
  return (
    <ContainerComponent>
      <div className='py-6 px-8'>
        <Header />
        <main>
          {children}
        </main>
      </div>
    </ContainerComponent>
  )
}
