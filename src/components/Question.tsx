import { Question } from '../types';
import Answers from './Answers';
import Question_module from './Question.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
    return (
        <div><div className="pl-3 pr-3 rounded-xl bg-[#1a1a1a]">
            <h3 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto">{props.question.question}</h3>
            </div>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
