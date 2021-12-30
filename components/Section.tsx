import React from 'react'
import { sectionsType } from '../pages/api/sections';
import styles from './Section.module.css';
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import downArrow from '../public/down-arrow.svg';

const Section = (car: sectionsType) => {
    const { id, title, description, image, primaryBtnText, secondaryBtnText, range, time, topSpeed, peakPower } = car;
    const scrollToElement = (id: string) => {
        const section = document.getElementById(id);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        console.log('scroll event', window.scrollY)
    }

    return (
        <>
            <section style={{ backgroundImage: `url(/images/${image})` }}
                className={styles.wrap} id={`section-${id}`}>
                <section className={styles.main}>
                    <Fade direction='down'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </Fade>
                </section>
                <section>
                    <Fade direction='up'>
                        <section className={styles.buttonGroup}>
                            {
                                primaryBtnText &&
                                <button className={styles.primaryButton}>{primaryBtnText}</button>
                            }

                            {
                                secondaryBtnText &&
                                <button className={styles.secondaryButton}>{secondaryBtnText}</button>
                            }
                        </section>

                        <div className={styles.downArrow} >
                            <img src="/down-arrow.svg" alt="down arrow"
                                onClick={() => scrollToElement(`section-${id + 1}`)} />
                        </div>
                    </Fade>
                </section>

            </section>
        </>
    )
}

export default Section
