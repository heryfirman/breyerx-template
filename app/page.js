"use client"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import { TbArrowBigDown } from "react-icons/tb";
import { FaTelegram, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      {/* ----- Header ----- */}
      <header>
        <section>
          <div className="relative mx-auto py-2 sm:px-6 lg:px-8 bg-transparent">
            <nav className="relative" aria-label="Global">
              <div className="flex justify-between items-center">
                <div className="w-1/2 sm:w-[30%] ml-0 md:w-[30%]">
                  <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/dreyerx_logo_1.png"
                      alt="Dreyerx Logo"
                      className="dark:invert"
                      width={300}
                      height={61}
                      priority
                    />
                  </a>
                </div>
                <div className="absolute w-full h-auto flex justify-center flex-row items-center sm:w-auto mx-auto top-0 sm:top-7 lg:top-3 sm:left-1/2 translate-y-28 sm:-translate-x-1/2 sm:translate-y-0 z-20">
                  <div className="w-auto flex flex-row justify-center h-10 mx-auto px-[2px] pt-[2px] pb-[2px] bg-gradient-to-r from-[#d9d9d953] via-transparent to-transparent rounded-[32px]">
                    <div className="w-32 h-9 px-[5px] text-center text-sm text-white leading-9 font-medium tracking-wide rounded-[32px] bg-dark-purple">
                      Deposit
                    </div>
                    <div className="w-32 h-9 px-[5px] text-center text-sm text-[#AE769B] leading-9 font-medium tracking-wide rounded-[32px]">
                      Withdraw
                    </div>
                  </div>
                </div>
                <div className="w-1/2 sm:w-[20%] mr-8 text-end">
                  <a
                    href="#"
                    className="font-medium text-xs px-6 py-3 rounded-3xl bg-[#581C87] text-white hover:text-indigo-500"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>

      {/* ----- Main ----- */}
      <main className="flex min-h-screen max-w-full overflow-x-hidden flex-col items-center justify-between mx-auto p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="sm:hidden fixed bottom-0 right-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-[#16091E] via-[#16091E] dark:from-white dark:via-white lg:absolute lg:h-auto lg:w-auto lg:bg-none lg:-translate-y-48 lg:translate-x-1/4 lg:rotate-90"
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-duration="500"
          >
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-sm lg:text-base text-white"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lg:-rotate-90 font-medium ml-2 lg:ml-0 translate-x-1 lg:translate-x-0">By{" "}</span>
              <Image
                src="/dreyerx_logo_1.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={300}
                height={62}
                priority
              />
            </a>
          </div>
          <div className="hidden absolute bottom-0 right-0 h-48 w-full items-end justify-center bg-gradient-to-t from-[#16091E] via-[#16091E] dark:from-white dark:via-white lg:absolute lg:h-auto lg:w-auto lg:bg-none lg:-translate-y-48 lg:translate-x-1/4 lg:rotate-90 lg:flex">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-sm lg:text-base text-white"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lg:-rotate-90 font-medium ml-2 lg:ml-0 translate-x-1 lg:translate-x-0">By{" "}</span>
              <Image
                src="/dreyerx_logo_1.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={300}
                height={62}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/3 before:-translate-y-[40%] before:rounded-full before:bg-gradient-radial before:from-[#4400ff8a] before:opacity-60 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-[100%] after:translate-y-2/4 after:bg-gradient-conic after:from-[#591c879e] after:via-[#581C87] after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#581C87] before:dark:opacity-5 after:dark:from-[#581C87] after:dark:via-[#581C87] after:dark:opacity-5 before:lg:h-[360px] z-[-1]">
          <div className="relative flex gap-1 flex-col items-center mx-auto p-[14px] max-w-[438px] h-auto rounded-[18px] backdrop-filter backdrop-blur-lg shadow-lg bg-white/5 border-2 border-white/10">
              <div className="w-[410px] max-h-fit p-[2px] rounded-xl border backdrop-blur-sm backdrop-filter shadow-sm border-white/10 bg-primary/5">
                <div className="w-full min-h-6 px-[18px] py-4 max-h-fit mx-auto rounded-t-[calc(1.1rem-0.5rem)] text-xs tracking-wide bg-primary text-white">
                  <div className="w-auto h-6 text-left mb-1 text-[#fcd34d]">
                    <span className="inline-block w-6 text-base translate-y-1">
                      <RiErrorWarningLine />
                    </span>
                    <span className="text-xs font-medium tracking-wide -ml-1">Warning!</span>
                  </div>
                  <p>
                    <HiMiniArrowSmallRight className="text-sm inline-block mr-1"/>
                    lorem ipsun dolor sit amet fkf.
                  </p>
                  <p>
                    <HiMiniArrowSmallRight className="text-sm inline-block mr-1"/>
                    lorem ipsun dolor sit amet fkf.
                  </p>
                  <p>
                    <HiMiniArrowSmallRight className="text-sm inline-block mr-1"/>
                    lorem ipsun dolor sit amet fkf.
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full h-auto my-6 px-4">
                  <div className="flex-1">
                    <span className="font-medium text-4xl text-white">902.01</span>
                  </div>
                  <div className="flex justify-center items-center space-x-1.5 px-2 border-2 border-white/10 rounded-3xl">
                    <div className="relative w-7 h-7 rounded-full bg-dark-purple">
                      <Image
                        src="/logo-eth.png"
                        alt="Ethereum Logo"
                        className="dark:invert mx-auto"
                        width={16}
                        height={16}
                        priority
                      />
                    </div>
                    <div className="leading-4 sm:leading-none"><span className="uppercase font-semibold text-xs sm:text-base text-white">eth</span></div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full h-auto my-6 px-4">
                  <div className="inline-block">
                    <div className="w-7 h-7 float-left rounded-full bg-white/80">
                      <Image
                        src="/logo-eth.png"
                        alt="Ethereum Logo"
                        className="dark:invert mx-auto"
                        width={16}
                        height={16}
                        priority
                      />
                    </div>
                    <span className="inline-block ml-[6px] leading-7 float-right text-sm sm:text-base sm:leading-7 tracking-wide text-white">Ethereum</span>
                  </div>
                  <div></div>
                </div>
              </div>
              
              <div className="relative w-full h-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/4 p-[2px] rounded-full backdrop-filter backdrop-blur-lg shadow-lg bg-gradient-to-br from-white/40 via-[#4400ff25] to-[#4D0099] z-10">
                  <div className="w-9 h-9 text-center rounded-full bg-primary">
                    <TbArrowBigDown className="text-xl mx-auto translate-y-[40%] text-white"/>
                  </div>
                </div>
              </div>

              <div className="w-[410px] h-[140px] rounded-xl border backdrop-blur-sm backdrop-filter shadow-sm border-white/10 bg-primary/5">
                <div className="flex flex-row justify-between w-full h-auto my-6 px-4">
                  <div className="flex-1">
                    <span className="font-medium text-4xl text-white">0</span>
                  </div>
                  </div>
                  <div className="flex flex-row justify-between w-full h-auto my-6 px-4">
                    <div className="inline-block">
                      <div className="w-7 h-7 float-left rounded-full bg-white/80">
                        <Image
                        src="/dreyerx_logo.png"
                        alt="Ethereum Logo"
                        className="dark:invert mx-auto"
                        width={28}
                        height={28}
                        priority
                      />
                      </div>
                      <span className="inline-block ml-[6px] leading-7 float-right text-sm sm:text-base sm:leading-7 tracking-wide text-white">DreyerX</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div>
                        <span className="float-left inline-block w-5 h-5 mt-0.5 rounded-full">
                          <Image
                            src="/logo-eth.png"
                            alt="Ethereum Logo"
                            className="dark:invert mx-auto"
                            width={12}
                            height={12}
                            priority
                          />
                        </span>
                        <span className="ml-0.5 text-sm text-white">1</span>
                      </div>
                      <span className="text-base text-white">=</span>
                      <div>
                        <span className="float-left object-fill inline-block w-5 h-5 mt-0.5 rounded-full">
                          <Image
                            src="/dreyerx_logo.png"
                            alt="Ethereum Logo"
                            className="dark:invert mx-auto"
                            width={20}
                            height={20}
                            priority
                          />
                        </span>
                        <span className="ml-0.5 text-sm text-white">1</span>
                      </div>
                    </div>
                </div>
              </div>
              <button className="w-[410px] h-14 mt-12 mb-6 rounded-[32px] text-sm lg:text-base font-medium bg-[#581C87] text-white">Connect Wallets</button>
          </div>
        </div>
      </main>

      {/* ----- Footer ----- */}
      <footer>
        <div className="relative h-20 lg:h-14 mx-auto px-8 py-1 lg:px-16 mb-24 sm:mb-0">
          <div className="mt-5 flex flex-row justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full hover:cursor-pointer">
                <a href="#">
                  <FaTelegram className="w-full h-full object-fill object-center hover:text-primary text-white"/>
                </a>
              </div>
              <div className="w-6 h-6 rounded-full hover:cursor-pointer">
                <a href="#">
                  <FaYoutube className="w-full h-full object-fill object-center hover:text-primary text-white"/>
                </a>
              </div>
              <div className="w-6 h-6 rounded-full hover:cursor-pointer">
                <a href="#">
                  <FaTwitter className="w-full h-full object-fill object-center hover:text-primary text-white"/>
                </a>
              </div>
            </div>
            <div className="">
              <p className="text-white text-xs text-primary-2 font-medium">
                © {new Date().getFullYear()} BreyerX blockchain
              </p>
            </div>
          </div>
        </div>
      </footer>;

    </>
  );
}
