import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Logo from '../../assets/img/COVERO.svg';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}

export default function Game(props){

    const [Page, setPage] = useState(0);
    const [Points, setPoints] = useState(0);
    const alternativesRef = useRef();
    const randomArr = props.location.state.randomArr;
    const DataSet = props.location.state.DataSet
    const alternativeLetters = ["A", "B", "C", "D"]
    const history = useHistory();

    console.log(props);

    function sendAnswer(e){

        DataSet[randomArr[Page]].correct_answer === alternativeLetters.indexOf(e.currentTarget.firstChild.innerText) ? e.currentTarget.id = "correct" : e.currentTarget.id = "wrong";

        setTimeout(() => {

            setPage(Page + 1)

        }, 500);
    }

    function finalize(e){

        let finalPoints = Points;

        if(DataSet[randomArr[Page]].correct_answer === alternativeLetters.indexOf(e.currentTarget.firstChild.innerText)){

            e.currentTarget.id = "correct";
            finalPoints++;
        }else{

            e.currentTarget.id = "wrong";
        } 

        setTimeout(() => {

            history.push('/final',{

                points: finalPoints,
                type: props.location.state.type,
                difficulty: props.location.state.difficulty
            });

        }, 500);
    }

    useDidMountEffect(() => {

        alternativesRef.current.childNodes.forEach(e => {

            if(e.id === "correct") setPoints(Points + 1)
            e.id = ""
        });

    }, [Page])

    console.log(Page);
    console.log(Points);

    return(
        <main>
            <div className="game-box">
                <img className="logo" src={ Logo } alt="" />
                <img className="album-cover" style={props.location.state.difficulty >= 2 ? {filter: "blur(3px)"} : {}} src={ DataSet[randomArr[Page]].cover_url } alt="" />
                <div className="alternatives" ref={ alternativesRef }>
                    {
                        Page === 14 ? 

                        DataSet[randomArr[Page]].alternatives.map(function (e){
                            
                            return(
                                <motion.div onClick={ finalize } whileHover={{  outline: '1px #5F85DB solid' }} className="alternative-box">
                                    <label className="letter">{e.letter}</label>
                                    <label className="album-title">{e.title.split('.').slice(1)}</label>
                                </motion.div>
                            )
                        }) :

                        DataSet[randomArr[Page]].alternatives.map(function (e){
                            
                            return(
                                <motion.div onClick={ sendAnswer } whileHover={{  outline: '1px #5F85DB solid' }} className="alternative-box">
                                    <label className="letter">{e.letter}</label>
                                    <label className="album-title">{e.title.split('.').slice(1)}</label>
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