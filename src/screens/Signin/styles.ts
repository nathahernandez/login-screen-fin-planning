import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
    display: flex;
    flex-grow: 1;
    background-color: #38A69D;
`;
export const TextWelcome = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #FFF;
    position: absolute;
    left: 25%;
`;
export const TextTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 32px;
`;
export const Input = styled.TextInput`
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: #38A69D;
    padding: 12px;
    border-radius: 16px;
    margin-top: 14px;
`;
export const GoBackButton = styled.TouchableOpacity`
    padding: 20px;
    background-color: #297b75;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
`;

export const TextButton = styled.Text`
    color: #fff;
    align-self: center;
`;
export const styles = StyleSheet.create({
    containerView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    containerForm: {
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20
    }
});