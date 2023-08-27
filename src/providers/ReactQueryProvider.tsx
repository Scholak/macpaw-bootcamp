'use client'

import { queryCLient } from '@/lib/queryClient'
import React from 'react'
import { QueryClientProvider } from 'react-query'

interface ReactQueryProviderProps {
  children: React.ReactNode
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
