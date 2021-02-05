import React from 'react';

function AddItem({ setList }) {

    let nextItem = '';
    
    function makeNext(prev) {
        nextItem = prev.target.value
    }

    function submitItem(e) {
        if(nextItem) {
            e.preventDefault();
            setList(prev => prev.concat(nextItem));
            document.querySelector("#AddItem input").value = '';
        }
    }

    return (
        <div id="AddItem">
            <form onSubmit={submitItem}>
                <input onChange={makeNext} type="text" />
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default AddItem;