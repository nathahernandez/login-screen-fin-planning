import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 
import {Button,
        Container,
        Input,
        TextButton,
        TextTitle,
        TextWelcome,
        styles,
        GoBackButton
} from './styles'


export default function Signin () {

    const navigation = useNavigation();

    const handleGoBack = () => navigation.goBack()

    return (
    <Container>
        <Animatable.View
            animation='fadeInLeft'
            delay={300}
            style={styles.containerView}
        >
            <GoBackButton
                onPress={handleGoBack}
            >
                <AntDesign name="left" size={15} color='white' />
            </GoBackButton>
            <TextWelcome>
                Bem vindo(a)
            </TextWelcome>
        </Animatable.View>

        <Animatable.View
            animation='fadeInUp'
            delay={450}
            style={styles.containerForm}
        >
            <TextTitle>
                Email
            </TextTitle>
            <Input placeholder='Digite seu email...' />

            <TextTitle>
                Senha
            </TextTitle>
            <Input placeholder='Digite sua senha...' />
            <Button>
                <TextButton>
                    Entrar
                </TextButton>
            </Button>

            <Button>
                <TextButton>
                    Cadastre-se
                </TextButton>
            </Button>
        </Animatable.View>
    </Container>
    );
}