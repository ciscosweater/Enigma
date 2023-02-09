import React, { useState } from "react";
import "./styles.css";

function Home() {
    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')
    const [field4, setField4] = useState('')
    const [field5, setField5] = useState('')

    const [check1, setCheck1] = useState("#C4CAE3")
    const [check2, setCheck2] = useState("#C4CAE3")
    const [check3, setCheck3] = useState("#C4CAE3")
    const [check4, setCheck4] = useState("#C4CAE3")
    const [check5, setCheck5] = useState("#C4CAE3")

    const [wrong, setWrong] = useState(true)

    const answer1 = "carvão"
    const answer2 = "barbeiro"
    const answer3 = "silêncio"
    const answer4 = "caixão"
    const answer5 = "travesseiro"

    const handleChange1 = (event) => {
        setField1(event.target.value);
    };

    const handleChange2 = (event) => {
        setField2(event.target.value);
    };

    const handleChange3 = (event) => {
        setField3(event.target.value);
    };

    const handleChange4 = (event) => {
        setField4(event.target.value);
    };

    const handleChange5 = (event) => {
        setField5(event.target.value);
    };

    const handleClick = () => {
        let points = 0
        console.log(answer1)

        if (field1.toLowerCase().trim() === answer1) {
            setCheck1("#99FF99")
            points++
        } else {
            setCheck1("#FF9999")
        };

        if (field2.toLowerCase().trim() === answer2) {
            setCheck2("#99FF99")
            points++
        } else {
            setCheck2("#FF9999")
        };

        if (field3.toLowerCase().trim() === answer3) {
            setCheck3("#99FF99")
            points++
        } else {
            setCheck3("#FF9999")
        };

        if (field4.toLowerCase().trim() === answer4) {
            setCheck4("#99FF99")
            points++
        } else {
            setCheck4("#FF9999")
        };

        if (field5.toLowerCase().trim() === answer5) {
            setCheck5("#99FF99")
            points++
        } else {
            setCheck5("#FF9999")
        };

        if (points === 5) {
            setWrong(true)
            alert("Parabéns!\nVocê finalmente chegou ao fim desse enigma e está prestes a desvendar uma surpresa incrível!\nEspero que você goste e aproveite essa jornada incrível que você está prestes a experimentar.\nNovamente, parabéns e boa diversão!")
            window.open('https://youtu.be/dQw4w9WgXcQ', '_blank', 'noreferrer');
        } else {
            setWrong(false)
            return
        }
    };

    return (
        <div className="enigma-container">
            <h1><span style={{ cursor: "pointer" }} className="title-span" onClick={() => alert("Então quer dizer que você é curioso?\nNão posso deixar de recompensá-lo, clique no texto da primeira questão para ver uma dica, mas só essa, ok?")}>E</span>nigma</h1>
            <div className="enigma-background">
                <div className="enigma-content">
                    <label id="question1-label" htmlFor="question1">
                        <span onClick={() => alert("Pense em algo que é extraído da terra e é usado como fonte de energia há séculos.\nAlgo que é escuro e opaco no início de sua jornada, mas que se transforma em algo mais claro e brilhante quando é acessado e usado.\nTalvez essa dica possa ajudá-lo a encontrar a resposta que você procura.")}>
                            Nasce preto, vive verde e morre vermelho.
                        </span>
                        <input
                            id="question1"
                            type="text"
                            name="question1"
                            placeholder="Insira a resposta"
                            onChange={handleChange1}
                            value={field1}
                            style={{
                                backgroundColor: check1
                            }}
                            required
                        />
                    </label>
                    <label id="question2-label" htmlFor="question2">
                        Na cidade é uma profissão, na estrada é um perigo e na mata é um inseto.
                        <input
                            id="question2"
                            type="text"
                            name="question2"
                            placeholder="Insira a resposta"
                            onChange={handleChange2}
                            value={field2}
                            style={{
                                backgroundColor: check2
                            }}
                            required
                        />
                    </label>
                    <label id="question3-label" htmlFor="question3">
                        É tão frágil que, só de mencioná-lo, ele se quebra.
                        <input
                            id="question3"
                            type="text"
                            name="question3"
                            placeholder="Insira a resposta"
                            onChange={handleChange3}
                            value={field3}
                            style={{
                                backgroundColor: check3
                            }}
                            required
                        />
                    </label>
                    <label id="question4-label" htmlFor="question4">
                        Quem o inventou não o quer. Quem comprou não precisa disso. Quem precisa não sabe disso. O que é isso?
                        <input
                            id="question4"
                            type="text"
                            name="question4"
                            placeholder="Insira a resposta"
                            onChange={handleChange4}
                            value={field4}
                            style={{
                                backgroundColor: check4
                            }}
                            required
                        />
                    </label>
                    <label id="question5-label" htmlFor="question5">
                        Perde a cabeça pela manhã, mas a recupera à noite.
                        <input
                            id="question5"
                            type="text"
                            name="question5"
                            placeholder="Insira a resposta"
                            onChange={handleChange5}
                            value={field5}
                            style={{
                                backgroundColor: check5
                            }}
                            required
                        />
                    </label>
                </div>
                <button className="send-button" onClick={handleClick}>
                    {wrong ? "Enviar respostas" : "Tente novamente"}
                </button>
                <p style={{ cursor: "pointer" }} onClick={() => alert("Atenção jogadores do enigma! Por favor, lembrem-se que as respostas deste enigma devem ser apresentadas como uma única palavra, sem o uso de artigos, e respeitando a acentuação correta.\nIsso significa que as respostas não devem incluir 'o', 'a', 'os' ou 'as'.\nAlém disso, é importante que as respostas sejam escritas corretamente, com todas as letras e acentos necessários.\nAo seguir essas diretrizes, você garantirá que sua resposta seja aceita como a correta.\nBoa sorte e divirta-se!")}>?</p>
            </div>
        </div>
    )
};

export default Home;