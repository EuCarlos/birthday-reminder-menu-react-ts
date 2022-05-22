import { useState } from 'react'
import { PeopleData } from './database/people'
import { List } from './components/List'
import styles from './App.module.sass'

function App() {

  const [people, setPeople] = useState(PeopleData)
  const [hideState, setHideState] = useState(false)

  return (
    <main>
      <section className={styles.contentWrapper}>
        <header>
          <div><strong>Carlos</strong> Alves</div>
          <div className={styles.notifications} onClick={() => {hideState === false ? setHideState(true) : setHideState(false)}}>
            {people.length >= 1 ? <span>{people.length}</span> : ''}
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 25C11.8335 25 12.6329 24.6708 13.2223 24.0848C13.8117 23.4987 14.1429 22.7039 14.1429 21.8752H7.85714C7.85714 22.7039 8.18826 23.4987 8.77766 24.0848C9.36706 24.6708 10.1665 25 11 25ZM12.5636 1.71846C12.5855 1.50121 12.5614 1.28181 12.4928 1.07439C12.4242 0.866976 12.3127 0.676158 12.1653 0.514242C12.018 0.352327 11.8382 0.222909 11.6375 0.134336C11.4368 0.0457623 11.2196 0 11 0C10.7804 0 10.5632 0.0457623 10.3625 0.134336C10.1618 0.222909 9.98199 0.352327 9.83466 0.514242C9.68734 0.676158 9.57579 0.866976 9.5072 1.07439C9.4386 1.28181 9.4145 1.50121 9.43643 1.71846C7.66027 2.07766 6.06355 3.03614 4.91663 4.43159C3.76971 5.82705 3.14309 7.57373 3.14286 9.37585C3.14286 11.0914 2.35714 18.7503 0 20.3128H22C19.6429 18.7503 18.8571 11.0914 18.8571 9.37585C18.8571 5.59481 16.1543 2.43873 12.5636 1.71846V1.71846Z" fill="white"/>
            </svg>
          </div>
        </header>
        <div className={styles.box} style={hideState === true ? {display: 'block'} : {display: 'none'}}>
          <article className={styles.open}>
            {people.length >= 1 ? <List people={people} /> : <h4 className={styles.noReminders}>No birthday reminders to see</h4>}
            {people. length >= 1 ? <button onClick={() => setPeople([])}>Mark all as seen</button> : ''}
            <div className={styles.arrow}></div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
