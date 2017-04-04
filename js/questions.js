var Question = function (drink, query, category, choices) {
	this.drink = drink;
	this.query = query;
	this.category = category;
	this.choices = choices;
}

var questions = [];

var bloodymary = ['url("http://i.imgur.com/IdqDvS5.png")'];
bloodymary.push(new Question('Hangar One Bloody Mary', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 3
}));
bloodymary.push(new Question('Hangar One Bloody Mary', 'Is this cocktail shaken or stirred?', 'Two-choice', {
	choices: ['Stirred', 'Shaken']
	, a: 1
}));
bloodymary.push(new Question('Hangar One Bloody Mary', 'How many ounces of Bloody Mary Mix is in this cocktail?', 'Four-choice', {
	choices: [1, 2, 3, 4]
	, a: 3
}));
bloodymary.push(new Question('Hangar One Bloody Mary', 'What garnish is not used in this cocktail?', 'Four-choice', {
	choices: ['Stuffed Olive', 'Celery Stalk', 'Lemon Wedge', 'Grape Tomato']
	, a: 2
}));
questions.push(bloodymary);

var islander = ['url("http://i.imgur.com/6WVVkS1.jpg")'];
islander.push(new Question('The Islander', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 0
}));
islander.push(new Question('The Islander', 'What two types of juice are used?', 'Four-choice', {
	choices: ['Oranges and Pineapple', 'Orange and Cranberry', 'Cranberry and Pineapple', 'Pineapple and Lime']
	, a: 0
}));
islander.push(new Question('The Islander', 'How many ounces of each juice are used?', 'Four-choice', {
	choices: [' 1 OZ.', '1.5 OZ.', ' 2 OZ.', ' 2.5 OZ.']
	, a: 1
}));
islander.push(new Question('The Islander', 'What type of garnish is used in this cocktail?', 'Four-choice', {
	choices: ['Lime Wedge', 'Cherry', 'Orange Wedge', 'Lemon Wedge']
	, a: 2
}));
questions.push(islander);

var strawbellini = ['url("http://i.imgur.com/CYhRb4m.png")'];
strawbellini.push(new Question('Strawberry Bellini', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 0
}));
strawbellini.push(new Question('Strawberry Bellini', 'What type of garnish is used?', 'Four-choice', {
	choices: ['Strawberry', 'Cherry', 'Orange Wedge', 'None']
	, a: 3
}));
strawbellini.push(new Question('Strawberry Bellini', 'What size is the Corbel Brut bottle?', 'Four-choice', {
	choices: ['157ml', '177ml', '187ml', '197ml'], a: 2
}));
strawbellini.push(new Question('Strawberry Bellini', 'How many ounces of Strawberry Puree are used in this cocktail?', 'Four-choice', {
	choices: ['0.5 OZ.', '0.75 OZ.', '1 OZ.', '2 OZ.']
	, a: 0
}));
questions.push(strawbellini);

var southbound = ['url("http://i.imgur.com/2awG9fv.png")'];
southbound.push(new Question('Southbound Flight', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 2
}));
southbound.push(new Question('Southbound Flight', 'What brand of liquor is used to make this cocktail?', 'Four-choice', {
	choices: ['1800 Resposado', 'Absolut Citron', 'Captain Morgan Spiced Rum', 'Hendrick\'s Gin']
	, a: 0
}));
southbound.push(new Question('Southbound Flight', 'How many lime wedges  are used in this cocktail?', 'Four-choice', {
	choices: [1, 2, 3, 4]
	, a: 2
}));
southbound.push(new Question('Southbound Flight', 'What garnish is used in this cocktail?', 'Four-choice', {
	choices: ['Lime Wheel', 'Mint Leaves', 'Cucumber Slice', 'Lemon Wedge']
	, a: 2
}));
questions.push(southbound);

