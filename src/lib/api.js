import React from "react";

export const Informacion = (space) => {
  let text, wiki, you;

  if (space.success === true) text = "Yes";
  else text = "No";

  if (space.links.wikipedia !== null)
    wiki = "Wikipedia: " + space.links.wikipedia;
  else wiki = "No hay enlace a Wikipedia";

  if (space.links.webcast !== null) you = "Youtube: " + space.links.webcast;
  else you = "No hay enlace a Youtube";

  return (
    <>
      <hr />
      <article>
        <h2>{space.name}</h2>

        <p>{space.details}</p>
        <h3>More Info</h3>
        <ul>
          <li>Success: {text}</li>
          <li>Fly Code: {space.flight_number}</li>
          <li>ID: {space.id}</li>
        </ul>
        <h3>Links</h3>
        <ul>
          <li>
            <a href={space.links.wikipedia}>{wiki}</a>
          </li>
          <li>
            <a href={space.links.webcast}>{you}</a>
          </li>
        </ul>
      </article>
    </>
  );
};

export const getLastNew = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches/latest");
  const data = await response.json();
  return data;
};

export const getAllNews = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();
  return data;
};

export const getTenNews = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();
  const corte = data.slice(-10);
  return corte;
};
