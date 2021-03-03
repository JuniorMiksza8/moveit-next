import ExperinceBar from "../components/ExperinceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperinceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
