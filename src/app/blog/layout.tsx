import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row">{children}</main>
    </>
  )
}
