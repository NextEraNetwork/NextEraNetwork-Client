import QuestionsTable from "@/components/student/Questions/QuestionsTable";
import Pagination from "@/components/student/Questions/Pagination";

const questions = [
    { questionNo: 1, branch: 'Computer Science', description: 'Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.', link: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/', difficulty: 'Medium', company: 'App Perfect', year: 2023 },
    { questionNo: 2, branch: 'Computer Science', description: 'Given an integer n, return true if it is a power of two. Otherwise, return false, An integer n is a power of two, if there exists an integer x such that n == 2x.', link: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1?page=1&sortBy=submissions', difficulty: 'Hard', company: 'Wipro', year: 2022 },
    { questionNo: 3, branch: 'Computer Science', description: 'You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.', link: 'https://leetcode.com/problems/subarray-sum-equals-k/', difficulty: 'Medium', company: 'KanSoftware', year: 2021 },
    { questionNo: 4, branch: 'Computer Science', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2022 },
    { questionNo: 5, branch: 'Computer Science', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2022 },
    { questionNo: 6, branch: 'Computer Science', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2020 },
    { questionNo: 7, branch: 'Computer Science', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2021 },
    { questionNo: 8, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2020 },
    { questionNo: 9, branch: 'Electrical Engineering', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2021 },
    { questionNo: 10, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2021 },
    { questionNo: 11, branch: 'Electrical Engineering', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2022 },
    { questionNo: 12, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2022 },
    { questionNo: 13, branch: 'Computer Science', description: 'Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.', link: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/', difficulty: 'Medium', company: 'App Perfect', year: 2023 },
    { questionNo: 14, branch: 'Computer Science', description: 'Given an integer n, return true if it is a power of two. Otherwise, return false, An integer n is a power of two, if there exists an integer x such that n == 2x.', link: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1?page=1&sortBy=submissions', difficulty: 'Hard', company: 'Wipro', year: 2022 },
    { questionNo: 15, branch: 'Computer Science', description: 'You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.', link: 'https://leetcode.com/problems/subarray-sum-equals-k/', difficulty: 'Medium', company: 'KanSoftware', year: 2021 },
    { questionNo: 16, branch: 'Computer Science', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2022 },
    { questionNo: 17, branch: 'Computer Science', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2022 },
    { questionNo: 18, branch: 'Computer Science', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2020 },
    { questionNo: 19, branch: 'Computer Science', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2021 },
    { questionNo: 20, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2020 },
    { questionNo: 21, branch: 'Electrical Engineering', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2021 },
    { questionNo: 22, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2021 },
    { questionNo: 23, branch: 'Electrical Engineering', description: 'Sample question 1', link: '', difficulty: 'Medium', company: 'ABC Corp', year: 2022 },
    { questionNo: 24, branch: 'Electrical Engineering', description: 'Sample question 2', link: '', difficulty: 'Hard', company: 'XYZ Inc', year: 2022 },
];

export default async function Questions({
    searchParams,
}: {
    searchParams?: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1;
    const questionsPerPage = 10;
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    // Calculate the index of the first and last question for the current page
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

    // Slice the hardcoded questions array to get the current page's questions
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    return (
        <div className="w-full">
            <QuestionsTable questions={currentQuestions} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
