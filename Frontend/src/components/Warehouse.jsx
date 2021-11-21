import "./GovtDashboard.css";

// const data = [
//     { item: "rice", unused: 80, filledDate: "20-10-2020" },
//     { item: "juggery", unused: 20, filledDate: "20-10-2020" },
//     { item: "wheat", unused: 80, filledDate: "20-10-2020" },
//     { item: "rice", unused: 30, filledDate: "20-4-2020" },
//     { item: "wheat", unused: 80, filledDate: "20-10-2020" },
//     { item: "rice", unused: 80, filledDate: "20-4-2020" },
//     { item: "wheat", unused: 40, filledDate: "20-7-2020" },
//     { item: "juggery", unused: 80, filledDate: "20-10-2020" },
// ];

export default function Warehouse({ data, num }) {
    return (
        <div className="container">
            <h3>WareHouse Details {num}</h3>
            <div className="row border-black">
                <div className="py-5 warehouse m-auto">
                    {data.map((e) => (
                        <div className="sub-ware my-4 text-center">
                            <div
                                className="filler"
                                style={{
                                    backgroundColor:
                                        11 - e.filledDate.split("-")[1] < 3
                                            ? "#49FF00"
                                            : 11 - e.filledDate.split("-")[1] <
                                              6
                                            ? "#FBFF00"
                                            : "#FF0000",
                                    width: `${e.unused}%`,
                                }}
                            ></div>

                            {e.item}
                        </div>
                    ))}
                </div>
                <div className="row m-0 p-0">
                    <div
                        className="col-4"
                        style={{
                            backgroundColor: "#49FF00",
                            height: "60px",
                            alignItems: "center",
                            textAlign: "center",
                            color: "#white",
                            padding: "12px",
                        }}
                    >
                        <h4>Priority 3</h4>
                    </div>

                    <div
                        className="col-4"
                        style={{
                            backgroundColor: "#FBFF00",
                            height: "60px",
                            alignItems: "center",
                            textAlign: "center",
                            // color: "#212121"
                            color: "black",
                            padding: "12px",
                        }}
                    >
                        <h4>Priority 2</h4>
                    </div>

                    <div
                        className="col-4"
                        style={{
                            backgroundColor: "red",
                            height: "60px",
                            alignItems: "center",
                            textAlign: "center",
                            color: "white",
                            padding: "12px",
                        }}
                    >
                        <h4>Priority 1</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
