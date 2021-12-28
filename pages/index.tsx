import { useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import { carsType } from './api/cars'
import { sectionsType } from './api/sections'

const Home = ({ sectionsList, cars }: { sectionsList: Array<sectionsType>, cars: Array<carsType> }) => {
  return (
    <>
      <Header cars={cars} />
      <div className={styles.container}>
        {
          sectionsList.map((section) => (
            <Section key={section.id} {...section} />
          ))
        }
      </div>
    </>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res1 = await fetch('http://localhost:3000/api/sections');
  const sectionsList = await res1.json();

  const res2 = await fetch('http://localhost:3000/api/cars');
  const carsList = await res2.json();
  const carsName = carsList.default.map((car: carsType) => car.title)

  return {
    props: {
      sectionsList: sectionsList.default,
      cars: carsName
    }
  }
}