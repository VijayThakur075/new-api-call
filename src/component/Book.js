import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../thunk/book";
import { useEffect } from "react";

export const Book = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.bookDetails.bookresult)
    console.log(selector)

    useEffect(() => {
        dispatch(fetchBook())
        console.log(selector)
    }, [])
    return (
        <div>
            <h1>
                book page
            </h1>
            {selector.map((item) => (

                <ul><li>{item.name}</li>
                    <li>{item._id}</li></ul>
            ))}

        </div>
    )
}