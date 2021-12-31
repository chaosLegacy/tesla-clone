import { useEffect } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import carsList from './api/carsData.json';
import sectionsList from './api/sectionData.json';
import { carsType, sectionsType } from '../type';

const Home = ({ sectionsList, cars }: { sectionsList: Array<sectionsType>, cars: Array<carsType> }) => {
  // const [cars, setCars] = useState<Array<carsType>>([]);
  // const [sectionsList, setSectionsList] = useState<Array<sectionsType>>([]);
  const fetchData = async () => {
    const res1 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sections`);
    const sectionsList = await res1.json();

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cars`);
    const carsList = await res2.json();
    const carsName = carsList.default.map((car: carsType) => car.title)
    // setCars(carsName);
    // setSectionsList(sectionsList.default);
  }
  useEffect(() => {
    // fetchData();
  }, []);
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
  const carsName = carsList.map((car: carsType) => car.title)
  return {
    props: {
      sectionsList: sectionsList,
      cars: carsName
    }
  }
}