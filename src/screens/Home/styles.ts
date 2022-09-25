import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    display: flex;
    background-color: #38A69D;
    flex-grow: 1;
`;

export const ContainerLogo = styled.View`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const SubText = styled.Text`
    color: #A1A1A1;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15%;
    position: absolute;
    background-color: #38A69D;
    border-radius: 40px;
    padding-top: 12px;
    padding-bottom: 12px;
    
`;

export const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    img: {
        width: '100%'
    },
});