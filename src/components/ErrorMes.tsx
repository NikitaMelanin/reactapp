import React from 'react'

interface ErrorMessProps {
   error: string
}

export function Error ({error}: ErrorMessProps) {
   return (
      <p className ='text-center text-red-600'> {error}</p>
   )

}