var strawmint = ['url("http://i.imgur.com/ekrXMim.png")'];
strawmint.push(new Question('Strawberry Mint Lemonade', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 3
}));
strawmint.push(new Question('Strawberry Mint Lemonade', 'Is this cocktail shaken or stirred?', 'Two-choice', {
	choices: ['Stirred', 'Shaken']
	, a: 1
}));
strawmint.push(new Question('Strawberry Mint Lemonade', 'What brand of liquor is used to make this cocktail?', 'Four-choice', {
	choices: ['Absolut Citron', 'Patron Citronge', 'Smirnoff', 'Stolichnaya']
	, a: 0
}));
strawmint.push(new Question('Strawberry Mint Lemonade', 'How many garnishes are used in this cocktail?', 'Four-choice', {
	choices: [1, 2, 3, 4]
	, a: 1
}));
questions.push(strawmint);

var dobel = ['url("http://i.imgur.com/oTJkBK4.png")'];
dobel.push(new Question('Dobel Rita', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 1
}));
dobel.push(new Question('Dobel Rita', 'Is a lime wedge used in this cocktail?', 'Two-choice', {
	choices: ['No', 'Yes']
	, a: 1
}));
dobel.push(new Question('Dobel Rita', 'How many ounces of Finest Hour Sour is in this cocktail?', 'Four-choice', {
	choices: ['1 OZ.', '2 OZ.', '3 OZ.', '4 OZ.']
	, a: 2
}));
dobel.push(new Question('Dobel Rita', 'How many garnishes are used in this cocktail?', 'Four-choice', {
	choices: [1,2,3,4]
	, a: 1
}));
questions.push(dobel);

var ginginger = ['url("http://i.imgur.com/f0NBuO6.png")'];
ginginger.push(new Question('Gin & Ginger', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 2
}));
ginginger.push(new Question('Gin & Ginger', 'Is this cocktail garnished with a lime wedge?', 'Two-choice', {
	choices: ['Yes', 'No']
	, a: 1
}));
ginginger.push(new Question('Gin & Ginger', 'How many ounces of Lime Juice is used in this cocktail?', 'Four-choice', {
	choices: ['0.25 OZ.', '0.50 OZ.', '0.75 OZ.', '1 OZ.']
	, a: 0
}));
ginginger.push(new Question('Gin & Ginger', 'How many ounces is the glass used in this cocktail?', 'Four-choice', {
	choices: ['6 OZ.', '7 OZ.', '8 OZ.', '9 OZ.']
	, a: 1
}));
questions.push(ginginger);

var pom = ['url("http://i.imgur.com/SU9xlbp.png")'];
pom.push(new Question('Pomegranate Mojito', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 2
}));
pom.push(new Question('Pomegranate Mojito', 'Is this cocktail shaken or stirred?', 'Two-choice', {
	choices: ['Stirred', 'Shaken']
	, a: 0
}));
pom.push(new Question('Pomegranate Mojito', 'How many lime wedges are used in this cocktail?', 'Four-choice', {
	choices: [1, 2, 3, 4]
	, a: 2
}));
pom.push(new Question('Pomegranate Mojito', 'What is the cocktail topped off with?', 'Four-choice', {
	choices: ['Cranberry Juice', 'Pomegranate Juice', 'Lime Juice', 'Club Soda']
	, a: 3
}));
questions.push(pom);

var peach = ['url("http://i.imgur.com/BhahFoV.png")'];
peach.push(new Question('Peach Smash', 'What kind of glass do you use to make this cocktail?', 'Glass', {
	choices: [0, 1, 2, 3]
	, a: 2
}));
peach.push(new Question('Peach Smash', 'What type of juice is used in this cocktail?', 'Four-choice', {
	choices: ['Cranberry Juice', 'Pomegranate Juice', 'Lime Juice', 'Apple Juice']
	, a: 3
}));
peach.push(new Question('Peach Smash', 'How many ounces is the glass used in this cocktail?', 'Four-choice', {
	choices: ['6 OZ.', '7 OZ.', '8 OZ.', '9 OZ.']
	, a: 3
}));
peach.push(new Question('Peach Smash', 'What type of garnish is used in this cocktail?', 'Four-choice', {
	choices: ['Lime Wheel', 'Basil Leaf', 'Mint Sprig', 'Lemon Wedge']
	, a: 1
}));
questions.push(peach);

//questions.forEach(function (q) {
//	q[3].choices.choices.forEach(function (ch) {
//		if (typeof ch != 'number') {
//			console.log(ch + ": " + ch.length)
//		}
//	})
//})