import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #363537;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.Text`
    text-align:center;
    font-weight: bold;
    font-size: 30px;
    color: #FFF;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    color: #191919;
    font-weight: bold;
    background-color: rgba(255,255,255,0.6);
    width: 250px;
    height: 40px;
    margin: 10px;
    padding: 0 10px;
`;


export const Button = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    width: 250px;
    height: 40px;
    margin-top: 10px;
    background-color: #E84855;
    `;

export const TextButton = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #FFF;
    font-size: 18px;
    `;

export const Span = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #FFF;
    font-size: 18px;
    margin-top: 10px;
    padding: 10px;
`;
