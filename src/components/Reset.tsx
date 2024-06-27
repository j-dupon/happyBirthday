import App_module from '../App.module.scss';
import Answer_module from './Answer.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss';
import Login_module from './Login.module.scss';

type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

/* function Reset(props: Props) {
    return (
        <div>
            <h1 classNameName={Reset_module['reset-text']}>
                You scored: {(props.correctQuestions / props.totalQuestions) * 100}%
            </h1>
            <button
                onClick={props.onPress}
                classNameName={Classnames(
                    App_module['next-btn'],
                    Answer_module.answer,
                    Reset_module['reset-btn']
                )}
            >
                Press to Try Again!
            </button>
        </div>
    );
} */

function Reset(props: Props){

    

    return (
    
        <div className={Classnames(Login_module.form)}>
        <div className="flex flex-col items-center">
            <button
                onClick={props.onPress}
                className="text-orange-200 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-sans rounded-lg text-9xl px-9 py-9 text-center me-2 mb-2"
            >READY? 
            </button>
        
        {/* <img className="h-auto max-w-lg mx-auto" src="/assets/01.jpeg" alt="image description"></img> */}
        </div>
        </div>


    )
}

export default Reset;