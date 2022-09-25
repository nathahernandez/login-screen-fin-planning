import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import { 
    Button, 
    Container, 
    ContainerLogo, 
    ButtonText, 
    SubText, 
    TitleText, 
    styles
} from './styles'
import Logo from "../../assets/logo.png"

export default function Home () {
    
    const nav = useNavigation();

    return (
    <Container>
        <ContainerLogo>
            <Animatable.Image
                animation='flipInY' 
                style={styles.img}
                source={Logo}
                resizeMode='contain'
            />
        </ContainerLogo>
        
        <Animatable.View 
            animation='fadeInUp'
            delay={800}
            style={styles.containerForm}
        >

            <TitleText>
                Investir em conhecimento rende sempre os melhores juros.
            </TitleText>
            <SubText>
                Inicie seu planejamento financeiro
            </SubText>

            <Button
                onPress={() => nav.navigate('Signin')}
            >
                <ButtonText>
                    Acessar
                </ButtonText>
            </Button>

        </Animatable.View>

    </Container>
    );
}