import { cn } from '@/lib/cn'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-2xl px-2.5 md:px-12 2xl:px-12', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper