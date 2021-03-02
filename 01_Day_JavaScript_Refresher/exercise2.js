function exercise2() {
  console.clear();
  console.log("exercise 2");

  console.log(
    "1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file"
  );
  console.log("------");

  console.log(
    "2. First remove all the punctuations and change the string to array and count the number of words in the array"
  );
  let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  console.log("🚀 ~ file: exercise2.js ~ line 16 ~ exercise2 ~ text", text);
  arrText = text.split(" ");
  console.log(
    "🚀 ~ file: exercise2.js ~ line 18 ~ exercise2 ~ arrText",
    arrText
  );
  arrTextLength = arrText.length;
  console.log(
    "🚀 ~ file: exercise2.js ~ line 20 ~ exercise2 ~ arrTextLength",
    arrTextLength
  );
  console.log("------");

  console.log("3. In the following shopping cart add, remove, edit items");
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  console.log("🚀 ~ file: exercise2.js ~ line 31 ~ exercise2 ~ shoppingCart", shoppingCart)

  console.log("-- add 'Meat' in the beginning of your shopping cart if it has not been already added");
  if (!shoppingCart.map(item => item.toLowerCase()).includes('meat')) {
    shoppingCart.unshift('Meat')
  }
  console.log("🚀 ~ file: exercise2.js ~ line 35 ~ exercise2 ~ shoppingCart", shoppingCart)

  console.log('-- add Sugar at the end of you shopping cart if it has not been already added');
  if (!shoppingCart.map(item => item.toLowerCase()).includes('sugar')) {
    shoppingCart.push('Sugar')
  }
  console.log("🚀 ~ file: exercise2.js ~ line 42 ~ exercise2 ~ shoppingCart", shoppingCart)

  console.log('-- remove \'Honey\' if you are allergic to honey and modify Tea to \'Green Tea\'');
  isAllergicWithHoney = true
  if (isAllergicWithHoney) {
    shoppingCart.splice(shoppingCart.map(item => item.toLowerCase()).indexOf('honey'), 1, 'Green Tea')
  }
  console.log("🚀 ~ file: exercise2.js ~ line 49 ~ exercise2 ~ shoppingCart", shoppingCart)
  console.log("------");

  console.log("4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.");
  if (countries.map(item => item.toLowerCase()).includes('ethiopia')) {
    console.log("ETHIOPIA");
  } else {
    countries.push('ETHIOPIA')
    console.log("🚀 ~ file: exercise2.js ~ line 58 ~ exercise2 ~ countries", countries)
  }
  console.log("------");

  console.log('5. In the webTechs array check if Sass exists in the array and if it exists print \'Sass is a CSS preprocess\'. If it does not exist add Sass to the array and print the array.');
  if (webTechs.map(item => item.toLowerCase()).includes('sass')) {
    console.log("Sass is a CSS preprocess");
  } else {
    webTechs.push('Sass')
    console.log("🚀 ~ file: exercise2.js ~ line 66 ~ exercise2 ~ webTechs", webTechs)
  }
  console.log("------");

  console.log('6. Concatenate the following two variables and store it in a fullStack variable');
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  console.log("🚀 ~ file: exercise2.js ~ line 73 ~ exercise2 ~ frontEnd", frontEnd)
  console.log("🚀 ~ file: exercise2.js ~ line 74 ~ exercise2 ~ backEnd", backEnd)
  let fullStack = frontEnd.concat(backEnd)
  console.log("🚀 ~ file: exercise2.js ~ line 77 ~ exercise2 ~ fullStack", fullStack)

}
