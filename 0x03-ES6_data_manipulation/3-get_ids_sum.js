/*eslint-disable */
export default function getStudentIdsSum (students) {
    if (!Array.isArray(students)){
        return [];
    }
    return students.reduce((total, studentId) => total + studentId.id, 0);
}