import React from "react";
import axios from "axios";
import "./GovtDashboard.css";
import Warehouse from "./Warehouse";

const GovtDashboard = () => {
    const [state, setState] = React.useState("");
    const [cityData, setCityData] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [city, setCity] = React.useState("");
    const [storeDetails, setStoreDetails] = React.useState([]);

    const data1 = [
        { item: "rice", unused: 80, filledDate: "20-10-2020" },
        { item: "jaggery", unused: 20, filledDate: "20-7-2020" },
        { item: "wheat", unused: 80, filledDate: "20-10-2020" },
        { item: "dal", unused: 30, filledDate: "20-4-2020" },
        //   { item: "wheat", unused: 80, filledDate: "20-10-2020" },
        //   { item: "rice", unused: 80, filledDate: "20-4-2020" },
        //   { item: "wheat", unused: 40, filledDate: "20-7-2020" },
        //   { item: "juggery", unused: 80, filledDate: "20-10-2020" }
    ];

    const data2 = [
        { item: "rice", unused: 50, filledDate: "20-2-2020" },
        { item: "jaggery", unused: 70, filledDate: "20-10-2020" },
        { item: "wheat", unused: 20, filledDate: "20-4-2020" },
        { item: "dal", unused: 60, filledDate: "20-6-2020" },
        //   { item: "wheat", unused: 80, filledDate: "20-10-2020" },
        //   { item: "rice", unused: 80, filledDate: "20-4-2020" },
        //   { item: "wheat", unused: 40, filledDate: "20-7-2020" },
        //   { item: "juggery", unused: 80, filledDate: "20-10-2020" }
    ];

    React.useEffect(() => {
        axios
            .get("http://localhost:8080/store")
            .then((res) => setData(res.data.stores))
            .catch((err) => console.log(err));
    }, []);

    React.useEffect(() => {
        let res = data.filter((el) => el.state === state);
        let cities = new Set(res.map((el) => el.city));

        cities = [...cities];
        //   console.log(cities)
        setCityData(cities);
    }, [state]);

    React.useEffect(() => {
        let res = data.filter((el) => el.city === city);
        setStoreDetails(res);
    }, [city]);

    console.log(cityData, storeDetails);

    return (
        <div
            style={{
                margin: "100px auto",
                textAlign: "center",
            }}
        >
            <h2>Choose Location</h2>

            <select onChange={(e) => setState(e.target.value)}>
                <option value="">--- Choose State ---</option>
                <option value="uttar pradesh"> Uttar Pradesh </option>
                <option value="gujarat"> Gujarat </option>
            </select>

            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">--- Choose City ---</option>
                {cityData?.map((el) => (
                    <option value={el} key={el}>
                        {" "}
                        {`${el}`}{" "}
                    </option>
                ))}
            </select>

            {state.length > 0 && city.length > 0 && storeDetails && (
                <div className="container">
                    <div className="row text-start padding-y-5">
                        <h1>Dash Board</h1>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col-12 border">
                            <div className="row border table-head">
                                <div className="col-2 border py-2">
                                    Store Name
                                </div>
                                <div className="col-2 border py-2">Product</div>
                                <div className="col-2 border py-2">
                                    Supply (kg)
                                </div>
                                <div className="col-2 border py-2">
                                    Received (kg)
                                </div>
                                {/* <div className="col-2 border py-2">
                                    Dispatch Details
                                </div>
                                <div className="col-2 border py-2">
                                    Owner Details
                                </div> */}
                                <div className="col-2 border py-2">
                                    Total Purchase (kg)
                                </div>
                                <div className="col-2 border py-2">
                                    Buffer (kg)
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            {storeDetails.map((e, i) => (
                                <div>
                                    {e.inventory.map((inv) => (
                                        <div className="row ">
                                            <div className="col-2 py-2 border">
                                                {e.name}
                                            </div>
                                            <div className="col-2 py-2 border ">
                                                {inv.name}
                                            </div>
                                            <div className="col-2 py-2 border">
                                                {inv.supplied}
                                            </div>
                                            <div className="col-2 py-2 border">
                                                {inv.received}
                                            </div>
                                            {/* <div className="col-2 py-2 border">
                                                Dispatched
                                            </div>
                                            <div className="col-2 py-2 border">
                                                Owner
                                            </div> */}
                                            <div className="col-2 py-2 border">
                                                {inv.used}
                                            </div>
                                            <div className="col-2 py-2 border">
                                                {inv.remaining}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Warehouse data={data1} num={1} />
                    <Warehouse data={data2} num={2} />
                </div>
            )}
        </div>
    );
};

export { GovtDashboard };
