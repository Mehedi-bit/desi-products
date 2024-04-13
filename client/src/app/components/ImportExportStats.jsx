import React from 'react';

const ImportExportStats = () => {
    return (
        <div className='flex justify-center items-center mx-2 mb-48 flex-col gap-10'>
            <div className="stats shadow w-[90%] md:w-[40%] flex flex-col justify-center items-center">
  
                <div className="stat md:px-32">
                    <div className="stat-figure text-success">
                        <img className='w-8' src="import.png" alt="" />
                    </div>
                    <div className="stat-title">Imports</div>
                    <div className="stat-value text-success">17.06%</div>
                    <div className="stat-desc">Of GDP (World Bank Data)</div>
                </div>
                
                <div className="stat md:px-32">
                    <div className="stat-figure text-teal-500">
                        <img className='w-8' src="export.png" alt="" />
                    </div>
                    <div className="stat-title">Exports</div>
                    <div className="stat-value text-teal-500">10.66%</div>
                    <div className="stat-desc">Of GDP (World Bank Data)</div>
                </div>
                
                <div className="stat md:px-32">
                    <div className="stat-figure text-secondary">
                    <div className="">
                        <div className="w-10 rounded-full">
                            <img src="financial-ratio.png" />
                        </div>
                    </div>
                    </div>
                    <div className="stat-value text-gray-500">1 : 1.91</div>
                    <div className="stat-title">Ratio of</div>
                    <div className="stat-desc">Exports to Imports</div>
                </div>
            
            </div>
            <h1 className='w-full text-center mx-5 font-light'>This means for every $1 exported, Bangladesh imports approximately $1.91.</h1>
        </div>
    );
};

export default ImportExportStats;