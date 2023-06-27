export default function createIteratorObject(report) {
  const empty = [];
  for (const k of object.keys(report.allEmployees)) {
    for (const j of report.allEmployees[k]) {
      empty.push(j);
    }
  }
  return empty;
}