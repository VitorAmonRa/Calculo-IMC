import React, {useState} from 'react';
import { 
  Container,
  Header,
  Input,
  Button,
  TextButton,
  Span
} from './style'


export default function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleSubmit (){
      const alt = altura/100;
      const imc = peso/(alt * alt);
      
      if(imc < 18.6){
        setMensagem("Voce esta abaixo do seu peso! Seu IMC é " + imc.toFixed(2));
      }else if(imc >= 18.6 && imc < 24.9 ){
        setMensagem("Peso ideal! Seu IMC é " + imc.toFixed(2)); 
      }else if(imc >= 24.9 && imc < 34.9){
        setMensagem("Voce esta acima do seu peso! Seu IMC é " + imc.toFixed(2));
      }else if(imc > 34.9){
        setMensagem("Cuidado Obesidade! Seu IMC é " + imc.toFixed(2));
      }

     /*  switch(imc){
        case imc < 18.6:
          setMensagem ("Voce esta abaixo do seu peso! Seu IMC é " + imc.toFixed(2));
        case imc >= 18.6 && imc < 24.9:
          setMensagem("Peso ideal! Seu IMC é " + imc.toFixed(2)); 
        case imc >= 24.9 && imc < 34.9: 
          setMensagem("Voce esta acima do seu peso! Seu IMC é " + imc.toFixed(2));
        case imc > 34.9:
          setMensagem("Cuidado Obesidade! Seu IMC é " + imc.toFixed(2));
        default:
          setMensagem("Valor Invalido");
      } */
      
    };

  return(
    <Container>
      <Header> Calcule o seu IMC! </Header>
      <Input 
      placeholder="Digite seu Peso (Kg)" 
      placeholderTextColor="black" 
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      keyboardType="numeric"
      />

      <Input 
      placeholder="Digite sua altura (cm)" 
      placeholderTextColor="black" 
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      keyboardType="numeric"
      />

      <Button onPress={handleSubmit}>
        <TextButton>Calcular</TextButton>
      </Button>
      <Span>{mensagem}</Span>
    </Container>
  )
}
