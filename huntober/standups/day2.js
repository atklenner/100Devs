function domainName(name) {
  name = name.replace(/https?:\/*w*\.?/, "");
  return name.split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun") == "github");
console.log(domainName("http://www.zombie-bites.com") == "zombie-bites");
console.log(domainName("https://www.cnet.com") == "cnet");
