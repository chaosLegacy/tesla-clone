import React from 'react'
import styles from './Section.module.css';
import { Fade } from "react-awesome-reveal";
import { sectionsType } from '../type';

const Section = (car: sectionsType) => {
    const { id, title, description, image, primaryBtnText, secondaryBtnText } = car;
    const scrollToElement = (id: string) => {
        const section = document.getElementById(id);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

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
