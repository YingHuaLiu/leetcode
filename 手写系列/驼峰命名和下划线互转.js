function humpToUnderline(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
}
function underlineToHump(name) {
  return name.replace(/_(\w)/g, (substring, args) => {
    return args.toUpperCase();
  });
}
humpToUnderline('aaaBbbCccDdd');
