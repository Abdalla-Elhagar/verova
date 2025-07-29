import React from "react";
import topLeftImage from "../../../public/images/styleOutlook/topLeft.png";
import topRight1Image from "../../../public/images/styleOutlook/topRight1.png";
import topRight2Image from "../../../public/images/styleOutlook/topRight2.png";
import bottomLeft1Image from "../../../public/images/styleOutlook/bottomLeft1.png";
import bottomLeft2Image from "../../../public/images/styleOutlook/bottomLeft2.png";
import bottomRightImage from "../../../public/images/styleOutlook/bottomRight.png";
import Image from "next/image";


export default function StyleyOutlook() {
  return (
    <section>
      <div className="container">
        <h2 className="text-5xl  mb-10">Style outlook</h2>
        <div className="top w-full h-[600px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2">
          <div className="col-span-2 row-span-2 row-start-1 row-end-3 col-start-1 col-end-3 rounded-2xl overflow-hidden">
            <Image
              src={topLeftImage}
              alt="topLeft"
              className="w-full h-[600px]"
            />
          </div>
          <div className="col-span-1 row-span-1 row-start-3 row-end-4 md:row-start-1 col-start-1 col-end-2 md:row-end-2 md:col-start-3 md:col-end-4 rounded-2xl overflow-hidden">
            <Image
              src={topRight1Image}
              alt="topRight1"
              className="w-full h-[300px]"
            />
          </div>
          <div className="col-span-1 row-span-1 row-start-3 row-end-4 md:row-start-2 md:row-end-3 col-start-2 col-end-3 md:col-start-3 md:col-end-4 rounded-2xl overflow-hidden">
            <Image
              src={topRight2Image}
              alt="topRight2"
              className="w-full h-[300px]"
            />
          </div>
          <div className="xl:block hidden col-span-1 row-span-2 row-start-1 row-end-3 col-start-4 col-end-5 rounded-2xl overflow-hidden"></div>
        </div>
        <div className="SKENACORE grid grid-cols-2 lg:grid-cols-3">
          <p className="col-span-1 col-start-1 col-end-2 text-start">
            SKENA CORE
          </p>
          <p className="col-span-1 col-start-3 col-end-4 text-end">
            SKENA CORE
          </p>
        </div>
        <div className="bottom grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 mt-10">
          <div className="xl-block hidden col-span-1 row-span-2 col-start-1 col-end-2 rounded-2xl overflow-hidden h-[600px]"></div>
          <div className="col-span-1 row-span-1 col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-2 xl:col-start-2 xl:col-end-3 rounded-2xl overflow-hidden">
            <Image
              src={bottomLeft1Image}
              alt="bottomLeft1"
              className="w-full h-[300px]"
            />
          </div>
          <div className="col-span-1 row-span-1 row-start-1 row-end-2  md:row-start-2 md:row-end-3 col-start-2 col-end-3 md:col-start-1 md:col-end-2 xl:col-start-2 xl:col-end-3 rounded-2xl overflow-hidden">
            <Image
              src={bottomLeft2Image}
              alt="bottomLeft2"
              className="w-full h-[300px]"
            />
          </div>
          <div className="col-span-2 row-span-2 row-start-2 row-end-4 md:row-start-1 md:row-end-3 col-start-1 col-end-3 md:col-start-2 md:col-end-4 xl:col-start-3 xl:col-end-5 rounded-2xl overflow-hidden">
            <Image
              src={bottomRightImage}
              alt="bottomRight"
              className="w-full h-[600px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <p className="col-span-2 col-start-2 col-end-3 text-start">
            ACTIVEAR
          </p>
          <p className="col-span-2 col-start-4 col-end-5 text-end">
            SPORT KALCER
          </p>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1"></div>
          <ul className="col-span-3">

          </ul>
        </div>
      </div>
    </section>
  );
}
