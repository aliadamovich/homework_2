







// function isSimilar(arr1, arr2) {
// 	if(arr1.length !== arr2.length) return false


	
// 	let obj = {};

// 	for (let i = 0; i < arr1.length; i++) {
// 		const el = arr1[i]
// 		obj[el] = obj[el] ? obj[el] + 1 : 1
// 	}

// 	for (let i = 0; i < arr2.length; i++) {
// 		if (!obj[arr2[i]]) return false

// 		obj[arr2[i]] -= 1
// 	}

// 	for (let key in obj) {
// 		if (key < 0) return false
// 	}

// 	return true
// }

// console.log(arrToObj([9, 9, 7]));  //{ 7: 0, 9: 1 }


// function removeChar(str) {
// 	return str.slice(1, -1)
// };
// // console.log(removeChar('halkcna;lcsh'));

// function explode(s) {
// 	let arr = s.split('');
// 	// return s.split('').map(el => el.repeat(el) ).join('')
// 	let str = ''
// 	for (let i = 0; i < arr.length; i++) {
// 		// console.log(arr[i]);
		
// 		for (let num = arr[i]; num > 0; num--) {
// 			console.log(num);
// 			str += arr[i]
// 		}
// 	}
// 	return str
// }



// function multipleOfIndex(array) {
// 	return array.filter((el, i) => el === 0 && i === 0 || el % i === 0 )
// 	let newAr = [];
// 	if (array[0] === 0) newAr.push(array[0])
// 	for (let i = 1; i < array.length; i++ ) {
// 		if (array[i] % i === 0) {
// 			newAr.push(array[i])
// 		}
// 	}
// 	return newAr
// }
// console.log(multipleOfIndex([11, -11]));





// console.log(1);
// setTimeout(() => {
// 	console.log('set');
// }, 0);

// let pr = new Promise( (res, rej) => {
// 	console.log(2.1);
// 	setTimeout(() => {
// 		console.log('set in promise');
// 		res()
// 	}, 0);
// })


// pr.then( () => 
// 	setTimeout(() => {
// 		console.log(2.2)
// 	}, 0)
// 	)
// console.log(2);


// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// function solution(str, ending) {
// 	let start = str.length - ending.length
// 	let arrayfrom = str.split('').splice(start, ending.length).join('');
// 	if (arrayfrom === ending) return true
// 	return false
// }



// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));


// function disemvowel(str) {
// 	let regExp = /[aeiou]/gi;
// 	return str.replace(regExp, '')
// 	}

// console.log(disemvowel("This website is for losers LOL!"));

// function findOutlier(arr) {
// 	let slicedArray = arr.slice(0, 3)
// 	let evenArray = slicedArray.filter(el => el % 2 === 0 || el === 0)

// 	if (evenArray.length === 3) {
// 		return arr.find(el => el % 2 )
// 	} 
// 	else if (evenArray.length === 2) {
// 	return slicedArray.find(el => el % 2)
// 	}
// 		else {
// 		return arr.find(el => el % 2 === 0 || el === 0)
// 	}

// }

// [2, 4, 0, 100, 4, 11, 2602, 36]-- > 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]-- > 160(the only even number)

// console.log(findOutlier([0, 1, 2]))

// export default 1

// console.log('log 1')

// Promise.resolve()
// 	.catch(() => console.log('catch 1'))
// 	.then(() => console.log('then 1'))

// Promise.resolve()
// 	.then(() => console.log('then 2'))

// console.log('log 2')

// function findNextSquare(sq) {
// 	let sqRoot = Math.sqrt(sq)

// 	if (Number(sqRoot.toFixed()) === sqRoot) return ((sqRoot + 1) ** 2)
// 	return -1;
// }
// console.log(findNextSquare(121));


// class Samurai {
// 	constructor(name) {
// 		this.name = name
// 	}
// 	hello() {
// 		alert(this.name)
// 	}
// }

// let shogun = new Samurai('Dim');
// // console.log(shogun.__proto__.__proto__);
// console.log(shogun.__proto__.__proto__.constructor.__proto__ === ???);


