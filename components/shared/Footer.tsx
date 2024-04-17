import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row ">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={120}
            height={30}
          />
        </Link>

        <p>2024 Coded By Alex Saifo</p>
      </div>
    </footer>
  );
};

export default Footer;
