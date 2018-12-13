export default function conversion(array, childrenName) {
  array.map(item => {
    item.title = item.name;
    item.id = item.industry_id;
    if (item.hasOwnProperty(childrenName)) {
      conversion(item[childrenName], childrenName);
    }
  });
  return array;
}
