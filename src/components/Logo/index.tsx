import React from "react";
import Image from "next/image";
import logo from "./logo.svg";

export default function Logo(): JSX.Element {
  return <Image src={logo} alt="Marvel logo" priority />;
}
