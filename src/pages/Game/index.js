import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Logo from '../../assets/img/COVERO.svg';
// import TempImg from '../../assets/img/teste.jpg'
import { motion } from 'framer-motion';
import DataSet from '../../assets/data/question.json';

const correctAnswer = (e) => {

    e.currentTarget.style.backgroundColor = "rgb(80, 235, 151)";
    e.currentTarget.firstChild.style.color = "#353941";
    e.currentTarget.lastChild.style.fontWeight = "bolder";
    e.currentTarget.lastChild.style.color = "#353941";
}

const wrongAnswer = (e) => {

    e.currentTarget.style.backgroundColor = "rgb(230, 74, 74)";
    e.currentTarget.firstChild.style.color = "#353941";
    e.currentTarget.lastChild.style.fontWeight = "bolder";
    e.currentTarget.lastChild.style.color = "#353941";
}

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}

export default function Game(){

    const [Page, setPage] = useState(0);
    const alternativesRef = useRef();

    function sendAnswer(e){

        DataSet[Page].correct_answer === e.currentTarget.firstChild.innerText ? correctAnswer(e) : wrongAnswer(e);

        setTimeout(() => {

            setPage(1)

        }, 1000);
    }

    useDidMountEffect(() => {

        console.log(alternativesRef.current);

        alternativesRef.current.childNodes.forEach(e => {

            console.log(e);
            e.style.backgroundColor = "#26282B";
            e.firstChild.style.color = "#5F85DB";
            e.lastChild.style.color = "#FFFFFF";
        });

    }, [Page])

    return(
        <main>
            <div className="game-box">
                <img className="logo" src={ Logo } alt="" />
                <img className="album-cover" src={ DataSet[Page].cover_url } alt="" />
                <div className="alternatives" ref={alternativesRef}>
                    {
                        DataSet[Page].alternatives.map(function (e){
                            
                            return(
                                <motion.div onClick={ sendAnswer } whileHover={{  outline: '1px #5F85DB solid' }} className="alternative-box">
                                    <label className="letter">{e.letter}</label>
                                    <label className="album-title">{e.title}</label>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </main>
    );
}