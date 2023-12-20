import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import { carregaTopo } from "../../../services/carregaDados";
import logo from "../../../assets/logo.png"

class Topo extends React.Component {
    atualizaTopo() {
        const retorno = carregaTopo();
        console.log(retorno);
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={s.topo}>
            <Image source={logo} style={s.imagem} />
            <Text style={s.boasVindas}>Olá João</Text>
            <Text style={s.descricao}>Encontre os melhores produtores!</Text>
        </View>
    }
}

const s = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26
    },
});
export default Topo;