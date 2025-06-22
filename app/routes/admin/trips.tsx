import { Header } from 'components'
import React from 'react'

const Trips = () => {
  return (
    <main className="all-users wrapper">
        <Header
          title="Trips"
          description="Manage your trips here"
          ctaText="Create Trip"
          ctaLink="/trips/create"
        />
    </main>
  )
}

export default Trips