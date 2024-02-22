import React from 'react';

const ComparisonChart = () => {
  const list = Array(10).fill();
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase'>
          Comparison Chart
        </h3>
      </div>
      <div class='relative max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6'>
        <div class='w-full relative shadow-lg'>
          <table class='w-full '>
            <thead class='text-primary font-semibold uppercase text-left sticky top-0  z-10'>
              <tr>
                <th scope='col' class='ps-12 py-6 bg-white rounded-tl-xl'>
                  University
                </th>
                <th scope='col' class='ps-10 py-6 bg-light-gray'>
                  General Admissions Rate
                </th>
                <th
                  scope='col'
                  class='ps-10 py-6 bg-light-yellow rounded-tr-xl'
                >
                  Rostrum Admissions Rate
                </th>
              </tr>
            </thead>
			<tbody class="w-full overflow-y-scroll h-60">
              {list.map((item, i) => (
                <tr id={i} class='text-primary font-normal  text-left '>
                  <td
                    class={`ps-12 py-y ${
                      i % 2 === 0 ? 'bg-[#F7F7F7]' : 'bg-white'
                    }`}
                  >
                    Harvard University
                  </td>
                  <td
                    class={`ps-10 py-4 ${
                      i % 2 === 0 ? 'bg-[#F0F0F0]' : 'bg-light-gray'
                    }`}
                  >
                    3.9%
                  </td>
                  <td
                    class={`ps-10 py-4 ${
                      i % 2 === 0 ? 'bg-[#F7E8CB]' : 'bg-light-yellow'
                    }`}
                  >
                    17%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
