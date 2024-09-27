// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useEffect, useRef, useState} from 'react';
import Globe from 'react-globe.gl';
// import * as d3 from 'd3';

const World = () => {
    const globeEl = useRef();
    const [popData, setPopData] = useState([]);

    useEffect(() => {
        fetch('../../utils/world_population.csv').then(res => res.text())
            .then(csv => d3.csvParse(csv, ({lat, lng, pop}: { lat: number, lng: number, pop: number }) => ({
                lat: +lat,
                lng: +lng,
                pop: +pop
            })))
            .then(setPopData)
    }, []);

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.1;
    }, []);

    const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
        .domain([0, 1e7]);

    return <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        height={326}
        width={326}
        hexBinPointsData={popData}
        hexBinPointWeight="pop"
        hexAltitude={d => d.sumWeight * 6e-8}
        hexBinResolution={4}
        hexTopColor={d => weightColor(d.sumWeight)}
        hexSideColor={d => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={false}
        labelsData={[{
            lat: 18.913,
            lng: 73.7389,
            text: 'Pune, India',
            color: 'white',
            size: 15,
        }]}
    />;
};

export default World;