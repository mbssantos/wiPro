import React from 'react';
import ReactDOM from 'react-dom';
import Forecaster from './forecaster';
import mockData from './mockData';

it('Corectly formats the response', () => {
    const mockList = [];
    const data = Forecaster.format(mockData.list);

    expect(data.length).toEqual(5);
    expect(data[0].length).toEqual(7);

    expect(data[0][0].temp).toEqual(6.62);
    expect(data[0][0].timestamp).toEqual('2017-02-09 03:00:00');
})
