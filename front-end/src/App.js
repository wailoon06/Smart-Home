import React from "react";

function App() {
  return (
    <div class="bg-gray-800 font-sans leading-normal tracking-normal">
      <div id="root"></div>
      <div class="p-2 grid grid-cols-[auto_1fr]">
        <div class="sidebar w-[100px] rounded-lg bg-black min-h-screen flex flex-col">
          <div class="h-[100px] flex items-center justify-center">
            <a href="index.html">
              <img src="./image/NZHome.png" alt="" />
            </a>
          </div>
          <div class="flex flex-col items-center justify-center px-4 py-2">
            <i class="fas fa-layer-group text-white text-2xl"></i>
            <span class="text-white text-center text-sm mt-2">Devices</span>
          </div>
          <div class="flex flex-col items-center justify-center px-4 py-2">
            <i class="fas fa-chart-pie text-white text-2xl"></i>
            <span class="text-white text-center text-sm mt-2">
              Internet Usage
            </span>
          </div>
          <div class="flex flex-col items-center justify-center px-4 py-2">
            <i class="fas fa-wind text-white text-2xl"></i>
            <span class="text-white text-center text-sm mt-2">Calendar</span>
          </div>
          <div class="mt-auto flex items-center justify-center px-4 py-7">
            <i class="fas fa-cog text-white text-2xl"></i>
          </div>
        </div>

        {/* <!-- Main Content --> */}
        <div class="main-content flex flex-col flex-1">
          <div class="flex justify-center items-start">
            <div class="bg-black rounded-lg relative w-[96%] flex items-center">
              <h1 class="text-4xl font-bold text-white mx-auto py-4">
                NZ HOME
              </h1>
              <i class="fas fa-bell text-white text-3xl absolute right-9"></i>
            </div>
          </div>

          <div class="px-4 grid grid-rows-[6.2rem_1fr] flex-1">
            {/* <!-- Main Content --> */}
            <div class="flex flex-col flex-1">
              <div class="grid grid-cols-2 p-4 gap-4 mb-4">
                {/* <!-- Widgets --> */}
                <div>
                  <div class="bg-blue-300 rounded-lg mb-4 p-4 flex flex-col justify-end">
                    <img
                      src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      alt=""
                      class="rounded-lg mb-4"
                      style={{ height: "170px" }}
                    />
                    <div class="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
                      Check Camera
                    </div>
                  </div>

                  <div class="pt-6">
                    <div class="rounded-lg p-3 bg-blue-300 flex flex-wrap gap-2 mt-2">
                      <div class="bg-white rounded-lg p-4 teal-text flex-1 min-w-[150px]">
                        <div>Weather Today</div>
                        <div class="text-4xl">Clear</div>
                      </div>
                      <div class="bg-white rounded-lg p-4 teal-text flex-1 min-w-[150px]">
                        <div>Temperature</div>
                        <div class="text-4xl">20 °C</div>
                      </div>
                      <div class="bg-white rounded-lg p-4 teal-text flex-1 min-w-[150px]">
                        <div>Device Status</div>
                        <div class="text-4xl">Stable</div>
                      </div>
                      <div class="bg-white rounded-lg p-4 teal-text flex-1 min-w-[150px]">
                        <div>Network</div>
                        <div class="text-4xl">500 mb/s</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
                  {/* <!-- Date Picker --> */}
                  <div class="flex justify-center items-center mb-6">
                    <div class="relative bg-white text-gray-800 rounded-full text-sm py-1 px-4 flex items-center cursor-pointer">
                      <i class="fas fa-calendar mr-2 text-gray-600"></i>
                      6/11/2024
                      <i class="fas fa-chevron-down ml-2 text-gray-600"></i>
                    </div>
                  </div>

                  {/* <!-- Energy Usage Section --> */}
                  <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl mb-4">Energy Usage</h2>
                    <div class="flex items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-bolt text-lg mr-3"></i>
                      Today
                      <div class="ml-auto font-bold">28.6 kWh</div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                    <div class="flex items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-sync-alt text-lg mr-3"></i>
                      This Month
                      <div class="ml-auto font-bold">325.37 kWh</div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Energy Generation Section --> */}
                  <div class="bg-white p-4 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl mb-4">Energy Generation</h2>
                    <div class="flex items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-sun text-lg mr-3"></i>
                      This Month
                      <div class="ml-auto font-bold">400 kWh</div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 p-4 gap-4">
                {/* <!-- Rooms --> */}
                <div class="rounded-lg p-4 bg-blue-300 mb-4">
                  <h2 class="teal-text text-2xl font-bold mb-2">Rooms</h2>
                  <div class="grid grid-cols-4 gap-4">
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Living Room
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Kitchen
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Bathroom
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Master
                    </button>
                  </div>
                </div>

                {/* <!-- Track Robot --> */}
                <button class="rounded-lg p-4 bg-blue-300 mb-4" type="button">
                  Track Robot
                </button>
              </div>

              <div class="rounded-lg p-4 teal-text mb-4">
                <div class="grid grid-cols-2 gap-4">
                  {/* <!-- More Devices Section --> */}
                  <div class="bg-blue-300 rounded-lg p-4 mb-4">
                    <h2 class="text-2xl font-bold mb-4">More Devices</h2>
                    <div class="grid grid-cols-3 gap-4">
                      <button class="teal-text bg-white p-3 rounded-lg">
                        Samsung TV
                      </button>
                      <button class="teal-text bg-white p-3 rounded-lg">
                        Philips Hue
                      </button>
                      <button class="teal-text bg-white p-3 rounded-lg">
                        Add
                      </button>
                    </div>
                  </div>

                  {/* <!-- Users Section --> */}
                  <div class="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
                    <h2 class="text-2xl font-bold mb-4">Users</h2>
                    <div class="flex gap-4">
                      {/* <!-- User button 1 --> */}
                      <button class="bg-white p-3 rounded-lg">
                        <div class="text-2xl">Daughter</div>
                        <span class="bg-red-500 text-xs rounded-full text-white px-2 inline-block">
                          Offline
                        </span>
                      </button>

                      {/* <!-- User button 2 --> */}
                      <button class="bg-white p-3 rounded-lg">
                        <div class="text-2xl">Mom</div>
                        <span class="bg-green-500 text-xs rounded-full text-white px-2 inline-block">
                          Online
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;