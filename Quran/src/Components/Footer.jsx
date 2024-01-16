import React from "react";

function Footer() {
  return (
  <>
    <div class="relative w-full">
    <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center flex justify-center items-center flex-col">
            
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            All Rights Reserved. Built By <a target="_blank" href="https://www.linkedin.com/in/tasneem-alluhimi-a45541215/">
            <span className="font-bold">Tasneem Alluhimi</span></a>
            </p>
            <a href="/" aria-label="Scroll down"
                class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 
                rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
  </>
  );
}

export default Footer;
