'use client'
import React, { useState, useEffect } from "react";

export default function ScrollBox(props) {
    const userId = props.userId;
    const [mealLogs, setMealLogs] = useState([]);

    useEffect(() => {
        const payload = { "userId": "690fc7733d3f4948a7d89600" }

        // fetch('https://squire-app.onrender.com/api/suggest-meal')
        //   .then((res) => {
        //     if (!res.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     return res.json();
        //   })
        //   .then((data) => {s
        //     setResponseText(JSON.stringify(data));
        //   })
        //   .catch((error) => {
        //     setResponseText('Error: ' + error.message);
        //   });

        fetch("https://squire-app.onrender.com/meals/get-meals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => setMealLogs(data.mealLogs))
            .catch(err => console.error(err));
    }, [userId]);

    console.log(mealLogs)

    return (
        <div className="w-96 h-64 bg-gray-100 p-4 overflow-y-auto custom-scrollbar">
            {
                mealLogs.length !== 0 ? (
                    mealLogs.map((mealLog, index) => (
                        <div key={index}>
                            <h2 className="font-bold">Day {index + 1}</h2>
                            {mealLog.meals.map((meal) => (
                                <div key={meal.meal_id}>
                                    {meal.mealName}
                                    </div>
                            ))}
                            
                        </div>
                    ))) : (
                    <p>No meal logs found.</p>
                )}
        </div>
    );


};