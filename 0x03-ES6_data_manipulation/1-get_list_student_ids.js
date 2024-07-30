export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  const arrayIds = arrayObject.map((element) => element.id);
  return arrayIds;
}
