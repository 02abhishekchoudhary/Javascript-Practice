let name = {
  firstname: "Naruto",
  lastname: "Uzumaki",
  // printFullName: function () {
  //   console.log(this.firstname + " " + this.lastname);
  // },
};

let printFullName = function (hometown, clan) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + clan
  );
};

let name2 = {
  firstname: "Hinata",
  lastname: "Hyuga",
};

// function borrowing:
// call
printFullName.call(name, "Konoha", "Uzumaki Clan");
printFullName.call(name2, "Konoha", "Hyuga Clan");

// apply
printFullName.apply(name2, ["Konoha", "Hyuga Clan"]);

// bind
let printMyName = printFullName.bind(name, "Konoha", "Uzumaki Clan");
// console.log(printMyName);
printMyName();
