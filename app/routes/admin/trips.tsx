import { Header, TripCard } from 'components'
import React, { useState } from 'react'
import { useSearchParams, type LoaderFunctionArgs } from 'react-router'
import { getAllTrips } from '~/appwrite/trip'
import { parseTripData } from '~/lib/utils'
import type { Route } from './+types/trips'
import { PagerComponent } from '@syncfusion/ej2-react-grids'


export const loader = async ({ request }: LoaderFunctionArgs) => {

  const limit = 8; // Number of trips to fetch
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || "1", 10);
  const offset = (page - 1) * limit; // Offset for pagination

  const { allTrips, total } = await getAllTrips(limit, offset);

  // Here you would typically fetch the trip details from your data source
  // For example, using a function like getTripById(tripId)
  return {
    trips: allTrips.map(({ $id, tripDetail, imageUrls }) => ({
      id: $id,
      ...parseTripData(tripDetail),
      imageUrls: imageUrls ?? []
    })),
    total
  }
}

const Trips = ({ loaderData }: Route.ComponentProps) => {

  const trips = loaderData.trips as unknown as Trip[] || [];

  const [searchParams] = useSearchParams();

  const initialPage = Number(searchParams.get('page') || "1");

  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.location.search = `?page=${page}`
  }

  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="Manage your trips here"
        ctaText="Create Trip"
        ctaLink="/trips/create"
      />

      <section>
        <h1 className="p-24-semibold text-dark-100 mb-4">
          Manage Created Trips
        </h1>

        <div className="trip-grid mb-4">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              name={trip.name}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ""}
              tags={[trip.interests, trip.travelStyle]}
              price={trip.estimatedPrice}
            />
          ))}
        </div>

        <PagerComponent
          totalRecordsCount={loaderData.total}
          pageSize={8}
          currentPage={currentPage}
          click={(args) => handlePageChange(args.currentPage)}
          cssClass="!mb-4"
        />
      </section>
    </main>
  )
}

export default Trips