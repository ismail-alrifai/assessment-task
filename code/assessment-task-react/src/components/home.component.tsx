import { FormEvent, useState } from "react";

import { GeoLocation } from "./geo-location.type";
import { FormField } from "./form-field.type";
import Alert from "./alert-component";

const Home = () => {
  const [geoLocation, setGeoLocation] = useState<FormField>();
  const [response, setResponse] = useState<GeoLocation>();
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setGeoLocation((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await (
      await fetch("http://localhost:3000/geo-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5173",
        },
        body: JSON.stringify(geoLocation),
      })
    ).json();

    if (response.statusCode && response.statusCode >= 400) {
      setErrorMessage(response.message);
    } else {
      setErrorMessage("");
      setGeoLocation({ latitude: "", longitude: "", email: "" });
      setResponse(response);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "700px",
            height: "100vh",
          }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              justifyContent: "space-between",
              height: "360px",
            }}
          >
            <div className="mb-3">
              <label className="form-label">Longitude</label>
              <input
                type="text"
                name="longitude"
                value={geoLocation?.longitude}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Latitude</label>
              <input
                type="text"
                name="latitude"
                onChange={changeHandler}
                value={geoLocation?.latitude}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={geoLocation?.email}
                onChange={changeHandler}
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {errorMessage && (
              <Alert color="danger" onClose={() => setErrorMessage("")}>
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>

        <div
          style={{
            flexGrow: 1,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "75%",
              height: "60%",
              background: "#333",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <p>
              <span style={{ color: "blueviolet" }}>Id : </span>
              {response?.id}
            </p>
            <p>
              <span style={{ color: "blueviolet" }}>Latitude : </span>
              {response?.latitude}
            </p>
            <p>
              <span style={{ color: "blueviolet" }}>Longitude : </span>
              {response?.longitude}
            </p>
            <p>
              <span style={{ color: "blueviolet" }}>Location : </span>
              {response?.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
