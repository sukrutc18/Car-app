import { CarCard,Hero, CustomFilter, SearchBar } from '@/components'
import Image from 'next/image'

import {fetchCars} from '@/utils';


//put the page asynchronously
export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isdataempty=!Array.isArray(allCars) || allCars.length<1 || !allCars;
   console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x 
      padding-y max-width" id="discover">
        <h1 className="text-4xl
        font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters
      ">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
          
        </div>
      
      </div>
      {/* if statement */}
      {!isdataempty ?
      (
        <section>
          {/* return a car component for each car */}
          <div className='home__cars-wrapper'>
          {allCars?.map((car)=><CarCard car={car}/>)}
          {/* for each car show the car component and then pass car component to it */}
          {/* carCard is a component-so create it */}
          </div>
        </section>
      ):
      (
        <div className="home__container-error">
          {/* not a simple class property-use className */}
          <h2 className='text-black font-bold text-xl'>
            opps we don't have cars
          </h2>
          <p>
            {allCars?.message}
          </p>
        </div>
      )}
    </main>
  )
}
