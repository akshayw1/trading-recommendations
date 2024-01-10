"use client";
import { useState, useEffect } from "react";
import styles from "../bitcoin/styles.module.css";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
import { useOnboardingContext } from "@/context/MyContext";
import { Line } from "react-chartjs-2";

export default function Ethereum() {
  const dataExample = {
    Time: "15:25-15:30",
    CallOI: 31.89,
    IV1: 26.39,
    Delta1: 0.96,
    OIInter1: 0,
    Price1: 0,
    CallOIInterpretation: 0,
    Strike: 47700,
    PutOiInterpretation: 0,
    Price2: 0,
    OIInter2: 0,
    Delta2: 0.96,
    IV2: 26.39,
    PutOI: "20.55.825",
  };
  const dataFreeText = {
    Time: "15:25-15:30",
    FreeText: 31.89,
  };
  const { session, status } = useOnboardingContext();

  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: ["white"],
        borderColor: "#a33131",
        borderWidth: 2,
      },
    ],
  });
  const [freeTextTable, setFreeTextTable] = useState([]);
  const updateData = async () => {
    try {
      const res = await fetch("/api/ethereum", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (res.ok) {
        const data = await res.json();
        return data.data;
      } else if (res.status === 404) {
        console.warn("API endpoint not found");
        return [];
      } else {
        console.error("Error in the request:", res.status);
        return [];
      }
    } catch (error) {
      console.error("Error in the request:", error);
      return [];
    }
  };
  const addItem = () => {
    closeAllDropdown();
    let newDataExample = { ...dataExample };

    if (data.length > 0) {
      const lastEntryTime = data[0].Time;
      const newTime = calculateNewTime(lastEntryTime);
      newDataExample.Time = newTime;
    } else {
      const currentTime = getCurrentTime();
      newDataExample.Time = currentTime;
    }
    let newData = [...data];
    newData.unshift(newDataExample);
    setData((prevData) => [newDataExample, ...prevData]);
  };
  const calculateNewTime = (lastEntryTime) => {
    const [start, end] = lastEntryTime.split("-");
    const endTime = new Date(`01/01/2022 ${end}`);
    endTime.setMinutes(endTime.getMinutes() + 5);

    // Obtén el tiempo de inicio en formato hh:mm
    const formattedEndTime = endTime.toTimeString().slice(0, 5);
    return `${end}-${formattedEndTime}`;
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getMinutes();

    const roundedMinutes = Math.floor(currentMinutes / 5) * 5;

    currentTime.setMinutes(roundedMinutes);

    const formattedStartTime = currentTime.toTimeString().slice(0, 5);

    currentTime.setMinutes(roundedMinutes + 5);
    const formattedEndTime = currentTime.toTimeString().slice(0, 5);

    return `${formattedStartTime}-${formattedEndTime}`;
  };
  const deleteItem = (index) => {
    closeAllDropdown();
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const reversedData = [...data].reverse();

    setTableData({
      labels: reversedData.map((item) => item.Time),
      datasets: [
        {
          label: "Users Gained",
          data: reversedData.map((item, i) => item.Strike * (i + 1) * 10000),
          backgroundColor: ["white"],
          borderColor: "#a33131",
          borderWidth: 2,
        },
        {
          label: "Users Loss",
          data: reversedData.map((item, i) => item.Strike * i * 15000),
          backgroundColor: ["white"],
          borderColor: "#e2b75a",
          borderWidth: 2,
        },
      ],
    });
  }, [data]);

  const getData = async () => {
    try {
      const res = await fetch("/api/ethereum", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        return data.data;
      } else if (res.status === 404) {
        console.warn("API endpoint not found");
        return [];
      } else {
        console.error("Error in the request:", res.status);
        return [];
      }
    } catch (error) {
      console.error("Error in the request:", error);
      return [];
    }
  };

  const onChange = (value, property, index) => {
    closeAllDropdown();
    let newData = [...data];
    data[index][property] = value;
    console.log(newData);
    setData(newData);
  };
  const closeAllDropdown = (id = "") => {
    for (let i = 1; i <= 6 * data.length; i++) {
      if (id !== `check${i}`) {
        const checkbox = document.getElementById(`check${i}`);
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    }
  };
  const options = {
    type: "line",
    maintainAspectRatio: false,
  };
  return (
    <main className={`${styles.main}`}>
      <h1 className={styles.zigZagText}> Zig Zag Moves - STAY AWAY</h1>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="scrollbar1 overflow-x-scroll lg:w-[35vw] w-full h-[max-content] pb-44">
          <table>
            <thead>
              <tr>
                <th>N</th>
                <th>Time</th>
                <th>OI Interpretation</th>
                <th>Trend</th>
                <th>Some text</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.Time}>
                  <td className="flex flex-row gap-2">
                    {session && session.user.admin ? (
                      <div
                        onClick={() => deleteItem(index)}
                        className="cursor-pointer w-6 flex justify-center items-center rounded h-6 bg-red-600"
                      >
                        X
                      </div>
                    ) : null}
                    {index + 1}
                  </td>
                  <td>
                    {session && !session.user.admin ? (
                      item.Time
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(e.target.value, "Time", index)
                        }
                        defaultValue={item.Time}
                        className={styles.inputTable}
                        type="text"
                      />
                    )}
                  </td>
                  <td className={styles.dropdown}>
                    <label htmlFor={`check${3 + 6 * index}`}>
                      <input
                        disabled={session && !session.user.admin ? true : false}
                        className={styles.input1}
                        type="checkbox"
                        id={`check${3 + 6 * index}`}
                        onChange={() =>
                          closeAllDropdown(`check${3 + 6 * index}`)
                        }
                      />
                      <label className={styles.label1}>
                        <label
                          onClick={() =>
                            onChange(0, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.blue} ${styles.wide}`}>
                            <Image
                              className="rotate0"
                              alt="arrow horizontal"
                              width={32}
                              height={32}
                              src="/images/table/arrow h.png"
                            />
                            Neutral
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(2, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.red} ${styles.wide}`}>
                            Bullish
                            <Image
                              alt="arrow down"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(1, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.green} ${styles.wide}`}>
                            Bullish
                            <Image
                              alt="arrow up"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(3, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.red} ${styles.wide}`}>
                            Ext Bullish
                            <Image
                              alt="arrow down"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(4, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.green} ${styles.wide}`}>
                            Ext Bullish
                            <Image
                              alt="arrow up"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                      </label>
                      <div
                        className={`${
                          item.CallOIInterpretation === 0
                            ? styles.blue
                            : item.CallOIInterpretation === 1 ||
                              item.CallOIInterpretation === 4
                            ? styles.green
                            : styles.red
                        } ${styles.wide}`}
                      >
                        {item.CallOIInterpretation === 0
                          ? "Neutral"
                          : item.CallOIInterpretation === 3 ||
                            item.CallOIInterpretation === 4
                          ? "Ext Bullish"
                          : "Bullish"}
                        <Image
                          alt={
                            item.CallOIInterpretation === 0
                              ? "arrow horizontal"
                              : item.CallOIInterpretation === 1
                              ? "arrow up"
                              : "arrow down"
                          }
                          width={32}
                          height={32}
                          src={
                            "/images/table/" +
                            (item.CallOIInterpretation === 0
                              ? "arrow.png"
                              : "arrow.png")
                          }
                        />
                      </div>
                    </label>
                  </td>
                  <td className={styles.dropdown}>
                    <label htmlFor={`check${4 + 6 * index}`}>
                      <input
                        disabled={session && !session.user.admin ? true : false}
                        className={styles.input1}
                        type="checkbox"
                        id={`check${4 + 6 * index}`}
                        onChange={() =>
                          closeAllDropdown(`check${4 + 6 * index}`)
                        }
                      />
                      <label className={styles.label1}>
                        <label
                          onClick={() =>
                            onChange(0, "PutOiInterpretation", index)
                          }
                        >
                          <div className={`${styles.blue} ${styles.wide}`}>
                            Shorts Covering
                            <Image
                              alt="arrow horizontal"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(2, "PutOiInterpretation", index)
                          }
                        >
                          <div className={`${styles.red} ${styles.wide}`}>
                            Short Build Up
                            <Image
                              alt="arrow down"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(1, "PutOiInterpretation", index)
                          }
                        >
                          <div className={`${styles.green} ${styles.wide}`}>
                            Long Build Up
                            <Image
                              alt="arrow up"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                      </label>
                      <div
                        className={`${
                          item.PutOiInterpretation === 0
                            ? styles.blue
                            : item.PutOiInterpretation === 1
                            ? styles.green
                            : item.PutOiInterpretation === 2
                            ? styles.red
                            : styles.yellow
                        } ${styles.wide}`}
                      >
                        {item.PutOiInterpretation === 0
                          ? "Shorts Covering"
                          : item.PutOiInterpretation === 1 ||
                            item.PutOiInterpretation === 3
                          ? "Long Build Up"
                          : "Short Build Up"}
                        <Image
                          alt={
                            item.PutOiInterpretation === 0
                              ? "arrow horizontal"
                              : item.PutOiInterpretation === 1
                              ? "arrow up"
                              : "arrow down"
                          }
                          width={32}
                          height={32}
                          src={
                            "/images/table/" +
                            (item.PutOiInterpretation === 0
                              ? "arrow.png"
                              : "arrow.png")
                          }
                        />
                      </div>
                    </label>
                  </td>
                  <td>
                    {session && !session.user.admin ? (
                      item.Strike
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(e.target.value, "Strike", index)
                        }
                        defaultValue={item.Strike}
                        className={styles.inputTable}
                        type="text"
                      />
                    )}
                  </td>
                </tr>
              ))}
              {session && session.user.admin ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start">
                      <button
                        onClick={addItem}
                        className="w-48 text-center bg-green-800 h-12 hover:bg-green-700"
                      >
                        +
                      </button>
                      <button
                        onClick={updateData}
                        className="w-48 text-center bg-blue-700 h-12 hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <div
          className="lg:w-[65vw] w-full flex order-first lg:order-none 
        max-lg:h-[40vh] max-lg:max-h-[350px]"
        >
          <Line
            className="bg-[#161a1e] pt-4 lg:pl-4"
            options={options}
            datasetIdKey="id"
            data={tableData}
          />
        </div>
      </div>
      <div className="scrollbar1 overflow-x-scroll lg:w-[35vw] w-full h-[max-content] pb-44">
        <table>
          <thead>
            <tr>
              <th>N</th>
              <th>Time</th>
              <th>Free text</th>
            </tr>
          </thead>
          <tbody>
            {freeTextTable.map((item, index) => (
              <tr key={item.Time}>
                <td className="flex flex-row gap-2">
                  {session && session.user.admin ? (
                    <div
                      onClick={() => deleteItem(index)}
                      className="cursor-pointer w-6 flex justify-center items-center rounded h-6 bg-red-600"
                    >
                      X
                    </div>
                  ) : null}
                  {index + 1}
                </td>
                <td>
                  {session && !session.user.admin ? (
                    item.Time
                  ) : (
                    <input
                      onChange={(e) => onChange(e.target.value, "Time", index)}
                      defaultValue={item.Time}
                      className={styles.inputTable}
                      type="text"
                    />
                  )}
                </td>
                <td>
                  {session && !session.user.admin ? (
                    item.Strike
                  ) : (
                    <input
                      onChange={(e) =>
                        onChange(e.target.value, "Strike", index)
                      }
                      defaultValue={item.Strike}
                      className={styles.inputTable}
                      type="text"
                    />
                  )}
                </td>
              </tr>
            ))}
            {session && session.user.admin ? (
              <tr>
                <td colSpan="5">
                  <div className="flex flex-start">
                    <button
                      onClick={addItem}
                      className="w-48 text-center bg-green-800 h-12 hover:bg-green-700"
                    >
                      +
                    </button>
                    <button
                      onClick={updateData}
                      className="w-48 text-center bg-blue-700 h-12 hover:bg-blue-600"
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </main>
  );
}
