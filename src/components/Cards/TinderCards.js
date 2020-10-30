import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards(){

    const [people, setPeople] = useState([
        {
            name: "Barsh",
            url: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/101229633_143252610635158_7479064048442686164_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=4yCUvIrpNp4AX-wkG7u&_nc_tp=15&oh=e14aae85911871a33112c906cd98cf87&oe=5FC61D9C",
        },
        {
            name: "Dweeb",
            url: "https://cdn.discordapp.com/attachments/735975091455656037/771207995723350056/unknown.png"
        },
        {
            name: "AllahCat",
            url: "https://cdn.discordapp.com/attachments/735975091455656037/770774846770118666/image0.jpg"
        },
        {
            name: "Satinsh",
            url: "https://cdn.discordapp.com/attachments/735975091455656037/769821347583885322/image0.png"
        },
        {
            name: "Udan",
            url: "https://cdn.discordapp.com/attachments/735975091455656037/768341387543969822/IMG_20201020_221405.jpg"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name+" has left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe = {(dir)=> swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div
                            style={{
                                backgroundImage: "url("+person.url+")"
                            }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );

}

export default TinderCards;