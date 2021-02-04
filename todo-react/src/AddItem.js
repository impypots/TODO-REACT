import React, { useState } from 'react';

function AddItem() {

    function addListItem() {
        
    }

    return (
        <div id="AddItem">
            <form>
                <input type="text" />
                <button onClick={addListItem}>Add Item</button>
            </form>
        </div>
    )
}

export default AddItem;