"use client";

import React from "react";
import { fetchBrands } from "@/util/fetch/fetchBrands";
import Navigation from "@/components/Navigation/Navigation";

import styles from "./store.module.css";

fetchBrands("everywhere");

export default function Store() {
  return (
    <main>
      <Navigation active="store" />
      <div className={styles.productsNavigation}>
        <div className={styles.option} id="men">
          <p>MEN</p>
        </div>
        <div className={styles.option} id="women">
          <p>WOMEN</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.filter}>
          <div className={styles.countriesFilter}>
            <h1>Explore brands from ...</h1>
            <li id="everywhere" className={styles.active}>
              Everywhere
            </li>
          </div>
        </div>
        <div className={styles.brands}></div>
      </div>
    </main>
  );
}
