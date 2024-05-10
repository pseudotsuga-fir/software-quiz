"use client";

import { useEffect, useState } from "react";
import TextInput from "@/components/TextInput";
import { FaTrash } from "react-icons/fa";
import { Quiz, Question } from "@/types";
import styles from "./quiz.module.scss";

export default function CRUDQuiz({
  params,
}: {
  params: { quizId: string };
}): React.ReactElement {
  const [quiz, setQuiz] = useState<Quiz>();
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    if (params.quizId !== "new") {
    }
  }, []);

  function updateQuestion(index: number, question: Question) {
    setQuiz({
      ...quiz,
      questions: quiz?.questions?.map((q, i) => (i === index ? question : q)),
    });
  }

  function handleOptionToggle(
    question: Question,
    index: number,
    option: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (question?.type === "multiple_choice") {
      updateQuestion(index, {
        ...question,
        answers: [option],
      });
    } else {
      if (e.currentTarget.checked) {
        updateQuestion(index, {
          ...question,
          answers: [...(question.answers || []), option],
        });
      } else {
        updateQuestion(index, {
          ...question,
          answers: (question.answers || []).filter((a) => a !== option),
        });
      }
    }
  }

  return (
    <div className={styles.quizBody}>
      {quiz?.id ? <h2>Edit "{quiz?.title}"</h2> : <h2>Create a new quiz</h2>}
      <form>
        <div className={styles.header}>
          <TextInput
            label="Title*"
            placeholder="Quiz Title"
            onChange={(title: string) => {
              setQuiz({ ...quiz, title: title });
            }}
          />
          <TextInput
            className={styles.timeLimit}
            label="Time Limit (In Minutes)*"
            placeholder="30"
            onChange={(limit: string) => {
              setQuiz({ ...quiz, time_limit: new Date(limit) });
            }}
          />
        </div>
        <div className={styles.questions}>
          <h3>Questions</h3>
          <button
            onClick={() => {
              setQuiz({
                ...quiz,
                questions: [
                  ...(quiz?.questions || []),
                  {
                    question: "New Question",
                    type: "multiple_choice",
                    options: ["Option 1", "Option 2", "Option 3"],
                    answers: ["Option 1"],
                  },
                ],
              });
            }}
            type="button"
          >
            Add Question
          </button>
          <div className={styles.questionsBody}>
            {quiz?.questions?.map((question, index) => (
              <div key={index} className={styles.question}>
                <div className={styles.upper}>
                  <TextInput
                    label={`Question #${index + 1} Title*`}
                    placeholder="Question"
                    value={question.question}
                    onChange={(questionText: string) => {
                      updateQuestion(index, {
                        ...question,
                        question: questionText,
                      });
                    }}
                  />
                  <div className={styles.typeSelect}>
                    <p>Type*</p>
                    <select
                      defaultValue="multiple_choice"
                      onChange={(e) => {
                        updateQuestion(index, {
                          ...question,
                          type: e.currentTarget.value as Question["type"],
                          answers: [],
                        });
                      }}
                    >
                      <option value="multiple_choice">Multiple Choice</option>
                      <option value="select_all">Select All</option>
                      <option value="text">Text Input</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className={styles.middle}>
                  <TextInput
                    label="Description"
                    placeholder="Description"
                    value={question.description}
                    onChange={(description: string) => {
                      updateQuestion(index, {
                        ...question,
                        description: description,
                      });
                    }}
                  />
                  {(question.type === "multiple_choice" ||
                    question.type === "select_all") && (
                    <div className={styles.options}>
                      <div className={styles.optionHeaders}>
                        <p>Answer</p>
                        <p>Option</p>
                      </div>
                      {question.options?.map((option, i) => (
                        <div className={styles.option}>
                          <input
                            className={styles.isAnswer}
                            type={
                              question.type === "multiple_choice"
                                ? "radio"
                                : "checkbox"
                            }
                            checked={
                              question?.answers?.includes(option) || false
                            }
                            onChange={(e) => {
                              handleOptionToggle(question, index, option, e);
                            }}
                          />
                          <TextInput
                            key={i}
                            placeholder="Option"
                            value={option}
                            onChange={(optionText: string) => {
                              updateQuestion(index, {
                                ...question,
                                options: question.options?.map((o, j) =>
                                  j === i ? optionText : o
                                ),
                              });
                            }}
                          />
                          <button className={styles.delete}>
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          updateQuestion(index, {
                            ...question,
                            options: [
                              ...(question.options || []),
                              `Option ${(question.options?.length || 0) + 1}`,
                            ],
                          });
                        }}
                      >
                        Add Option
                      </button>
                    </div>
                  )}
                </div>
                <hr />
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    setQuiz({
                      ...quiz,
                      questions: quiz?.questions?.filter((_, i) => i !== index),
                    });
                  }}
                  type="button"
                >
                  Delete Question
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
