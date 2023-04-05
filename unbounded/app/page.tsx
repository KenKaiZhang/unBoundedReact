import React from "react";
import Corners from "@/components/Corners/Corners";
import Button from "@/components/Button/Button";
import "./page.css";

interface BoxProps {
  href: string;
  text: string;
  label: string;
}
const Box: React.FunctionComponent<BoxProps> = (props) => {
  const { href, text, label } = props;
  return (
    <div className="box">
      <div className="interact">
        <Corners
          borderColor="var(--main-color)"
          height={""}
          width={""}
          margin={""}
        />
        <div className="text">
          {text.split(" ").map((word, i) => {
            return <p key={i}>{word}</p>;
          })}
        </div>
        <Button href={href} label={label} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className="content">
        <div className="title">unBounded</div>
        <div className="store-wrapper">
          <Corners
            borderColor="var(--main-color)"
            height={""}
            width={""}
            margin={""}
          />
          <div className="store">
            <h1>
              Discover
              <br />
              New Styles
            </h1>
            <Button href="store" label="SHOP" />
          </div>
        </div>
        <div className="about-join">
          <Box href="/about" text="LEARN ABOUT US" label="ABOUT" />
          <Box href="/join" text="JOIN US" label="JOIN" />
        </div>
      </div>
    </main>
  );
}
