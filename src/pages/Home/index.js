import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import Logo from '../../assets/img/COVERO.svg'; 
import { RiPlayFill, RiUserFill, RiGroupFill } from 'react-icons/ri'
import { GiRank1, GiRank2, GiRank3, GiChessKing, GiGuitar, GiGemChain, GiPerspectiveDiceSixFacesFive } from 'react-icons/gi';
import { useHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';
import { setArrayMaxSize, randomNumberArrGen, setDataSet } from '../../helpers/functions';

export default function Home(){

    const [Page, setPage] = useState(1);
    const [Player, setPlayer] = useState(1);
    const [Difficulty, setDifficulty] = useState(1);

    const history = useHistory();

    function selectMode(playerQtd){

        setPlayer(playerQtd);
        setPage(Page + 1);
    }

    function selectType(type){
        
        history.push('/play', {

            difficulty: Difficulty,
            player: Player,
            type: type,
            randomArr: randomNumberArrGen(setArrayMaxSize(type)),
            DataSet: setDataSet(type)
        });
    }

    function selectDifficulty(difficulty){

        setDifficulty(difficulty);
        setPage(Page + 1)
    }

    switch(Page){

        case 1:
            return(
                <main>
                    <motion.div className="start-box" initial={{ x: -200 }} animate={{ x: 0 }}>
                        <img src={ Logo } alt="Covero" />
                        <motion.button className="lg-btn" onClick={() => {setPage(Page + 1)}} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><RiPlayFill size={28}/> Start new game</motion.button>
                    </motion.div>
                    <Footer />
                </main> );
        
        case 2:
            return(
                <main>
                    <div className="start-box" initial={{ x: -200 }} animate={{ x: 0 }}>
                        <img src={ Logo } alt="Covero" />
                        <div className="start-buttons">
                            <motion.button className="lg-btn" onClick={() => selectMode(1)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><RiUserFill size={28}/> Singleplayer</motion.button>
                            <motion.button className="lg-btn" onClick={() => selectMode(2)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><RiGroupFill size={28}/> Duel mode</motion.button>
                        </div>
                    </div>
                    <Footer />
                </main> );

        case 3: 

            return(
                <main>
                    <ReactTooltip id='easy' className="tooltip" effect='solid'>
                        <span>Unblured albums and unlimited time</span>
                    </ReactTooltip>
                    <ReactTooltip id='medium' className="tooltip" effect='solid'>
                        <span>Blured albums and unlimited time</span>
                    </ReactTooltip>
                    <ReactTooltip id='hard' className="tooltip" effect='solid'>
                        <span>Blured albums ans 5 seg. limit</span>
                    </ReactTooltip>
                    <div className="start-box" initial={{ x: -200 }} animate={{ x: 0 }}>
                        <img src={ Logo } alt="Covero" />
                        <div className="start-buttons">
                            <motion.button data-tip data-for='easy' className="lg-btn" onClick={() => selectDifficulty(1)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank1 size={28}/> Easy</motion.button>
                            <motion.button data-tip data-for='medium' className="lg-btn" onClick={() => selectDifficulty(2)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank2 size={28}/> Medium</motion.button>
                            <motion.button data-tip data-for='hard' className="lg-btn" onClick={() => selectDifficulty(3)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank3 size={28}/> Hard</motion.button>
                        </div>
                    </div>
                    <Footer />
                </main> );

        case 4: 

            return(
                <main>
                    <ReactTooltip id='mucore' className="tooltip" effect='solid'>
                        <span>For truly patrician individuals</span>
                    </ReactTooltip>
                    <ReactTooltip id='rock' className="tooltip" effect='solid'>
                        <span>For boomers and shitaste teenagers</span>
                    </ReactTooltip>
                    <ReactTooltip id='hiphop' className="tooltip" effect='solid'>
                        <span>For those who think they're rich</span>
                    </ReactTooltip>
                    <ReactTooltip id='random' className="tooltip" effect='solid'>
                        <span>A true challenge</span>
                    </ReactTooltip>
                    <div className="start-box" initial={{ x: -200 }} animate={{ x: 0 }}>
                        <img src={ Logo } alt="Covero" />
                        <div className="start-buttons">
                            <motion.button data-tip data-for='mucore' className="lg-btn" onClick={() => selectType('mucore')} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiChessKing size={28}/> /mu/ core</motion.button>
                            <motion.button data-tip data-for='rock' className="lg-btn" onClick={() => selectType('rock')} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiGuitar size={28}/> Rock and Metal</motion.button>
                            <motion.button data-tip data-for='hiphop' className="lg-btn" onClick={() => selectType('hiphop')} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiGemChain size={28}/> HipHop and Trap</motion.button>
                            <motion.button data-tip data-for='random' className="lg-btn" onClick={() => selectType('random')} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiPerspectiveDiceSixFacesFive size={28}/> Random</motion.button>
                        </div>
                    </div>
                    <Footer />
                </main> );

        default:
            return(<h1 style={{ color: 'white' }}>Erro</h1>);

    }
}