import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className="relative">
      {Array(10).fill().map(item => (
        <h1 className="text-center text-[90px] relative">
          Hello world!
        </h1>
      ))}

    </main>
  );
}
