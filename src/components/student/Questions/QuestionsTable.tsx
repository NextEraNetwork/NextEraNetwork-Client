'use client';
import React, { useState } from 'react';

interface QuestionData {
  _id: string,
  profile_id: string;
  branch: string;
  difficulty: string;
  description: string;
  companyName: string;
  questionTitle: string;
  questionLink: string;
}

interface QuestionsTableProps {
  questions: QuestionData[];
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(null);

  const handleRowClick = (question: QuestionData) => {
    setSelectedQuestion(selectedQuestion?._id === question._id ? null : question);
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
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <React.Fragment key={question._id}>
              <tr
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(question)}
              >
                <td className="py-2 px-4 border-b">{question._id.split('-')[1]}</td>
                <td className="py-2 px-4 border-b">{question.branch}</td>
                {/* Use dangerouslySetInnerHTML for description */}
                <td
                  className="py-2 px-4 border-b overflow-hidden line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: question.description }}
                />
                <td className="py-2 px-4 border-b">{question.difficulty}</td>
                <td className="py-2 px-4 border-b">{question.companyName}</td>
              </tr>
              {selectedQuestion?._id === question._id && (
                <tr>
                  <td colSpan={6} className="py-2 px-4 border-b bg-gray-50">
                    <div>
                      <strong>Details:</strong>
                      {/* Again, use dangerouslySetInnerHTML for description */}
                      <p dangerouslySetInnerHTML={{ __html: question.description }} />
                      {question.questionLink && (
                        <p>
                          <a
                            href={question.questionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
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
