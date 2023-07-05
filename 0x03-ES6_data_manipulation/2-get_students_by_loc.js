/*eslint-disable */
export default function getStudentsByLocation (students, location) {
    if (!Array.isArray(students)){
        return [];
    }

    return students.filter((loc) => loc.location === location);

}