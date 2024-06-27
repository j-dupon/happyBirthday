import StatBar_module from './StatBar.module.scss';
type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
};

function StatBar(props: Props) {
    return (
        <div className={StatBar_module['stat-container']}>
            <p>RICHTIG! &rarr; {props.correct}</p>
            <p>falsch ... &rarr; {props.incorrect}</p>
        </div>
    );
}

export default StatBar;
