import Image from "next/image";
import classes from "@/styles/Home.module.css";
import TransactionButton from "./components/TransactionButton";

export default function Home() {
  return (
    <div className={classes.main}>
      <p>Hello world, testing transactions here</p>
      <TransactionButton />
      <img
        style={{
          margin: "0 40px",
        }}
        width="700px"
        alt="graphic"
        src="/customerProfile.jpg"
      />
    </div>
  );
}
