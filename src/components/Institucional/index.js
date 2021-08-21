import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
    InstContainer,
    InstBg,
    VideoBg,
    InstContent,
    InstH1,
    InstP,
    InstBtnWrapper,
    ArrowForward,
    ArrowRight
} from './InstitucionalElements';

const Institucional = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <InstContainer>
            <InstBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </InstBg>
            <InstContent>
                <InstH1>Institucional</InstH1>
                <InstP>
                    Somos uma editora criada por professores,
                    constituída com profissionais experientes e atuantes no desenvolvimento
                    e produção de conteúdos didáticos. Temos como princípio contribuir
                    com as escolas em seus processos de preparacão e capacitação dos estudantes,
                    objetivando o aprendizado e a conquista de índices de aprovação expressivos.
                </InstP>
                <InstBtnWrapper>
                    <Button to='produtos' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        gray="true"
                    >
                        Nossos materiais {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </InstBtnWrapper>
            </InstContent>
        </InstContainer>
    )
}

export default Institucional;
