import React from 'react';

const Bannar = () => {
    return (
        <div className='bannar-image d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-4'>Best Food Waitting For Your Bally</h1>
            <div className="form-inline w-50 mx-auto d-block mt-3">
                <input type="text" placeholder='Search Food Item' className='form-control rounded-input w-75 py-2' disabled/>
                <button style={{marginLeft:'-50px'}} className='btn text-light rounded-button'>Search</button>
            </div>

        </div>
    );
};

export default Bannar;