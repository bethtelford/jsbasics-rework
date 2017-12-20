//Helper Function
function arrayIncludes(arr, values){
	let allGood = true;
	for(let i = 0; i < values.length; i++){
		if(!arr.includes(values[i])){
			allGood = false
			break
		}
	}
	return allGood
}

//Test Suite
describe('fns-and-scope', function () {


	describe('Problem 1 - greeting', function () {
		it('should exist', function () {
			expect(greeting).toBeDefined();
		})
		it('should return "Hello, Trogdor" if passed "Trogdor"', function () {
			expect(greeting('Trogdor')).toBe('Hello, Trogdor');
		})
		it('should return "Hello, undefined" if passed nothing', function () {
			expect(greeting()).toBe("Hello, undefined");
		})
		it('should be hoisted', function () {
			expect(typeof sup.greeting).toBe('function');
		})
		it('should be made with function keyword', function () {
			var madeWithFunctionKeyword = greetingsTester.greeting.prototype ? true : false
			expect(madeWithFunctionKeyword).toBe(true);
		})
	})

	describe('Problem 2 - newGreeting', function () {
		it('should exist', function () {
			expect(newGreeting).toBeDefined();
		})
		it('should return "Hello, Trogdor" if passed "Trogdor"', function () {
			expect(newGreeting('Trogdor')).toBe('Hello, Trogdor');
		})
		it('should return "Hello, undefined" if passed nothing', function () {
			expect(newGreeting()).toBe("Hello, undefined");
		})
		it('should not be hoisted', function () {
			expect(sup.newGreeting).toBe(undefined);
		})
		it('should be made with function keyword', function () {
			var madeWithFunctionKeyword = greetingsTester.newGreeting.prototype ? true : false
			expect(madeWithFunctionKeyword).toBe(true);
		})
	})

	describe('Problem 3 - finalGreeting', function () {
		it('should exist', function () {
			expect(finalGreeting).toBeDefined();
		})
		it('should return "Hello, Trogdor" if passed "Trogdor"', function () {
			expect(finalGreeting('Trogdor')).toBe('Hello, Trogdor');
		})
		it('should return "Hello, undefined" if passed nothing', function () {
			expect(finalGreeting()).toBe("Hello, undefined");
		})
		it('should not be hoisted', function () {
			expect(sup.finalGreeting).toBe(undefined);
		})
		it('should be an arrow function', function () {
			var isArrowFunction = greetingsTester.finalGreeting.prototype ? false : true
			expect(isArrowFunction).toBe(true);
		})
	})

	describe('Problem 4 - groceries', function () {
		it('should exist', function () {
			expect(groceries).toBeDefined();
		})
		it('groceries should contain given values', function () {
			let vals = ["apples", "milk", "eggs", "bread"]
			let allGood = arrayIncludes(groceries, vals)
			expect(allGood).toBe(true);
		})

		it('doubleCheck should return type Array', function () {
			let vals = ["apples", "milk", "eggs", "bread"]
			expect(Array.isArray( doubleCheck(vals) )).toBe(true);
		})
		it('doubleCheck should return array that contains chocolate', function () {
			let vals = ["apples", "milk", "eggs", "bread"]
			let newArr = doubleCheck(vals)
			expect(newArr.includes("chocolate")).toBe(true);
		})
		it('doubleCheck should not remove anything from the array', function () {
			let vals = ["apples", "milk", "eggs", "bread"]
			let newArr = doubleCheck(vals)
			expect(arrayIncludes(newArr, vals)).toBe(true);
		})

		it('diet should remove "cookies" (and only "cookies") from holidayGroceries if passed 3', function () {
			let vals = ["butter", "sugar", "chocolate", "cinnamon"]
			diet(3)
			let noCookies = arrayIncludes(holidayGroceries, vals) && !holidayGroceries.includes("cookies")
			expect(noCookies).toBe(true);
		})
		it('diet should properly shift indexes of holidayGroceries upon removal of "cookies"', function () {
			let allGood = false
			if(holidayGroceries.length === 4 
				&& holidayGroceries[0] === "butter"
				&& holidayGroceries[1] === "sugar"
				&& holidayGroceries[2] === "chocolate"
				&& holidayGroceries[3] === "cinnamon") allGood = true
			expect(allGood).toBe(true);
		})
	})

	describe('Problem 5 - ', function () {
		it("should properly assign the dog name", function () {
			expect(devMountainClassPet).toBe('Sir Licktenstein');
		});

		it("cleanSlate should exist", function () {
			expect(cleanSlate).toBeDefined();
		});
		it("dog object literal should not be altered manually", function () {
			//this test ensures that the student doesn't alter the 
			//object literal to remove the falsy values
			var studentChangedObjectLiteral = true
			if( dog.name && dog.color && dog.age && !dog.treats && !dog.goodBoy) {
				studentChangedObjectLiteral = false
			}
			expect(studentChangedObjectLiteral).toBe(false);
		});
		it("cleanSlate should remove falsy values from dog", function () {
			let allGood = true
			cleanSlate()
			for(let key in dog){
				if(!dog[key]){
					allGood = false
					break
				}
			}
			expect(allGood).toBe(true);
		});
		it("cleanSlate should not remove truthy values from dog", function () {
			let allGood = false
			if( dog.name && dog.color && dog.age) {
				allGood = true
			}
			expect(allGood).toBe(true);
		});
		
	})

	describe('Problem 6 - ', function () {

		it("myDog should exist", function () {
			expect(myDog).toBeDefined();
		});
		it("myDog should have name, color, age properties", function () {
			let allGood = false
			if( myDog.name && myDog.color && myDog.age) {
				allGood = true
			}
			expect(allGood).toBe(true);
		});

		it("myDog should have a bark method", function () {
			expect(typeof myDog.bark).toBe('function');
		});
		it("myDog.bark should return 'Woof'", function () {
			expect(myDog.bark()).toBe('Woof');
		});

		it("ruff should exist", function () {
			expect(ruff).toBeDefined();
		});
		it("ruff should be 'Woof'", function () {
			expect(ruff).toBe('Woof');
		});
		
	})

	describe('Problem 7 - dogAdopter', function () {

		it("should exist", function () {
			expect(dogAdopter).toBeDefined();
		});
		it("should return an object", function() {
			expect(typeof dogAdopter("a", "b", 3)).toBe('object')
		});
		it("should return an object with name, color, and age properties corresponding with parameters", function() {
			var mightBeADragon = dogAdopter("Trogdor", "Blue", 1000)
			var allGood = false
			if(mightBeADragon.name === "Trogdor"
			   && mightBeADragon.color === "Blue"
				&& mightBeADragon.age === 1000) allGood = true
			expect(allGood).toBe(true)
		});
		
	})

	describe('Problem 8 - ', function () {

		it("add should exist", function () {
			expect(add).toBeDefined();
		});
		it("add should return the sum of its two parameters", function () {
			expect(add(1, 2) === 3 && add('hello', 'world') === 'helloworld').toBe(true);
		});

		it("mathSum should be 7", function () {
			expect(mathSum === 7 && math(5, 9, add) === 14).toBe(true);
		});

	})

	describe('Problem 9 - ', function () {

		it("invoker should exist", function () {
			expect(invoker).toBeDefined();
		});
		it("invoker should return 'I am a callback function' when passed sampleCallbackOne", function () {
			expect(invoker(sampleCallbackOne)).toBe('I am a callback function');
		});
		it("invoker should return 'I am also a callback function' when passed sampleCallbackTwo", function () {
			expect(invoker(sampleCallbackTwo)).toBe('I am also a callback function');
		});
		it("invoker should return 'ducks are cute' when passed the anonymous function () => 'ducks are cute'", function () {
			expect(invoker(() => 'ducks are cute')).toBe('ducks are cute');
		});
		

	})

	describe('Problem 10 - ', function () {

		it("globalScope should contain only variables accessible in the global scope", function () {
			let containsGlobals = arrayIncludes(globalScope, ["duck"])
			let containsOutOfScopeVars = (globalScope.includes("sailorDuck")
											&& globalScope.includes("rubberDuck")
											 && globalScope.includes("realDuck"))
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
		});
		it("bathroomScope should contain only variables accessible in the scope of the function bathroom", function () {
			let containsGlobals = arrayIncludes(bathroomScope, ["duck", "rubberDuck"])
			let containsOutOfScopeVars = (bathroomScope.includes("sailorDuck")
											&& bathroomScope.includes("realDuck"))
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
		});
		it("bathtubScope should contain only variables accessible in the scope of the function bathtub", function () {
			let containsGlobals = arrayIncludes(bathtubScope, ["duck", "rubberDuck", "sailorDuck"])
			let containsOutOfScopeVars = bathtubScope.includes("realDuck")
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
		});
		it("pondScope should contain only variables accessible in the scope of the function pond", function () {
			let containsGlobals = arrayIncludes(pondScope, ["duck", "realDuck"])
			let containsOutOfScopeVars = (pondScope.includes("sailorDuck")
											&& pondScope.includes("rubberDuck"))
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
		});

	})

	describe('Problem 11 - ', function () {

		it("outerFn should exist", function () {
			expect(outerFn).toBeDefined();
		});
		it("outerFn should return a function", function () {
			expect(typeof outerFn()).toBe('function');
		});
		it("outerFn should return a function that returns a string", function () {
			expect(typeof outerFn()()).toBe('string');
		});

		it("innerFn should exist", function () {
			expect(outerFn).toBeDefined();
		});
		it("innerFn should be a function", function () {
			expect(typeof innerFn).toBe('function');
		});
		it("innerFn should return a string", function () {
			expect(typeof innerFn()).toBe('string');
		});

		it("finalResult should exist", function () {
			expect(finalResult).toBeDefined();
		});
		it("innerFn should return a string", function () {
			expect(typeof finalResult).toBe('string');
		});
		

	})

})