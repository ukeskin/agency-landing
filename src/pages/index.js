import { useState } from "react";
import { Inter } from "next/font/google";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-inter">
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="flex items-center justify-between">
                <a
                  className="text-2xl font-semibold tracking-tight text-neutral-950"
                  aria-label="Home"
                  href="/"
                >
                  Logo
                </a>
                <div className="flex items-center gap-x-8">
                  <a
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    href="mailto:x@gmail.com"
                    target="_blank"
                  >
                    <span className="relative top-px">Contact us</span>
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    aria-expanded="false"
                    aria-controls=":R5a:"
                    class="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
                    >
                      <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id=":R5a:"
          style={{ height: isMenuOpen ? "100%" : "0.5rem" }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden="true"
          inert
        >
          <div className="bg-neutral-800">
            <div className="bg-neutral-950 pb-16 pt-14">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="flex items-center justify-between">
                    <a aria-label="Home" href="/">
                      <svg
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        className="h-8 sm:hidden"
                      >
                        <rect
                          clipPath="url(#:R2mkta:-clip)"
                          className="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"
                        />
                        <use
                          href="#:R2mkta:-path"
                          className="stroke-white"
                          fill="none"
                          strokeWidth="1.5"
                        />
                        <defs>
                          <path
                            id=":R2mkta:-path"
                            d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                          />
                          <clipPath id=":R2mkta:-clip">
                            <use href="#:R2mkta:-path" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        viewBox="0 0 130 32"
                        aria-hidden="true"
                        className="hidden h-8 sm:block"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          preserveAspectRatio="xMinYMid meet"
                        >
                          <rect
                            clipPath="url(#:Rcmkta:-clip)"
                            className="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"
                          />
                          <use
                            href="#:Rcmkta:-path"
                            className="stroke-white"
                            fill="none"
                            strokeWidth="1.5"
                          />
                          <defs>
                            <path
                              id=":Rcmkta:-path"
                              d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                            />
                            <clipPath id=":Rcmkta:-clip">
                              <use href="#:Rcmkta:-path" />
                            </clipPath>
                          </defs>
                        </svg>
                        <path
                          className="fill-white"
                          d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
                        />
                      </svg>
                    </a>
                    <div className="flex items-center gap-x-8">
                      <a
                        className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                        href="/contact"
                      >
                        <span className="relative top-px">Contact us</span>
                      </a>
                      <button
                        type="button"
                        aria-expanded="false"
                        aria-controls=":R5a:"
                        className="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
                        aria-label="Toggle navigation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 fill-white group-hover:fill-neutral-200"
                        >
                          <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
                          <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="/work"
                      >
                        Our Work
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="/about"
                      >
                        About Us
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="/process"
                      >
                        Our Process
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                        href="/blog"
                      >
                        Blog
                        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                      <h2 className="font-display text-base font-semibold text-white">
                        Follow us
                      </h2>
                      <ul role="list" className="flex gap-x-10 text-white mt-6">
                        <li>
                          <a
                            aria-label="Facebook"
                            className="transition hover:text-neutral-200"
                            href="https://facebook.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            aria-label="Instagram"
                            className="transition hover:text-neutral-200"
                            href="https://instagram.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            aria-label="GitHub"
                            className="transition hover:text-neutral-200"
                            href="https://github.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            aria-label="Dribbble"
                            className="transition hover:text-neutral-200"
                            href="https://dribbble.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <div className="relative isolate flex w-full flex-col pt-9">
          <main className="w-full flex-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-3xl">
                  <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                    Award-winning development studio based in Denmark.
                  </h1>
                  <p className="mt-6 text-xl text-neutral-600">
                    We are a development studio working at the intersection of
                    design and technology. It’s a really busy intersection
                    though — a lot of our staff have been involved in hit and
                    runs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl">
                  <h2>
                    <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                      Harnessing technology for a brighter future
                    </span>
                  </h2>
                  <div className="mt-6 text-xl text-neutral-600">
                    <p>
                      We believe technology is the answer to the world’s
                      greatest challenges. It’s also the cause, so we find
                      ourselves in bit of a catch 22 situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40 patternSection">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div>
                    <figure className="mx-auto max-w-4xl">
                      <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                        <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                          The team at Studio went above and beyond with our
                          onboarding, even finding a way to access the user’s
                          microphone without triggering one of those annoying
                          permission dialogs.
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl">
                  <h2>
                    <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                      Services
                    </span>
                    <span className="sr-only">- </span>
                    <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                      We help you identify, explore and respond to new
                      opportunities.
                    </span>
                  </h2>
                  <div className="mt-6 text-xl text-neutral-600">
                    <p>
                      As long as those opportunities involve giving us money to
                      re-purpose old projects — we can come up with an endless
                      number of those.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="lg:flex lg:items-center lg:justify-end">
                  <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                    <div className="w-[33.75rem] flex-none lg:w-[45rem]">
                      <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale">
                        <svg
                          viewBox="0 0 655 680"
                          fill="none"
                          className="h-full"
                        >
                          <g clipPath="url(#:S1:-clip)" className="group">
                            <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                              <foreignObject width={655} height={680}>
                                <img
                                  alt=""
                                  loading="lazy"
                                  width={2400}
                                  height={3000}
                                  decoding="async"
                                  data-nimg={1}
                                  className="w-full bg-neutral-100 object-cover"
                                  style={{
                                    color: "transparent",
                                    aspectRatio: "655 / 680",
                                  }}
                                  sizes="(min-width: 1024px) 41rem, 31rem"
                                  src="/photo.jpg"
                                />
                              </foreignObject>
                            </g>
                            <use
                              href="#:S1:-shape"
                              strokeWidth={2}
                              className="stroke-neutral-950/10"
                            />
                          </g>
                          <defs>
                            <clipPath id=":S1:-clip">
                              <path
                                id=":S1:-shape"
                                d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul
                      role="list"
                      className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"
                    >
                      <li className="group mt-10 first:mt-0">
                        <div>
                          <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <strong className="font-semibold text-neutral-950">
                              Web development.{" "}
                            </strong>
                            We specialise in crafting beautiful, high quality
                            marketing pages. The rest of the website will be a
                            shell that uses lorem ipsum everywhere.
                          </div>
                        </div>
                      </li>
                      <li className="group mt-10 first:mt-0">
                        <div>
                          <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <strong className="font-semibold text-neutral-950">
                              Application development.{" "}
                            </strong>
                            We have a team of skilled developers who are experts
                            in the latest app frameworks, like Angular 1 and
                            Google Web Toolkit.
                          </div>
                        </div>
                      </li>
                      <li className="group mt-10 first:mt-0">
                        <div>
                          <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <strong className="font-semibold text-neutral-950">
                              E-commerce.{" "}
                            </strong>
                            We are at the forefront of modern e-commerce
                            development. Which mainly means adding your logo to
                            the Shopify store template we’ve used for the past
                            six years.
                          </div>
                        </div>
                      </li>
                      <li className="group mt-10 first:mt-0">
                        <div>
                          <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <strong className="font-semibold text-neutral-950">
                              Custom content management.{" "}
                            </strong>
                            At Studio we understand the importance of having a
                            robust and customised CMS. That’s why we run all of
                            our client projects out of a single, enormous Joomla
                            instance.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl">
                  <h2>
                    <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                      Our work
                    </span>
                  </h2>
                  <div className="mt-6 text-xl text-neutral-600">
                    <p>
                      We’ve worked with some of the biggest brands in the world,
                      and some of the smallest. We’re not fussy, as long as the
                      cheque clears.
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-16">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group relative isolate">
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0">
                        <img
                          alt=""
                          loading="lazy"
                          width={2400}
                          height={1350}
                          decoding="async"
                          data-nimg={1}
                          className="w-full h-full object-cover"
                          style={{
                            color: "transparent",
                            aspectRatio: "16 / 9",
                          }}
                          sizes="(min-width: 1024px) 31rem, 21rem"
                          src="/photo.jpg"
                        />
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                      Branding
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      We’ve worked with some of the biggest brands in the world,
                      and some of the smallest. We’re not fussy, as long as the
                      cheque clears.
                    </p>
                  </div>
                  <div className="group relative isolate">
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0">
                        <img
                          alt=""
                          loading="lazy"
                          width={2400}
                          height={1350}
                          decoding="async"
                          data-nimg={1}
                          className="w-full h-full object-cover"
                          style={{
                            color: "transparent",
                            aspectRatio: "16 / 9",
                          }}
                          sizes="(min-width: 1024px) 31rem, 21rem"
                          src="/photo.jpg"
                        />
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                      Web development
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      We’ve worked with some of the biggest brands in the world,
                      and some of the smallest. We’re not fussy, as long as the
                      cheque clears.
                    </p>
                  </div>
                  <div className="group relative isolate">
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0">
                        <img
                          alt=""
                          loading="lazy"
                          width={2400}
                          height={1350}
                          decoding="async"
                          data-nimg={1}
                          className="w-full h-full object-cover"
                          style={{
                            color: "transparent",
                            aspectRatio: "16 / 9",
                          }}
                          sizes="(min-width: 1024px) 31rem, 21rem"
                          src="/photo.jpg"
                        />
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                      Web development
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      We’ve worked with some of the biggest brands in the world,
                      and some of the smallest. We’re not fussy, as long as the
                      cheque clears.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
                <div class="rounded-[20px] bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-34 md:px-8 rounded-b-none flex items-center justify-center">
                  <a
                    href="mailto:x@gmail.com"
                    class="text-white font-display text-3xl font-medium tracking-tight animate-pulse"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
