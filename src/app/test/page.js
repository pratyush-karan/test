"use client";
import React, { useState } from "react";
import "./test.scss";

const apiData = [
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    isMCQ: true,
    correctAnswer: [1, 2],
    negativeMark: -1,
    positiveMark: 2,
  },
  {
    question: "Question 2",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    isMCQ: false,
    correctAnswer: [1],
    negativeMark: -1,
    positiveMark: 2,
  },
  {
    question: "Question 3",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    isMCQ: true,
    correctAnswer: [2],
    negativeMark: -3,
    positiveMark: 4,
  },
  {
    question: "Question 4",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    isMCQ: true,
    correctAnswer: [1, 2, 3, 4],
    negativeMark: -1,
    positiveMark: 3,
  },
  //   {
  //     question: "Question 5",
  //     children: [
  //       {
  //         question: "Question 5a",
  //         answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  //         isMCQ: true,
  //         correctAnswer: [1, 2, 4],
  //         negativeMark: -1,
  //         positiveMark: 3,
  //       },
  //       {
  //         question: "Question 5b",
  //         children: [
  //           {
  //             question: "Question 5b1",
  //             answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  //             isMCQ: false,
  //             correctAnswer: [2],
  //             negativeMark: 0,
  //             positiveMark: 3,
  //           },
  //         ],
  //       },
  //     ],
  //   },
];
const testPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handlePrevious = () => {
    setQuestionNumber((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleNext = () => {
    setQuestionNumber((prev) =>
      prev === apiData.length - 1 ? prev : prev + 1
    );
  };

  const selectionMap = new Map();

  const handleCheckbox = (e, questionNumber, index) => {
    if (e.target.checked) {
      if (!selectionMap.has(questionNumber)) {
        selectionMap.set(questionNumber, [index]);
      } else {
        const arr = selectionMap.get(questionNumber);
        arr.push(index);
        selectionMap.set(questionNumber, arr);
      }
    } else {
      const arr = selectionMap.get(questionNumber);
      console.log(arr, index);
      const a = arr.findIndex(index);

      arr.splice(a, 1);
      selectionMap.set(questionNumber, arr);
    }
  };

  return (
    <div className="container">
      {console.log(selectionMap)}
      <div className="layout1">
        <div>{`${questionNumber + 1}/${apiData.length}`}</div> <div>Timer</div>
      </div>

      <>
        <div>{apiData[questionNumber].question}</div>
        <div>
          {apiData[questionNumber].answers.map((answer, index) => (
            <div key={`${answer}-${questionNumber}`}>
              {apiData[questionNumber].isMCQ ? (
                <input
                  type="checkbox"
                  name={`${answer}-${questionNumber}`}
                  onChange={(e) => handleCheckbox(e, questionNumber, index)}
                />
              ) : (
                <input type="radio" name={`${questionNumber}`} />
              )}

              <lable for={index}>{answer}</lable>
            </div>
          ))}
        </div>
      </>

      <div>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default testPage;
