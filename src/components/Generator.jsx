import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Title, Maindiv, Password, BtnGenerator, InputLength } from './components'


function generator() {

    const[password, setPassword] = React.useState(null)
    const[length, setLength] = React.useState(0)

    const CreatePass = () =>{
        const charset = ['a', 'b', 'c', 'd', 'E', 'F', 'G','h', 'i','j', 1, 2, 3, 4, 5, '!', '@', '$', '&'];
        let List = []

        let i
        for(i=0; i<=parseInt(length) -1 ; i++){
            const randomNumber = Math.floor(Math.random()*charset.length)
            List.push(charset[randomNumber])
        }
        // Tratando o array
        const convertArray = List.toString();
        const ConvertedArray = convertArray.replaceAll(',','')
    
        setPassword(ConvertedArray)
    } 

    const handleChange = (event)=>{
        // Quantidade de caracteres que serao gerados
        const value = event.target.value
        setLength(parseInt(value))
    }

    const LocalStorage= () =>{
        // SetValue
        if(password !== null){
           localStorage.setItem('value', password);
        }
        else{
            const getValue = localStorage.getItem('value');
            setPassword(getValue)
        }
    
        // Getvalue

    }

    useEffect(()=>{
        CreatePass();
        LocalStorage()
        
    },[length])


  return (
    <div>
        <Title>Gerador de Senhas</Title>
        
        <Maindiv>
            <Password>{password}</Password>
             <InputLength type='range' min='0' max='20' onChange={handleChange}/>
             Charset:{length}
             {<CopyToClipboard text={password}>
                <BtnGenerator>Copiar</BtnGenerator>
            </CopyToClipboard> }
        </Maindiv>

    </div>
  )
}

export default generator;