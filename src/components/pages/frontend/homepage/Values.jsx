import React from "react";

const Values = () => {
  return (
    <section className="values">
      <h2 className="uppercase text-center py-12 border-b border-light text-[80px] font-normal font-[syne] mb-10">
        Our Values
      </h2>
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="values-img pr-5">
            <img
              src="https://assets-global.website-files.com/63661389dd2417f19a0d89d3/63695645ae15af53f7884f58_home-values-p-1080.webp"
              alt=""
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div className="values-content pl-14 border-l border-light">
            <div className="space-y-10 ">
              <div className="grid grid-cols-[40px_1fr] gap-5 mb-5 border-b border-light py-5 ">
                <span className="size-[50px] text-[15px] rounded-full border border-light block center-all text-lg font-mono">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-[32px] leading-[38.8px] mb-5 uppercase">
                    Vision
                  </h4>
                  <p className="text-[18px] leading-[30px]">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-5 mb-5 border-b border-light py-5 ">
                <span className="size-[50px] text-[15px] rounded-full border border-light block center-all text-lg font-mono">
                  02
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-[32px] leading-[38.8px] mb-5 uppercase">
                    Innovation
                  </h4>
                  <p className="text-[18px] leading-[30px]">
                    Innovation is at the core of everything we do. We embrace
                    curiosity, explore uncharted territories, and challenge the
                    status quo. By pushing boundaries and thinking outside the
                    box, we create groundbreaking solutions that disrupt
                    industries and inspire audiences.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-5 mb-5  py-5 ">
                <span className="size-[50px] text-[15px] rounded-full border border-light block center-all text-lg font-mono">
                  03
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-[32px] leading-[38.8px] mb-5 uppercase">
                    Connection
                  </h4>
                  <p className="text-[18px] leading-[30px]">
                    We believe in the power of connection. We strive to build
                    bridges between brands and their audiences, fostering
                    genuine and lasting relationships. Through compelling
                    storytelling and meaningful interactions, we create
                    experiences that evoke emotions, strengthen bonds, and
                    cultivate trust, ultimately turning customers into brand
                    advocates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
