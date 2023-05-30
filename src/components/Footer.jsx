import React from "react";

function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-gray-900 ">
      <div class="w-full  mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between max-w-[1240px] mx-auto">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >

            <span class="self-center text-cyan-600 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blogging
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 text-cyan-600 hover:underline md:mr-6 hover:underline-cyan-600">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 text-cyan-600 hover:underline md:mr-6 hover:underline-cyan-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 text-cyan-600 hover:underline md:mr-6 hover:underline-cyan-600">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="text-cyan-600 hover:underline hover:underline-cyan-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="w-full"><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" /></div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="text-cyan-600 hover:underline hover:underline-cyan-600">
            ThanaDev™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
