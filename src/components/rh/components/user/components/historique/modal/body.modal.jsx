import React from 'react';

const BodyMdal = () => {

    return (
        <div className="Body" >
            {([1, 2, 3].map((v, i) => {
                return (
                    <div className="QuestionReponse" >
                        <div className="Question">
                            <span> {i + 1}:  Question une ? score : {i}</span>
                        </div>
                        {([1, 2].map((s, sI) => {
                            return (
                                <ul className="Solution">
                                    <li className={sI === 0 ? "correct" : "incorrect"}>
                                        solution {sI + 1} correct
                                    </li>
                                </ul>
                            )
                        }))}
                    </div>)
            }))}
        </div>
    )

}

export default BodyMdal;