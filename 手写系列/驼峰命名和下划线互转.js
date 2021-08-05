function humpToUnderline(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
}
function humpToUnderline2(name) {
  name.map(value=>console.log(value))
}
function underlineToHump(name) {
  return name.replace(/_(\w)/g, (substring, args) => {
    return args.toUpperCase();
  });
}
[].filter()
humpToUnderline2('aaaBbbCccDdd');
