import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getAdminProducts } from "../../actions/productAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  const data2 = [
    { name: "Group A", value: outOfStock },
    { name: "Group B", value: products?.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div class="flex flex-wrap bg-gray-100 w-full h-screen">
      <div class="w-1/6 bg-white rounded p-3 shadow-lg">
        <div class="flex items-center space-x-4 p-2 mb-5">
          <img class="h-12 rounded-full" src="" alt="Admin" />
          <div>
            <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              Saurabh
            </h4>
            <span class="text-sm tracking-wide flex items-center space-x-1">
              <svg
                class="h-4 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span class="text-gray-600">Verified</span>
            </span>
          </div>
        </div>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <Link
              to="/admin/products"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <span>Create Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span>My orders</span>
            </a>
          </li>
          <li>
            <a
              href=""
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class=" text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <span>Reviews</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </span>
              <span>All Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <span>Change password</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="w-5/6">
        <div class="flex-1">
          <div class="w-full">
            <div class="pl-20 text-gray-700 bg-gray-200 ">
              <div class=" py-4 px-4 bg-gray-200">
                <div class="flex flex-col space-y-8">
                  <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                    <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                      {/* <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                        <div class="flex justify-between">
                          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            Main Account
                          </span>
                          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            Available Funds
                          </span>
                        </div>
                        <div class="flex gap-2 md:gap-4 justify-between items-center">
                          <div class="flex flex-col space-y-4">
                            <h2 class="text-gray-800 font-bold tracking-widest leading-tight">
                              Derol's Savings Account
                            </h2>
                            <div class="flex items-center gap-4">
                              <p class="text-lg text-gray-600 tracking-wider">
                                **** **** *321
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                          <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                            <span class="md:text-xl">$</span>
                            92,817.45
                          </h2>
                        </div>
                        <div class="flex gap-2 md:gap-4">
                          <a
                            href="#"
                            class="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800"
                          >
                            Transfer Money
                          </a>
                          <a
                            href="#"
                            class="bg-blue-50 px-5 py-3 w-full text-center md:w-auto rounded-lg text-blue-600 text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
                          >
                            Link Account
                          </a>
                        </div> */}
                      {/* </div> */}

                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          width={500}
                          height={300}
                          data={data}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="Total Income"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between">
                      <div class="flex flex-col">
                        <p class="text-white font-bold">
                          Lorem ipsum dolor sit amet
                        </p>
                        <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Odio soluta saepe consequuntur facilis ab a.
                          Molestiae ad saepe assumenda praesentium rem dolore?
                          Exercitationem, neque obcaecati?
                        </p>
                      </div>
                      <div class="flex justify-between items-end">
                        <a
                          href="#"
                          class="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
                        >
                          Learn More
                        </a>
                        <img
                          src="https://atom.dzulfarizan.com/assets/calendar.png"
                          alt="calendar"
                          class="w-auto h-24 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
                    <div class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                      <h2 class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                        Expenses By Category
                      </h2>
                      <a
                        href="#"
                        class="text-xs text-gray-800 font-semibold uppercase"
                      >
                        More
                      </a>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-50">
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <p class="text-xs text-gray-600 tracking-wide">
                            Total Products
                          </p>
                          <h3 class="mt-1 text-lg text-blue-500 font-bold">
                            {products && products?.length} Nos
                          </h3>
                          <span class="mt-4 text-xs text-gray-500">
                            Last Transaction 3 Hours ago
                          </span>
                        </div>
                        <div class="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                          <img
                            src="https://atom.dzulfarizan.com/assets/dish-2.png"
                            alt="icon"
                            class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-50">
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <p class="text-xs text-gray-600 tracking-wide">
                            Groceries
                          </p>
                          <h3 class="mt-1 text-lg text-green-500 font-bold">
                            $ 8,918
                          </h3>
                          <span class="mt-4 text-xs text-gray-500">
                            Last Transaction 3 Days ago
                          </span>
                        </div>
                        <div class="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md">
                          <img
                            src="https://atom.dzulfarizan.com/assets/grocery.png"
                            alt="icon"
                            class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-50">
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <p class="text-xs text-gray-600 tracking-wide">
                            Gaming
                          </p>
                          <h3 class="mt-1 text-lg text-yellow-500 font-bold">
                            $ 1,223
                          </h3>
                          <span class="mt-4 text-xs text-gray-600">
                            Last Transaction 4 Days ago
                          </span>
                        </div>
                        <div class="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md">
                          <img
                            src="https://atom.dzulfarizan.com/assets/gaming.png"
                            alt="icon"
                            class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-50">
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <p class="text-xs text-gray-600 tracking-wide">
                            Trip & Holiday
                          </p>
                          <h3 class="mt-1 text-lg text-indigo-500 font-bold">
                            $ 5,918
                          </h3>
                          <span class="mt-4 text-xs text-gray-500">
                            Last Transaction 1 Month ago
                          </span>
                        </div>
                        <div class="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md">
                          <img
                            src="https://atom.dzulfarizan.com/assets/holiday.png"
                            alt="icon"
                            class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
                    <div class="col-start-1 col-end-5">
                      <h2 class="text-xs md:text-sm text-gray-800 font-bold tracking-wide">
                        Summary Transactions
                      </h2>
                    </div>
                    <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                      <span>Products</span>
                      <PieChart
                        className="pl-6 object-contain"
                        width={300}
                        height={300}
                      >
                        <Pie
                          data={data2}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <span>instock 2</span>
                    </div>
                    <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                      <div class="flex justify-between items-center">
                        <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                          Latest Transactions
                        </h2>
                        <a
                          href="#"
                          class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300"
                        >
                          More
                        </a>
                      </div>
                      <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                          <p class="px-4 font-semibold">Today</p>
                          <p class="px-4 text-gray-600">McDonald</p>
                          <p class="px-4 tracking-wider">Cash</p>
                          <p class="px-4 text-blue-600">Food</p>
                          <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </p>
                        </li>
                      </ul>
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
};

export default Dashboard;
