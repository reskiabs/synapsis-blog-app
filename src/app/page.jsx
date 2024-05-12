import CardList from "@/components/CardList/CardList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import styles from "./homepage.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
