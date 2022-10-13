import React, { useState } from "react";
import './Index.css'



const Todo = () => {

    const [Data, setData] = useState('');
    const [Text, SetText] = useState([]);
    const [Select, SetSelect] = useState(true);
    const [Items, SetItems] = useState(null)

    const addItem = () => {
        if (!Data) {
            alert("Galti check kr")
        } else if (Data && !Select) {
            SetText(
                Text.map((elem) => {
                    if (elem.id === Items) {
                        return { ...elem, name: Data }
                    }
                    return elem;
                })
            )
            SetSelect(true)
            setData('')
            SetItems(null)
        }
        else {
            const allData = { id: new Date().getTime().toString(), name: Data }
            SetText([...Text, allData]);
            setData('');
        }
    }

    const deleteItem = (index) => {

        const updateditems = Text.filter((elem) => {
            return index != elem.id;
        })
        console.log(updateditems)
        SetText(updateditems)
    }

    const EditItem = (id) => {
        const EditItems = Text.find((elem) => {
            return elem.id === id
        });
        console.log(EditItems)
        SetSelect(false)
        setData(EditItems.name)
        SetItems(id)
    }

    return (
        <div className="Todo">
            <div className="Heading">
                <h2>Todo-List</h2>
            </div>
            <div className="Todo-List">
                <input value={Data} onChange={(e) => setData(e.target.value)} type={'text'} />
                {/* <input value={Data} onChange={(e) => setData(e.target.value)} type={'text'} /> */}
                <label>type Some data</label>

                {
                    Select ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i> :
                        <i className="fa fa-edit edit-btn" title="update Item" onClick={addItem} ></i>
                }

            </div>

            <div className="VList">
                <div className="List">

                    {
                        Text.map((elem) => {
                            return (
                                <div className="On-List" key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <i id="Delete" className="fa fa-trash add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                    <i id="Edit" className="fa fa-edit edit-btn" title="Edit Item" onClick={() => EditItem(elem.id)}></i>
                                </div>

                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Todo;







