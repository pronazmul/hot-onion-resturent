import React from 'react';

const FoodItem = () => {
    return (
        <div className="w-75 mx-auto">
            <div className="row mt-3">
                <div class="btn-group mx-auto" role="group" aria-label="Basic example">
                    <button type="button" class="btn rounded-button text-light">Breakfast</button>
                    <button type="button" class="btn rounded-button text-light">Lunch</button>
                    <button type="button" class="btn rounded-button text-light">Dinner</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;