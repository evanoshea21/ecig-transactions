import Image from "next/image";
import classes from "@/styles/Home.module.css";
import TransactionButton from "./components/TransactionButton";

export default function Home() {
  return (
    <div className={classes.main}>
      <p>Hello world, testing transactions here</p>
      <TransactionButton />
    </div>
  );
}
