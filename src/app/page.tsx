"use client"
import { useEffect, useState } from 'react';
import Grid from '../components/grid'
import PlaceForm from '../components/place'

export default function Home() {

  const [place, setPlace] = useState({
    placeX: 0,
    placeY: 0,
    face: 'SOUTH'
  });
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const [angle, setAngle] = useState(0);
  const [showReport, setReport] = useState(false);

  useEffect(() => {
    checkAngle();
  }, [place]);

  useEffect(() => {
    checkFace();
  }, [angle]);

  const checkFace = () => {
    switch (angle) {
      case 0:
        setPlace({ ...place, face: 'SOUTH' });
        break;
      case 90:
        setPlace({ ...place, face: 'WEST' });
        break;
      case 180:
        setPlace({ ...place, face: 'NORTH' });
        break;
      case 270:
        setPlace({ ...place, face: 'EAST' });
        break;
      default:
        setPlace({ ...place, face: 'SOUTH' });
        break;
    }
  }

  const checkAngle = () => {
    switch (place.face) {
      case 'SOUTH':
        setAngle(0);
        break;
      case 'NORTH':
        setAngle(180);
        break;
      case 'EAST':
        setAngle(270);
        break;
      case 'WEST':
        setAngle(90);
        break;
      default:
        setAngle(0);
        break;
    }
  }

  const moveLeft = () => {
    const angleNew = angle + 90;
    if (angleNew > 270) {
      setAngle(0);
    } else if (angleNew < 0) {
      setAngle(270);
    } else {
      setAngle(angleNew);
    }
  }

  const moveRight = () => {
    const angleNew = angle - 90;
    if (angleNew > 270) {
      setAngle(0);
    } else if (angleNew < 0) {
      setAngle(270);
    } else {
      setAngle(angleNew);
    }
  }

  const report = () => {
    setReport(!showReport);
  }

  const handleSubmit = (event: any) => {
    setPlace({ ...event });
  }

  return (
    <div className="app">
      <Grid rows={rows} columns={columns} placeX={Number(place.placeX)} placeY={Number(place.placeY)} face={place.face} />
      <div className="action-ct">
        <PlaceForm submitEvent={handleSubmit} rows={rows} columns={columns} />
        <div className="command-ct">
          <button className="left" onClick={moveLeft}>Left</button>
          <button className="right" onClick={moveRight}>Right</button>
          <button className="report" onClick={report}>Report</button>
          {
            showReport ?
              <div className="position">
                <p>Position X: {place.placeX}</p>
                <p>Position Y: {place.placeY}</p>
                <p>Facing: {place.face}</p>
              </div>
              : ''
          }
        </div>
      </div>
    </div>
  );
}
