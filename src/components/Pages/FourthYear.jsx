import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function FourthYear(props) {
  return (
    <>
    <div className={styles.wrappergrid}>
      <div className={`${styles.modulewrapper} ${styles.locomotor}`}>
        <h3 className={styles.moduleheading}>Orthopedics</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2017')} className={styles.link} to='orthopedics/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2018')} className={styles.link} to='orthopedics/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2019')} className={styles.link} to='orthopedics/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2020')} className={styles.link} to='orthopedics/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2021')} className={styles.link} to='orthopedics/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2022')} className={styles.link} to='orthopedics/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', '2023')} className={styles.link} to='orthopedics/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'orthopedics', null)} className={styles.link} to='orthopedics/compiled'>compiled</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.reproductive}`}>
        <h3 className={styles.moduleheading}>Reproductive</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2017')} className={styles.link} to='reproductive/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2018')} className={styles.link} to='reproductive/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2019')} className={styles.link} to='reproductive/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2020')} className={styles.link} to='reproductive/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2021')} className={styles.link} to='reproductive/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2022')} className={styles.link} to='reproductive/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', '2023')} className={styles.link} to='reproductive/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'reproductive', null)} className={styles.link} to='reproductive/compiled'>compiled</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.drg}`}>
        <h3 className={styles.moduleheading}>Derma-Rehab-Genetics</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'drg', '2016')} className={styles.link} to='drg/2016'>2016</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2017')} className={styles.link} to='drg/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2018')} className={styles.link} to='drg/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2019')} className={styles.link} to='drg/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2020')} className={styles.link} to='drg/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2021')} className={styles.link} to='drg/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2022')} className={styles.link} to='drg/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', '2023')} className={styles.link} to='drg/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'drg', null)} className={styles.link} to='drg/compiled'>compiled</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.neuroscience}`}>
        <h3 className={styles.moduleheading}>Neuroscience</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2016')} className={styles.link} to='neuroscience/2016'>2016</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2017')} className={styles.link} to='neuroscience/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2018')} className={styles.link} to='neuroscience/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2019')} className={styles.link} to='neuroscience/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2020')} className={styles.link} to='neuroscience/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2021')} className={styles.link} to='neuroscience/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2022')} className={styles.link} to='neuroscience/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', '2023')} className={styles.link} to='neuroscience/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'neuroscience', null)} className={styles.link} to='neuroscience/compiled'>compiled</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.ent}`}>
        <h3 className={styles.moduleheading}>ENT</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'ent', '2017')} className={styles.link} to='ent/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2018')} className={styles.link} to='ent/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2019')} className={styles.link} to='ent/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2020')} className={styles.link} to='ent/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2021')} className={styles.link} to='ent/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2022')} className={styles.link} to='ent/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', '2023')} className={styles.link} to='ent/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'ent', null)} className={styles.link} to='ent/compiled'>compiled</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.eye}`}>
        <h3 className={styles.moduleheading}>Eye</h3>
        <hr />
        <Link onClick={()=>props.update('4th-year', 'eye', '2017')} className={styles.link} to='eye/2017'>2017</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2018')} className={styles.link} to='eye/2018'>2018</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2019')} className={styles.link} to='eye/2019'>2019</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2020')} className={styles.link} to='eye/2020'>2020</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2021')} className={styles.link} to='eye/2021'>2021</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2022')} className={styles.link} to='eye/2022'>2022</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', '2023')} className={styles.link} to='eye/2023'>2023</Link>
        <Link onClick={()=>props.update('4th-year', 'eye', null)} className={styles.link} to='eye/compiled'>compiled</Link>
      </div>

    </div>
    </>
  )
}