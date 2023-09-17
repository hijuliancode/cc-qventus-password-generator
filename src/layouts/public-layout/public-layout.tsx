import { ContainerComponent } from '@/components'

interface PublicLayoutProps {
  children: React.ReactNode
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <ContainerComponent>
      <h1>Public Layout</h1>
      {children}
    </ContainerComponent>
  )
}
