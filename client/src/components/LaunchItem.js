import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launchData: {flight_number, mission_name, launch_date_local, launch_success},
}) => {
  const missionNameClass = classNames({
    'text-success': launch_success,
    'text-danger': !launch_success,
  });

  const parsedLaunchDate = dayjs(launch_date_local).format('YYYY-MM-DD HH:mm');

  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>
            Mission: <span className={missionNameClass}>{mission_name}</span>
          </h4>
          <p>Date: {parsedLaunchDate}</p>
        </div>
        <div className='col-md-3'>
          <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>Launch details</Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
