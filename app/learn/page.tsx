import { div } from "framer-motion/client";

export default function learnMain() {
    return (
        <div>
            <h1>Learn</h1>
            <div className="one m-0 grid list-none gap-x-2.5 p-[22px] w-[500px] grid-cols-[0.75fr_1fr]">
                <div className="row-span-3">
                <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                    href="/"
                >
                    <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                    >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                        Radix Primitives
                    </div>
                    <p className="text-[14px] leading-[1.3] text-mauve4">
                        Unstyled, accessible components for React.
                    </p>
                </a>
                </div>
                <div className="p-3">2</div>
                <div className="p-3">3</div>
                <div className="p-3">4</div>
            </div>
        </div>
    )
}