import React, { useState } from 'react';
import chevrondown from '../Images/chevron-down (10).png'


const MutibleChoisDropDown = () => {
  const array = [
    { name: 'قيد التنفيد', id: '1' },
    { name: 'ملغى', id: '2' },
    { name: 'مؤجل', id: '3' },
    { name: 'مكتمل', id: '4' },
  ];

  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleToggle = (itemId, itemName) => {
    if (selected.includes(itemName)) {
      setSelected(selected.filter((item) => item !== itemName));
    } else {
      setSelected([...selected, itemName]);
    }
  };
  console.log(selected)

  function asdd() {
    setStart(!start);
  }

  return (
    <div className='w-full'>
      <div className=''>
        <button
          className='border border-[#D9D9D9CC] bg-[#F7F7F8] p-2 w-[100%]'
          type='button'
          onClick={asdd}
        >
          <div className='flex relative'>
             <img src={chevrondown} className={`w-4 h-4 ${start?'rotate-180':''} `}/> 
            <h2 className='text-xs absolute right-[0%]'>
              {selected.join(' , ')}
            </h2>
          </div>
        </button>
      </div>
      {start && (
        <div
          id='dropdownHover'
          className='z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 absolute'
        >
          <ul className='py-2 text-sm'>
            {array.map((item) => (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id, item.name)}
                className='bg-white p-1 items-center rounded-lg text-xs'
              >
                <div className='flex justify-between'>
                  <h1>{item.name}</h1>
                  <div>
                    <button
                      className='h-5'
                      onClick={() => handleToggle(item.id, item.name)}
                    >
                      {selected.includes(item.name) ? (
                         <div className='border-2 border-[#F9C688] rounded-full p-0.5'>
                          <div className='bg-[#F9C688] p-1 rounded-full'></div>
                        </div>
                      ) : (
                        <div className='border-2 border-[#B5B5B5] p-1.5 rounded-full'></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MutibleChoisDropDown;