import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../thunk/book";
import { useEffect } from "react";

export const Characters = () => {
    const dispatch = useDispatch()
    const showCharacters = useSelector((state) => state.bookDetails.character)
    console.log(showCharacters)
    useEffect(() => {
        dispatch(fetchCharacter())

    }, [])
    return (
        <div>
            <h1>
                character page
            </h1>
            {showCharacters.map((item) => (
                <ul>
                    <li>Character Name :{item.name}</li>
                    <li>Character Gender :{item.gender}</li>
                    <li>Character Hight :{item.height}</li>

                </ul>
            ))}
        </div>
    )
}