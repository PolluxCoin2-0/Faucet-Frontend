import React, { useState } from 'react';

function NotARobot() {
  const [isChecked, setIsChecked] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // Simulate a verification process
      setTimeout(() => {
        setIsVerified(true);
      }, 1000); // 1-second delay for effect
    } else {
      setIsVerified(false);
    }
  };

  return (
    <div className="flex flex-col  mt-6 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg  px-24 py-2">
        <div className="flex justify-start space-x-3">
          <input
            type="checkbox"
            id="not-a-robot"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="not-a-robot" className="text-lg font-medium text-gray-700 ">
            I am not a robot
          </label>
        </div>
        {isVerified ? (
          <p className="mt-4 text-green-600 font-medium">Verified!</p>
        ) : (
          <p className="mt-4 text-red-600 font-medium">Please verify.</p>
        )}
      </div>
    </div>
  );
}

export default NotARobot;
