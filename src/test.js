







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
// 	// return array.filter((el, i) => i === 0 ? el : el % i === 0 ? el : null )
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








export default 1