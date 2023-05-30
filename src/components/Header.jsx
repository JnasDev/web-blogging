import React from "react";

function Header() {
  return (
    <div className="bg">
      <div className="container max-w-[1240px] mx-auto my-24">
        <div className="flex justify-between">
          {/* -------------------------Featured------------------------- */}
          <div className="Featured-l max-w-[70%]">
            <h1 className="mb-8 border-b-2 text-[36px] font-medium text-gray-700 border-gray-700">
              Featured Posts
            </h1>
            <div className="grid grid-cols-3 grid-rows-5 gap-6">
              <div className="row-span-5 w-[350px] cursor-pointer h-[500px]">
                <img
                  className="w-[full] h-[250px] object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                  alt=""
                />
                <h1 className="py-4 font-bold text-gray-500 text-xl">
                  How to Create Detailed Buyer <br />
                  Personas for Your Bussiness
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia, odit.
                </p>
                <div className="flex mt-2">
                  <span className="font-bold mr-2 text-gray-600">ThanaDev</span>
                  <p className="mr-2">in</p>
                  <span className="font-bold text-gray-600">Design</span>
                </div>
                <button className="border-2 mt-5 p-3 rounded-lg border-cyan-400 text-cyan-400 font-medium">
                  All Featured Posts
                </button>
              </div>
              <div className="col-span-2 ml-24">
                <div className="flex items-center cursor-pointer">
                  <div className="sec-l">
                    <img
                      className="w-[200px] h-[150px] object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="sec-r">
                    <h1 className="font-bold text-gray-700 px-5 hover:underline underline-offset-8">
                      How to Create your blog domain to make it live
                    </h1>
                    <div className="flex mt-8 px-5">
                      <span className="font-medium mr-2 text-gray-600">
                        ThanaDev
                      </span>
                      <p className="mr-2">in</p>
                      <span className="font-medium text-gray-600 ">Design</span>
                    </div>
                    <p className="mt-2 text-sm px-5">
                      <span className="text-gray-800 font-medium">
                        May,25 2023{" "}
                      </span>
                      Posted by ThanaDev
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 col-start-2 row-start-2 ml-24">
                <div className="flex items-center cursor-pointer">
                  <div className="sec-l">
                    <img
                      className="w-[200px] h-[150px] object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="sec-r">
                    <h1 className="font-bold text-gray-700 px-5 hover:underline underline-offset-8">
                      How to Create your blog domain to make it live
                    </h1>
                    <div className="flex mt-8 px-5">
                      <span className="font-medium mr-2 text-gray-600">
                        ThanaDev
                      </span>
                      <p className="mr-2">in</p>
                      <span className="font-medium text-gray-600 ">Design</span>
                    </div>
                    <p className="mt-2 text-sm px-5">
                      <span className="text-gray-800 font-medium">
                        May,25 2023{" "}
                      </span>
                      Posted by ThanaDev
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 col-start-2 row-start-3 ml-24">
                <div className="flex items-center cursor-pointer">
                  <div className="sec-l">
                    <img
                      className="w-[200px] h-[150px] object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="sec-r">
                    <h1 className="font-bold text-gray-700 px-5 hover:underline underline-offset-8">
                      How to Create your blog domain to make it live
                    </h1>
                    <div className="flex mt-8 px-5">
                      <span className="font-medium mr-2 text-gray-600">
                        ThanaDev
                      </span>
                      <p className="mr-2">in</p>
                      <span className="font-medium text-gray-600 ">Design</span>
                    </div>
                    <p className="mt-2 text-sm px-5">
                      <span className="text-gray-800 font-medium">
                        May,25 2023{" "}
                      </span>
                      Posted by ThanaDev
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------Featured------------------------- */}
            {/* -------------------------Trending------------------------- */}
          </div>
          <div className="Trending-r max-w-[26%]">
            <h1 className="mb-8 border-b-2 text-[36px] font-medium text-gray-700 border-gray-700">
              Trending
            </h1>
            <div className="grid grid-cols-1 gap-4">
              {/* items */}
              <div className="item cursor-pointer">
                <div className="head-text flex px-4">
                  <h1 className="mr-[10px] font-bold text-gray-700 text-[20px]">
                    01.
                  </h1>
                  <h1 className="font-medium text-[20px] text-gray-700 hover:underline underline-offset-8">
                    How to identify first blog post's topic
                  </h1>
                </div>
                <div className="flex mt-4 pl-[52px]">
                  <span className="font-medium mr-2 text-gray-600">
                    ThanaDev
                  </span>
                  <p className="mr-2">in</p>
                  <span className="font-medium text-gray-600 ">Design</span>
                </div>
                <p className="mt-2 text-sm pl-[52px] mb-4">
                  <span className="text-gray-800 font-medium">
                    May,25 2023{" "}
                  </span>
                  Posted by ThanaDev
                </p>
                <div className="border-b-2 "></div>
              </div>
              {/* items */}
              <div className="item cursor-pointer">
                <div className="head-text flex px-4">
                  <h1 className="mr-[10px] font-bold text-gray-700 text-[20px]">
                    02.
                  </h1>
                  <h1 className="font-medium text-[20px] text-gray-700 hover:underline underline-offset-8">
                    5 ways to fix a leaky faucet
                  </h1>
                </div>
                <div className="flex mt-4 pl-[52px]">
                  <span className="font-medium mr-2 text-gray-600">
                    ThanaDev
                  </span>
                  <p className="mr-2">in</p>
                  <span className="font-medium text-gray-600 ">Design</span>
                </div>
                <p className="mt-2 text-sm pl-[52px] mb-4">
                  <span className="text-gray-800 font-medium">
                    May,25 2023{" "}
                  </span>
                  Posted by ThanaDev
                </p>
                <div className="border-b-2 "></div>
              </div>
              {/* items */}
              <div className="item cursor-pointer">
                <div className="head-text flex px-4">
                  <h1 className="mr-[10px] font-bold text-gray-700 text-[20px]">
                    03.
                  </h1>
                  <h1 className="font-medium text-[20px] text-gray-700 hover:underline underline-offset-8">
                    Changing the topic scope
                  </h1>
                </div>
                <div className="flex mt-4 pl-[52px]">
                  <span className="font-medium mr-2 text-gray-600">
                    ThanaDev
                  </span>
                  <p className="mr-2">in</p>
                  <span className="font-medium text-gray-600 ">Design</span>
                </div>
                <p className="mt-2 text-sm pl-[52px] mb-4">
                  <span className="text-gray-800 font-medium">
                    May,25 2023{" "}
                  </span>
                  Posted by ThanaDev
                </p>
                <div className="border-b-2 "></div>
              </div>
              {/* items */}
              <div className="item cursor-pointer">
                <div className="head-text flex px-4">
                  <h1 className="mr-[10px] font-bold text-gray-700 text-[20px]">
                    04.
                  </h1>
                  <h1 className="font-medium text-[20px] text-gray-700 hover:underline underline-offset-8">
                    Write an intro (make it captivating)
                  </h1>
                </div>
                <div className="flex mt-4 pl-[52px]">
                  <span className="font-medium mr-2 text-gray-600">
                    ThanaDev
                  </span>
                  <p className="mr-2">in</p>
                  <span className="font-medium text-gray-600 ">Design</span>
                </div>
                <p className="mt-2 text-sm pl-[52px] mb-4">
                  <span className="text-gray-800 font-medium">
                    May,25 2023{" "}
                  </span>
                  Posted by ThanaDev
                </p>
                <div className="border-b-2 "></div>
              </div>
            </div>
          </div>
          {/* -------------------------Trending------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Header;
