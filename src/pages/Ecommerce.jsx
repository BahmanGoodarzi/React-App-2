import React from 'react';
import { BsCurrencyDollor } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContexProvider';
import ChartHome from '../components/Charts/ChartHome';
import SmithChart from '../components/Charts/SmithChart';

const Ecommerce = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-xl'>$63.448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px' size='sm' />
          </div>
        </div>

        <div className='flex flex-wrap justify-center items-center m-3 gap-1 '>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl'>
              <button type='butten' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-xl rounded-full p-4 hover:drop-shadow-sm'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-md font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-6 flex-wrap justify-center items-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-900'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4 text-sm'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-sm'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-sm'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap gap-10 justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-2xl font-semibold'>$93.483</span>
                  <span className='p-1.5 bg-green-400 text-white rounded-full ml-3 text-[10px] cursor-pointer'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
                <p className='mt-8'>
                  <span className='text-2xl font-semibold'>$48.483</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  height="80px"
                  width="200px"
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' size='sm' />
              </div>
            </div>

            <div>
              <Stacked
                height="360px"
                width="380px"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full md:w-96">
          <div className="p-4 rounded-2xl m-3 md:m-0" style={{ background: "#f6fff8" }}>
            <div className='flex justify-between'>
              <p className='font-semibold text-gray-700 text-2xl'>Earnings</p>
              <div className='flex flex-col'>
                <p className='font-semibold text-gray-700 text-2xl'>$63.448.78</p>
                <span className='text-gray-500'>Monthly revenue</span>
              </div>
            </div>
            <div>
              <ChartHome />
            </div>
          </div>

          <div className='p-8 rounded-2xl m-3 md:m-0' style={{ background: "#f6fff8" }}>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col'>
                <p className='font-semibold text-gray-700 text-2xl'>$43.246</p>
                <span className='text-gray-500'>Yearly sales</span>
              </div>
              <div>
                <SmithChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce