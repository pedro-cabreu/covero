import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../assets/img/COVERO.svg';
import { RiArrowGoBackLine, RiShareFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { randomNumberArrGen, setArrayMaxSize, setDataSet } from '../../helpers/functions';

export default function Final(props){

    const history = useHistory();

    function playAgain(){

        history.push("/play",{

            randomArr: randomNumberArrGen(setArrayMaxSize(props.location.state.type)),
            DataSet: setDataSet(props.location.state.type),
            difficulty: props.location.state.difficulty,
            type: props.location.state.type,
        })
    }

    function shareResults(){


    }

    return(
        <main>
            <div className="final-box">
                <img className="logo" src={ Logo } alt="" />
                <div className="results">
                    <label id="guess">You Guessed</label>
                    <label id="result-points">{ props.location.state.points }/15</label>
                </div>
                <div className="final-buttons">
                    <button onClick={ playAgain }><RiArrowGoBackLine color="var(--primary-color)"/> Play Again</button>
                    <button onClick={ shareResults }><RiShareFill color="var(--primary-color)"/> Share</button>
                </div>
            </div>
            <Footer/>
        </main>
    );
}