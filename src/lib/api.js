import React from 'react';
import ReactPlayer from 'react-player';

export const Informacion = (space) => {
  let text;

  if (space.success === true) text = 'Yes';
  else text = 'No';

  return (
    <article>
      {space.links.flickr.original[0] && (
        <img src={space.links.flickr.original[0]} alt="Sin Foto" />
      )}
      <h2>{space.name}</h2>
      <p>{space.details}</p>
      <h3>More Info:</h3>
      <ul>
        <li>Success: {text}</li>
        <li>Fly Code: {space.flight_number}</li>
        <li>ID: {space.id}</li>
        <li>Date: {space.date_utc.slice(0, 10)}</li>
        {space.links.wikipedia && (
          <li>
            Wikipedia:{' '}
            <a href={space.links.wikipedia} target="_blank">
              {space.links.wikipedia}
            </a>
          </li>
        )}
      </ul>
      {space.links.webcast && (
        <>
          <h3>Video:</h3>
          <ReactPlayer
            url={space.links.webcast}
            className="react-player"
            width="640px"
            height="480px"
          />
        </>
      )}
      {(space.links.reddit.campaign ||
        space.links.reddit.launch ||
        space.links.reddit.media ||
        space.links.reddit.recovery) && (
        <>
          <h3>Reddit:</h3>
          <ul>
            {space.links.reddit.campaign && (
              <li>
                Campaign:{' '}
                <a href={space.links.reddit.campaign} target="_blank">
                  {space.links.reddit.campaign}
                </a>
              </li>
            )}
            {space.links.reddit.launch && (
              <li>
                Launch:{' '}
                <a href={space.links.reddit.launch} target="_blank">
                  {space.links.reddit.launch}
                </a>
              </li>
            )}
            {space.links.reddit.media && (
              <li>
                Media:{' '}
                <a href={space.links.reddit.media} target="_blank">
                  {space.links.reddit.media}
                </a>
              </li>
            )}
            {space.links.reddit.recovery && (
              <li>
                Recovery:{' '}
                <a href={space.links.reddit.recovery} target="_blank">
                  {space.links.reddit.recovery}
                </a>
              </li>
            )}
          </ul>
        </>
      )}
    </article>
  );
};

export const getLastNew = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
  const data = await response.json();
  return data;
};

export const getAllNews = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/launches');
  const data = await response.json();
  return data.reverse();
};

export const getTenNews = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/launches');
  const data = await response.json();
  const corte = data.slice(-10);
  return corte.reverse();
};
