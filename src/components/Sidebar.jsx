import React from "react";

function Sidebar() {
  return (
    <div className="fixed top-0 right-0 h-screen w-72 bg-zinc-900 text-white shadow-2xl">

      <h1 className="font-inter text-2xl font-semibold p-5 border-b border-zinc-700">
        Brands
      </h1>

      <div className="p-5">

        <div className="mb-8">
          <h2 className="font-inter text-lg font-semibold text-white">
            Ducati
          </h2>

          <div className="mt-3 ml-3 space-y-2 text-zinc-400">
            <h3 className="cursor-pointer hover:text-red-500 transition-colors">
              Panigale V4
            </h3>

            <h3 className="cursor-pointer hover:text-red-500 transition-colors">
              Panigale V4 R
            </h3>
          </div>
        </div>

        <div>
          <h2 className="font-inter text-lg font-semibold text-white">
            KTM
          </h2>

          <div className="mt-3 ml-3 space-y-2 text-zinc-400">
            <h3 className="cursor-pointer hover:text-orange-400 transition-colors">
              RC 990
            </h3>

            <h3 className="cursor-pointer hover:text-orange-400 transition-colors">
              Super Duke 1290
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;