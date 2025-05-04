import React from 'react';

const PetCard = () => {
      return (
            <div className="border p-4 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg">cat</h3>
                  <p>age : </p>
                  <p>Species: frendly</p>
                  <p>Personality :</p>
                  <p>Mood: <span className=''>happy</span></p>
                  <p>Adoption Date: </p>

                  <div className="flex justify-between mt-2">
                        <button className="bg-green-500 text-white p-2 rounded">Adopt</button>
                        <button className="bg-red-500 text-white p-2 rounded">Delete</button>
                  </div>
            </div>
      );
}

export default PetCard;
