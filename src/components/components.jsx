import style from 'styled-components';



export const Title = style.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-family: sans-serif;
    color: Black;
    min-height: 15vh;
    font-size: 3.2em;
`

export const Maindiv = style.div`
    max-width: 400px;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 1px 2px black;
    margin: 0px auto;
`

export const Password = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-family: monospace;
    border: 2px solid #1684FF;
    border-radius: 2px;
    font-size: 1.8em;
    color: Black;
    width: 80%;
    min-height: 5vh;
 
`

export const InputLength = style.input`
    width:200px;
    
`

export const BtnGenerator = style.button`
    width: 200px;
    height: 40px;
    cursor: pointer;
    font-weight: 100;
    font-size: 1.3em;
    font-family: sans-serif;
    border:1px solid grey;
    background-color: #1684FF;
    color: white;
`


