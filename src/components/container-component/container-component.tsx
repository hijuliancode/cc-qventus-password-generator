interface ContainerComponentProps {
  children: React.ReactNode
}

export const ContainerComponent = ({ children }: ContainerComponentProps) => {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  )
}
