import React from 'react';
import { SmithchartComponent, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective } from '@syncfusion/ej2-react-charts';

const SmithChart = () => {
    return (
        <SmithchartComponent id='smithchart' background='#f6fff8' width='200px' height='200px'>
            <SmithchartSeriesCollectionDirective>
                <SmithchartSeriesDirective points={[
                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                    { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                    { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                    { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                    { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                ]} name='Transmission1'>
                </SmithchartSeriesDirective>
                <SmithchartSeriesDirective points={[
                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                    { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                    { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                    { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                    { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                ]} name='Transmission2'>
                </SmithchartSeriesDirective>
            </SmithchartSeriesCollectionDirective>
        </SmithchartComponent>
    )
}

export default SmithChart