// let pr = fetch('https://www.google.com')
// 	.then( (data) => {console.log(data);
// })
// 	.catch((err) => console.log(err))

// async function newPr() {
// 	let res = await fetch('https://www.google.com')
// 	console.log(res);
// }

// newPr()

// const newww = async () => {
// 	let res = await fetch('https://www.google.com')
// 	console.log(res);
// }

// newww()

// const promise1 = fetch('http://google.com')
// 	.then( (user) => { return user.name })
// 	.then((name) => console.log(name))

// function getNumber() {
// 	const promise = new Promise( (res, rej) => {
// 		rej('some error');
// 		console.log(111);
// 		res(Math.random())
// 	})
// 	return promise
// }
// getNumber().then((d) => console.log(d))
// 						.catch((err) => console.log(err))
// console.log(222);


// function wait(time) {
// 	return new Promise( (res, rej) => {
// 		setTimeout( () => {
// 			res()
// 		}, time)
// 	})
// }

// async function run() {
// 	await wait(1000) 
// 	console.log(1);

// 	await wait(1000)
// 	console.log(2);

// 	await wait(1000)
// 	console.log(3);
	
// }
// run()
// const API = {
// 	 save (data) {
// 		return new Promise((res, rej) => {
// 			try {
// 				localStorage.setItem('some', JSON.stringify(data))
// 				res()
// 			} catch (error) {
// 				rej(error)
// 			}
// 		})
// 	},
// 	get() {
// 		return new Promise((res, rej) => {
// 			let data = localStorage.getItem('some')
// 				if (data) {
// 					res(JSON.parse(data))
// 				}
// 				else {
// 					rej((err) => console.log(err)
// 					)
// 				}
// 		})
// 	}
// }


// API.save({name: 'ffhj'})
// 	.then(data => console.log(data))

// API.get()
// 	.then(data => console.log(data))


// fetch('http://google.com')
// 	.then(data => (console.log(data.type)))


// function order(str) {
// 	let arr = str.split(' '); //[ 'is2', 'Thi1s', 'T4est', '3a' ]
// 	let obj = {}
// 	for (let i = 0; i < arr.length; i++) {
// 		let word = arr[i];
// 		for (let k of word) {
// 			if (Number(k)) 
// 			{ obj[word] = Number(k) } //{ is2: 2, Thi1s: 1, T4est: 4, '3a': 3 }
// 		}
// 	}
// 	let quantity = Object.keys(obj).length
// 	console.log(quantity);
	
// 	let newArr = new Array(quantity + 1).fill(0, 0)

// 	for (let key in obj) {
// 		newArr.splice(obj[key], 1, key)
// 		console.log(newArr);
		
// 	}
// 	return newArr.filter(el => el !== 0).join(' ')
// }

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// function orderA(str) {
//  let reg = /\d/;

// 	return str && str.split(' ')
// 		.map(word => word.match(/\d/) + word)
// 		.sort()
// 		.map(w => w.slice(1))
// 		.join(' ')
// }

// console.log(orderA("4of Fo1r pe6ople g3ood th5e the2"));


// function alphabetPosition(text) {
// 	let newStr = ''
// 	for (let i = 0; i < text.length; i ++) {

// 		newStr += text.toLowerCase().charCodeAt(i) + " "
// 	}
// 	console.log(newStr);
	
// 	let arr = newStr.split(' ')
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] -= 96
// 	}

// 	return arr.filter(l => l >= 1 && l <= 26).join(' ')
// }



// console.log(alphabetPosition(">|}av#>c"));

// console.log(1)

// setTimeout(() => {
// 	console.log(2)
// 	Promise.resolve().then(() => {
// 		console.log(3)
// 	})
// })

// new Promise((res, rej) => {
// 	console.log(4)
// 	res(5)
// }).then(data => {
// 	console.log(data)

// 	Promise.resolve()
// 		.then(() => {
// 			console.log(6)
// 		})
// 		.then(() => {
// 			console.log(7)

// 			setTimeout(() => {
// 				console.log(8)
// 			}, 0)
// 		})
// })

// setTimeout(() => {
// 	console.log(9)
// })

// console.log(10)

