'use client';
import React, { useState } from 'react';

interface Question {
  questionNo: number;
  branch: string;
  description: string;
  link: string;
  difficulty: string;
  company: string;
  year: number;
}

interface QuestionsTableProps {
  questions: Question[];
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const handleRowClick = (question: Question) => {
    setSelectedQuestion(selectedQuestion?.questionNo === question.questionNo ? null : question);
  };


  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Branch</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Difficulty</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Year</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <React.Fragment key={question.questionNo}>
              <tr
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(question)}
              >
                <td className="py-2 px-4 border-b">{question.questionNo}</td>
                <td className="py-2 px-4 border-b">{question.branch}</td>
                <td className="py-2 px-4 border-b">{question.description}</td>
                <td className="py-2 px-4 border-b">{question.difficulty}</td>
                <td className="py-2 px-4 border-b">{question.company}</td>
                <td className="py-2 px-4 border-b">{question.year}</td>
              </tr>
              {selectedQuestion?.questionNo === question.questionNo && (
                <tr>
                  <td colSpan={6} className="py-2 px-4 border-b bg-gray-50">
                    <div>
                      <p><strong>Details:</strong> {question.description}</p>
                      {question.link && (
                        <p>
                          <a href={question.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Question
                          </a>
                        </p>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
