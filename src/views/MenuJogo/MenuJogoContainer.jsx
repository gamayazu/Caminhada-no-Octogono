import React, {Component} from 'react';
import MenuJogo from "./MenuJogo";
import {Card, Row, Col, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

const cliqueBotao = new Audio("./sons/mixkit-select-click-1109.wav");
const ambiente = new Audio("./sons/ambiente.mp3");

class MenuJogoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modoMenu: "",
            musicaTocando: false
        }
    }

    iniciarMusica = () => {
        ambiente.volume = 0.2;
        ambiente.loop = true;

        ambiente.play();
        this.setState({musicaTocando: true});
    };

    pausarMusica = () => {
        ambiente.pause();
        this.setState({musicaTocando: false});
    };

    onSelecionarModoMenu = (modoMenu) => {
        this.setState({
            modoMenu: modoMenu
        });

        cliqueBotao.play();

        if (modoMenu === "Jogar") {
            this.iniciarMusica();
        }
    };

    render() {
        const musicaTocando = this.state.musicaTocando;

        return (
            <Row className="mx-0">
                <Col md="2"/>
                <Col md="8">
                    <Card className="mt-3 area-do-jogo" style={{
                        borderColor: "grey",
                        borderWidth: 3,
                        zIndex: 1
                    }}>
                        <Row className="my-2 ml-auto">
                            <Col>
                                <Button
                                    className="mr-2"
                                    color="dark"
                                    size={"sm"}
                                    onClick={() => {
                                        musicaTocando ? this.pausarMusica() : this.iniciarMusica()
                                    }}>
                                    <FontAwesomeIcon icon={musicaTocando ? faVolumeUp : faVolumeMute}
                                                     size={"1x"}
                                    />
                                </Button>
                            </Col>
                        </Row>
                        <MenuJogo
                            onSelecionarModoMenu={this.onSelecionarModoMenu}
                            modoMenu={this.state.modoMenu}
                        />
                    </Card>
                </Col>
                <Col md="2"/>
            </Row>
        );
    }
}

export default MenuJogoContainer;