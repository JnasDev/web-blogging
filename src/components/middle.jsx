import React from "react";

function middle() {
  return (
    <div className="bg">
      <div className="container max-w-[1240px] mx-auto pb-16">
        <div className="grid grid-cols-2">
          <div className="item">
            <img
              className="w-[600px] h-[500px] object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
              alt="nasa-img"
            />
          </div>
          <div className="item flex flex-col justify-center mb-24">
            <div className="head-text">
              <h1 className="text-gray-700 text-[31px] font-bold">
                Your Blog Posts are Boring: 9 Tips for Making your Writing morer
                interesting
              </h1>
            </div>
            <p className="font-medium text-gray-950 mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rem
              atque illum fugit obcaecati magnam veritatis dolor reprehenderit
              quidem. Odio ipsam a accusamus omnis inventore veniam consequuntur
              id, ducimus nostrum perferendis reiciendis deleniti quos odit
              similique asperiores modi maxime, rerum repudiandae libero
              quibusdam ullam tempore. Deserunt sunt accusantium omnis dolore!
            </p>
            <div className="flex mt-8">
              <span className="font-bold mr-2 text-gray-600">ThanaDev</span>
              <p className="mr-2">in</p>
              <span className="font-bold text-gray-600">Design</span>
            </div>
            <p className="mt-2 text-sm text-[16px]">
              <span className="text-gray-800 font-medium text-[16px]">May,25 2023 </span>
              Posted by ThanaDev
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default middle;
