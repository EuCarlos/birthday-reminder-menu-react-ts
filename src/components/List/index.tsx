import styles from './styles.module.sass'

type Peoples = {
  "uid": string,
  "name": string,
  "year_of_birth": number,
  "image": string
}

export function List({ people }:any) {

  return (
    <>
      { people.map((item: Peoples) => {
          const {
            uid,
            name,
            year_of_birth,
            image
          } = item

          return (
            <article key={uid} className={styles.person}>
              <img src={image} alt={name + "\'s avatar"} title={name + "\'s avatar"}/>
              <div>
                <h4>{name}</h4>
                <p>{ (new Date().getFullYear()) - year_of_birth } years</p>
              </div>
            </article>
          )
      })}
    </>
  );
};