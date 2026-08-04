"use client";

import { useState, useEffect } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Navbar from "./navbar";
import Products from "./products";
import ElockContent from "./elock/elock-content";
import DashcamContent from "./dashcam/dashcam-content";
import { products } from "@/constant/content";
import ProspectIndustries from "./prospect-industries";
import FAQ from "./faq";
import Footer from "./footer";

export default function HomeLayout() {
  const [mainProduct, setMainProduct] = useState(products[0]);
  const [leftProducts, setLeftProducts] = useState([products[1], products[2]]);
  const [rightProducts, setRightProducts] = useState([
    products[3],
    products[4],
  ]);

  useEffect(() => {
    const savedMain = localStorage.getItem("mainProduct");
    const savedLeft = localStorage.getItem("leftProducts");
    const savedRight = localStorage.getItem("rightProducts");

    if (savedMain && savedLeft && savedRight) {
      try {
        const mainName = JSON.parse(savedMain);
        const leftNames = JSON.parse(savedLeft);
        const rightNames = JSON.parse(savedRight);

        const foundMain = products.find((p) => p.name === mainName);
        const foundLeft = leftNames
          .map((name: string) => products.find((p) => p.name === name))
          .filter(Boolean);
        const foundRight = rightNames
          .map((name: string) => products.find((p) => p.name === name))
          .filter(Boolean);

        if (foundMain && foundLeft.length === 2 && foundRight.length === 2) {
          setMainProduct(foundMain);
          setLeftProducts(foundLeft);
          setRightProducts(foundRight);
        }
      } catch (error) {
        console.error(
          "Failed to restore layout state from localStorage:",
          error,
        );
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mainProduct", JSON.stringify(mainProduct.name));
    localStorage.setItem(
      "leftProducts",
      JSON.stringify(leftProducts.map((p) => p.name)),
    );
    localStorage.setItem(
      "rightProducts",
      JSON.stringify(rightProducts.map((p) => p.name)),
    );
  }, [mainProduct, leftProducts, rightProducts]);

  return (
    <>
      <div>
        <main className="h-[calc(100vh+345px)] w-full overflow-x-hidden relative flex flex-col">
          <BackgroundRippleEffect />
          <Navbar />
          <Products
            mainProduct={mainProduct}
            setMainProduct={setMainProduct}
            leftProducts={leftProducts}
            setLeftProducts={setLeftProducts}
            rightProducts={rightProducts}
            setRightProducts={setRightProducts}
          />
        </main>
      </div>

      <div className="relative z-20">
        {mainProduct.name === "E-lock" && <ElockContent />}
        {mainProduct.name === "Adas (DMS)" && <DashcamContent />}
        <FAQ />
        <ProspectIndustries />
        <Footer />
      </div>
    </>
  );
}
