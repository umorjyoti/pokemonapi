import React from 'react';
import styled from 'styled-components';

function Card({pokemon}) {
    return (
        <CardStyled>
            <div className="img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="name">
                <p>Name : </p>
                {pokemon.name}
            </div>
            <div className="types">
                <p>Type :</p>
                {pokemon.types.map(type => {
                    return (
                        <div className="card-type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="card-info">
                <div className="card-weight">
                    <p className="title">Weight : </p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card-height">
                    <p className="title">Height : </p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card-ability">
                    <p className="title">Ability : </p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled= styled.div`
    height: 20rem;
    min-width: 40vw;
    margin: 2rem;
    background-color: var(--border-color);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    .img{
        height: 5rem;
        width: 5rem;
        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
    .name,.types{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.7rem;
        p{
            font-size: 1.7rem;
        }
    }
    .card-info{
        margin-top: 1rem;
        border-radius: 0.5rem;
        background-color: var(--background-dark-color-2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 40%;
        .card-weight ,.card-height,.card-ability{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            margin: auto;
            p{
                font-size: 1.2rem;
            }
        }
    }
`;

export default Card;
