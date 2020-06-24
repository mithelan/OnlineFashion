import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'

const StarRating =()=> {
    const [rating,setRating] = useState(null);
    const [hover,setHover]= useState(null);
    return <div>
        {/*short hand for array with five untitled items in it.*/}
        {[...Array(5)].map((star,i)=>{
            const ratValue = i+1;
            return (
                <label>
                    <input  style={{display : "none"}}
                            type="radio"
                            name='rating'
                            value={ratValue}
                            onClick={()=>setRating(ratValue)}

                    />

                    <FaStar style={{cursor : "pointer"}}
                            color={ratValue <= (hover||rating) ? "#ffc107":"#e4e5e9"}
                            onMouseEnter={()=>setHover(ratValue )}
                            onMouseLeave={()=>setHover(null )}

                    />

                </label>

            )
        })}

    </div>
}


export  default  StarRating
