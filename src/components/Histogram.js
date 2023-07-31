import React from 'react';

const Histogram = () => {
    // Replace these data points with your actual productivity data
    const productivityData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const barWidth = 30;
    const barSpacing = 50;
    const barHeightFactor = 3;

    return (
        <div className="mt-8 flex-col items-center justify-center text-center w-full bg-gray-600">
            <h3 className="text-xl font-bold mb-4">Productivity Histogram</h3>
            <svg className="w-full h-48 rounded-md bg-gray-100 text-center flex justify-center py-10 px-20">
                {productivityData.map((dataPoint, index) => (
                    <rect
                        key={index}
                        x={index * (barWidth + barSpacing)}
                        y={100 - dataPoint * barHeightFactor}
                        width={barWidth}
                        height={dataPoint * barHeightFactor}
                        fill="#4C51BF"
                    />
                ))}
            </svg>
        </div>
    );
};

export default Histogram;
