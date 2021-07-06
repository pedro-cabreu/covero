import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import Logo from '../../assets/img/COVERO.svg'; 
import { RiPlayFill, RiUserFill, RiGroupFill } from 'react-icons/ri'
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi';
import { useHistory } from 'react-router';

export default function Home(){

    const [Page, setPage] = useState(1);
    const [Player, setPlayer] = useState(1);
    const [Difficulty, setDifficulty] = useState(1);

    const history = useHistory();

    function selectMode(playerQtd){

        setPlayer(playerQtd);
        setPage(Page + 1);
    }

    function selectDifficulty(difficulty){

        setDifficulty(difficulty);
        
        history.push("/play", {

            player: Player,
            difficulty: Difficulty
        });
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
                    <div className="start-box" initial={{ x: -200 }} animate={{ x: 0 }}>
                        <img src={ Logo } alt="Covero" />
                        <div className="start-buttons">
                            <motion.button className="lg-btn" onClick={() => selectDifficulty(1)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank1 size={28}/> Easy</motion.button>
                            <motion.button className="lg-btn" onClick={() => selectDifficulty(2)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank2 size={28}/> Medium</motion.button>
                            <motion.button className="lg-btn" onClick={() => selectDifficulty(3)} whileTap={{ scale: 0.9 }} whileHover={{scale: 1.01, border: '2px #5F85DB solid'}} transition={{duration: 0.2}} ><GiRank3 size={28}/> Insane</motion.button>
                        </div>
                    </div>
                    <Footer />
                </main> );

        default:
            return(<h1 style={{ color: 'white' }}>Erro</h1>);

    }
}