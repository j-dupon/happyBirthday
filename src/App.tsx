import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import StatBar from './components/StatBar';
import QuestionComp from './components/Question';
import App_module from './App.module.scss';
import Reset from './components/Reset';
import Answer_module from './components/Answer.module.scss';
import Login_module from './components/Login.module.scss';
import Classnames from 'classnames';
import CryptoJS from "crypto-js";

const Login = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [isWrong, setIsWrong] = useState(true);
    const [message, setMessage] = useState('');
    
    const hash = 'U2FsdGVkX19C1MsSqedj7iNP7AW4zp6k35kqyAZyY0w='
    const encrypted = 'U2FsdGVkX1+5JVsjNm02AItmPHanH4ioHE7GvqmKEaDltRmnFugnBVJd6qsLDR0SAjCog6foU9HZtWXuKXNnyA=='

    const checkPw = (event: any) => {
      event.preventDefault();

      const answer = message

      var pwd = answer.toLowerCase().replace(/das /g, "").replace(/ä/g, "ae")
      pwd = pwd.concat('@SO36')

      var res = ''

      if (answer != '') { 
          const bytes = CryptoJS.AES.decrypt(encrypted, pwd);
          res = bytes.toString(CryptoJS.enc.Utf8);
      } 
    
      if (hash === res) { 
        setIsVerified(true);
      } else {
        setIsWrong(false);
        setMessage('');
    };
    };

        return ( 
        <>
        {isVerified ? <App /> :
          (
      
          <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
            <>
              {isWrong ? '' : 
              <div role="alert">
              <div className="bg-pink-500 text-white rounded-t px-4 py-2"></div>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-4xl border border-t-0 border-red-400 font-bold text-bold rounded-b bg-red-700 px-4 py-10 text-zinc-700">
                  <p>NEIN!*</p>
                  </div>
              </div>
              }
            </>
          <form onSubmit={checkPw} className={Classnames(Login_module.form)}
          //className={Classnames(Login_module.login, App_module['next-btn'])}
          >
            <div className="flex flex-col items-center">
            <img className="max-h-96 pb-5 mb-10" src="assets/old.png" alt="image description"></img>
            <input
              //className={Classnames(Login_module.login, App_module['next-btn'])}
              className="mb-5 placeholder-white flex items-center content-center justify-between flex-wrap bg-[#FF1493] text-white border m-2.5 p-2.5 rounded-[10px] border-solid border-white hover:border hover:border-solid hover:border-[rgb(0,0,255)];"
              placeholder='Passwort'
              onChange={event => {setMessage(event.target.value)}}
              value={message}
              id="password" name="password" 
            />
            <button 
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                //className={Classnames(Login_module.login, App_module['next-btn'])}
              >Ich bin 30 und bereue nichts ... dann hier klicken
            </button>
            </div>
          </form>
          <>
            {isWrong ? '' : 
            <div className={Classnames(Login_module.footnote)}>
              <div className="text-sm bg-black text-pink-500 rounded-t px-2 py-0.5">*Diesen Teil hat das Känguru implementiert. Passwort-Tipp: Wichtigste literarische Figur im 21. Jhd.</div>
            </div>
            }
          </>
          </div>
          
          )
        }
        </>
  
)}


function App() {

    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);
    const [finale, setFinale] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    const reset = () => {
      setFinale(true)
    };

    if (finale)
      return (
        <div>
          <figure className="">
          {/* <img className="" src="/assets/01.jpeg" alt="image description"></img> */}
          <img className="" src="/assets/finale/334.jpeg" alt="image description"></img>
          {/* <img className="" src="/assets/finale/336.jpeg" alt="image description"></img> */}
          {/* <img className="" src="/assets/finale/350.jpeg" alt="image description"></img> */}
          <img className="object-cover" src="/assets/07.png" alt="image description"></img>
          {/* <figcaption className="my-1 text-lg text-center text-white">Artwork by Hanna &hearts; </figcaption> */}
          <div className="bg-black flex flex-col items-center">
          <figcaption className="px-100 prelative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto">
          Artwork by Hanna &hearts; </figcaption> 
          </div>
          </figure>
        </div>
      )

    if (currentQuestionIdx >= allQuestions.questions.length)
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );

    return (
        <div className={App_module.app}>
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && (
                <button
                    onClick={advance}
                    className={Classnames(Answer_module.answer, App_module['next-btn'])}
                >
                    Next Question...
                </button>
            )}
        </div>
    );
}

export default Login;
