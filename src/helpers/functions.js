import MuCoreDataSet from '../assets/data/mucore.json';
import RockMetalDataSet from '../assets/data/rock_metal.json';

export function setDataSet(type){

    switch(type){

        case 'mucore':
            return MuCoreDataSet;

        case 'rock':
            return RockMetalDataSet;

        default:
            return MuCoreDataSet;
    }
}

export function randomNumberArrGen(max){

    let arr = [];
    let limit = 15

    for (let i = 0; i < limit; i++) {

        let number = Math.floor(Math.random() * max);
        arr.includes(number) ? limit++ : arr.push(number);
    }

    return arr;
}

export function setArrayMaxSize(type){

    switch(type){

        case 'mucore':
            return 262;

        case 'rock':
            return 192;

        default:
            return 100;
    }
}