import Image from "next/image";
import styles from "../styles/profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Profile</h1>
      <p className={styles.paragraph}>
        This is the Profile page for my introduction.
        <br />
        My name is Muhammad Amirul Haziq.
        I love learning about web development and creating amazing applications.
      </p>
      <Image
        src="/profile_pic.png"
        alt="me"
        width={350}
        height={250}
        className={styles.image}
      />
    </div>
  );
}
