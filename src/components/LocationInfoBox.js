const LocationInfoBox = ({ info, close }) => {
  let rawDate = new Date(info.geometries[0].date);
  let eventDate = rawDate.toDateString();
  console.log(info);
  return (
    <div className='location-info'>
      <p onClick={close} class='close-box'>
        <em>close</em>
      </p>
      <h2>
        <strong>{info.title}</strong>
      </h2>
      <ul>
        <li>ID: {info.id}</li>
        <li>Date: {eventDate}</li>
        <li>
          <p>
            Source: {info.sources[0].id}
            {'  '}
            <a href={info.sources[0].url} target='_blank' rel='noreferrer'>
              {'  '}
              More Info
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
