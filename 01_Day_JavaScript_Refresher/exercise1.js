function exercise1() {
  console.clear();
  console.log("exercise 1");

  const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  console.log("1. Declare an empty array");
  let arr = [];
  console.log("🚀 ~ file: exercise1.js ~ line 29 ~ arr", arr);
  console.log("------");

  console.log("2. Declare an array with more than 5 number of elements");
  arr = [1, 2, 3, 4, 5];
  console.log("🚀 ~ file: exercise1.js ~ line 34 ~ arr", arr);
  console.log("------");

  console.log("3. Find the length of your array");
  let arrlength = arr.length;
  console.log("🚀 ~ file: exercise1.js ~ line 35 ~ arrlength", arrlength);
  console.log("------");

  console.log(
    "4. Get the first item, the middle item and the last item of the array"
  );
  let first = arr[0];
  console.log("🚀 ~ file: exercise1.js ~ line 39 ~ first", first);
  let last = arr[arr.length - 1];
  console.log("🚀 ~ file: exercise1.js ~ line 41 ~ last", last);
  let middle = arr[parseInt(arr.length / 2)];
  console.log("🚀 ~ file: exercise1.js ~ line 42 ~ middle", middle);
  console.log("------");

  console.log(
    "5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5"
  );
  let mixedDataTypes = ["mot", 2, "ba", "ba phay nam", 4.5, 5];
  console.log(
    "🚀 ~ file: exercise1.js ~ line 47 ~ mixedDataTypes",
    mixedDataTypes
  );
  let mixedDataTypesLength = mixedDataTypes.length;
  console.log(
    "🚀 ~ file: exercise1.js ~ line 48 ~ mixedDataTypesLength",
    mixedDataTypesLength
  );
  console.log("------");

  console.log(
    "6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon"
  );
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  console.log("------");

  console.log("7. Print the array using console.log()");
  console.log("🚀 ~ file: exercise1.js ~ line 67 ~ itCompanies", itCompanies);
  console.log("------");

  console.log("8. Print the number of companies in the array");
  let itCompaniesLength = itCompanies.length;
  console.log(
    "🚀 ~ file: exercise1.js ~ line 72 ~ itCompaniesLength",
    itCompaniesLength
  );
  console.log("------");

  console.log("9. Print the first company, middle and last company");
  let firstCompany = itCompanies[0];
  console.log("🚀 ~ file: exercise1.js ~ line 76 ~ firstCompany", firstCompany);
  let middleCompany = itCompanies[parseInt(itCompaniesLength / 2)];
  console.log(
    "🚀 ~ file: exercise1.js ~ line 79 ~ middleCompany",
    middleCompany
  );
  let lastCompany = itCompanies[itCompaniesLength - 1];
  console.log("🚀 ~ file: exercise1.js ~ line 84 ~ lastCompany", lastCompany);
  console.log("------");

  console.log("10. Print out each company");
  itCompanies.forEach((company) => {
    console.log("🚀 ~ file: exercise1.js ~ line 99 ~ company", company);
  });
  console.log("------");

  console.log(
    "11. Change each company name to uppercase one by one and print them out"
  );
  itCompanies.map((company) => {
    let companyUppercase = company.toUpperCase();
    console.log(
      "🚀 ~ file: exercise1.js ~ line 114 ~ itCompanies.map ~ companyUppercase",
      companyUppercase
    );
    return companyUppercase;
  });
  console.log("------");

  console.log(
    "12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies"
  );
  console.log(itCompanies.join(", "), "are big IT companies");
  console.log("------");

  console.log(
    "13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found"
  );
  let company = "FaceBoOK";
  if (
    itCompanies.map((com) => com.toLowerCase()).includes(company.toLowerCase())
  ) {
    console.log("has company", company);
  } else {
    console.log("not found");
  }
  console.log("------");

  console.log(
    "14. Filter out companies which have more than one 'o' without the filter method"
  );
  let ooCompany = [];
  itCompanies.map((com) => {
    if (com.toLowerCase().indexOf("o") !== com.toLowerCase().lastIndexOf("o")) {
      ooCompany.push(com);
    }
  });
  console.log(
    "🚀 ~ file: exercise1.js ~ line 148 ~ itCompanies.map ~ ooCompany",
    ooCompany
  );
  console.log("------");

  console.log("15. Sort the array using sort() method");
  console.log(
    "🚀 ~ file: exercise1.js ~ line 155 ~ itCompanies.sort()",
    itCompanies.sort()
  );
  console.log("------");

  console.log("16. Reverse the array using reverse() method");
  console.log(
    "🚀 ~ file: exercise1.js ~ line 159 ~ itCompanies.reverse()",
    itCompanies.reverse()
  );
  console.log("------");

  console.log("17. Slice out the first 3 companies from the array");
  itCompanies.shift();
  itCompanies.shift();
  itCompanies.shift();
  console.log("🚀 ~ file: exercise1.js ~ line 165 ~ itCompanies", itCompanies);
  console.log("------");

  console.log("18. Slice out the last 3 companies from the array");
  itCompanies.pop();
  itCompanies.pop();
  itCompanies.pop();
  console.log("🚀 ~ file: exercise1.js ~ line 172 ~ itCompanies", itCompanies);
  console.log("------");

  console.log(
    "19. Slice out the middle IT company or companies from the array"
  );
  itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  itCompaniesLength = itCompanies.length;
  console.log("🚀 ~ file: exercise1.js ~ line 186 ~ itCompanies", itCompanies);
  if (Number.isInteger(itCompaniesLength / 2)) {
    console.log(
      "🚀 ~ file: exercise1.js ~ line 198 ~ itCompanies.splice(itCompaniesLength / 2 - 1, 1)",
      itCompanies.splice(itCompaniesLength / 2 - 1, 1)
    );
    console.log(
      "🚀 ~ file: exercise1.js ~ line 200 ~ itCompanies.splice(itCompaniesLength / 2 - 1, 1)",
      itCompanies.splice(itCompaniesLength / 2 - 1, 1)
    );
  } else {
    console.log(
      "🚀 ~ file: exercise1.js ~ line 203 ~ itCompanies.splice((itCompaniesLength - 1) / 2, 1)",
      itCompanies.splice((itCompaniesLength - 1) / 2, 1)
    );
  }
  console.log("------");

  console.log("20. Remove the first IT company from the array");
  itCompanies.shift();
  console.log("🚀 ~ file: exercise1.js ~ line 207 ~ itCompanies", itCompanies);
  console.log("------");

  console.log("21. Remove the middle IT company or companies from the array");
  itCompaniesLength = itCompanies.length;
  if (Number.isInteger(itCompaniesLength / 2)) {
    itCompanies.splice(itCompaniesLength / 2 - 1, 1);
    itCompanies.splice(itCompaniesLength / 2 - 1, 1);
  } else {
    itCompanies.splice((itCompaniesLength - 1) / 2, 1);
  }
  console.log("🚀 ~ file: exercise1.js ~ line 213 ~ itCompanies", itCompanies);
  console.log("------");

  console.log("22. Remove the last IT company from the array");
  itCompanies.pop();
  console.log("🚀 ~ file: exercise1.js ~ line 222 ~ itCompanies", itCompanies);
  console.log("------");

  console.log("23. Remove all IT companies");
  itCompanies = itCompanies.splice();
  console.log("🚀 ~ file: exercise1.js ~ line 227 ~ itCompanies", itCompanies);
  console.log("------");
}