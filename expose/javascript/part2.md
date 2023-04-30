Q1: <br /> 
line 12 will print 3, because that is the value of "i" when the loop terminates. Moreover, "i" is a var variable and the var variable is function scoped.  

Q2: <br /> 
line 13 will print 150, which is the discounted price of 300, because 300 is the last price that gets discounted in the for loop. Moreover, the var variable that stores the discounted price is function scoped.  

Q3: <br /> 
line 13 will print 150, which is the discounted and rounded price of 300. The discounded price is 150, after rounding, it is still 150. Moreover, the var variable that stores the final price is function scoped. 

Q4: <br /> 
The function returns a list of discounted prices. The function loops through a list of prices for discounting and rounding before pushing these discounted final prices into the list that will be returned. Moreover, the list is function scoped.

Q5: <br /> 
The code causes an error, because let "i" is block scoped inside of the for loop, so when printing "i" at line 12 will be an error for out of its scope.

Q6: <br /> 
The code causes an error, because let "discountedPrice" is block scoped inside of the for loop, so when printing "discountedPrice" at line 13 will be an error for out of its scope.

Q7: <br /> 
line 13 will print 150, which is the discounted and rounded price of 300. The discounded price is 150, after rounding, it is still 150. Moreover, line 13 is inside the block scope for the let "finalPrice", so no error. 

Q8: <br /> 
The function returns a list of discounted prices. The function loops through a list of prices for discounting and rounding before pushing these discounted final prices into the list that will be returned. Moreover, line 16 is inside the block scope for the let variable list, so no error.

Q9: <br /> 
The code causes an error, because line 11 is out of the block scope of "i". 

Q10: <br /> 
line 12 will print 3, which is the length of the prices list. There is no error because line 12 is inside the block scope of const "length", and there is no change at the value of "length". 

Q11: <br /> 
The function returns a list of discounted prices. line 8 that pushs discounted price into the list will not cause error because it assigns values into the list, not changing value in the list.

Q12: <br /> 
A: student.name <br /> 
B: student["Grad Year"] <br /> 
C: student.greeting() <br /> 
D: student["Favorite Teacher"].name <br /> 
E: student.courseLoad[0]

Q13: <br /> 
A: output is 32, becuase 2 is mapped to string '2' and concat with string '3'. <br /> 
B: output is 1, because string '3' is mapped to int 3 and subtract int 1. <br /> 
C: output is 3, because null is mapped into int 0 and add with int 3. <br /> 
D: output is 3null, because null is mapped to string 'null' and concat with string '3'. <br /> 
E: output is 4, because true is mapped into int 1 and add with int 3. <br /> 
F: output is 0, because both false and null are mapped to int 0 and 0 + 0 = 0. <br /> 
G: output is 3undefined, because undefined is mapped to string 'undefined' and concat with string '3'. <br /> 
H: output is NaN, because undefined can't be mapped to number for subtraction thus returning NaN.

Q14: <br /> 
A: true, because string '2' is mapped to int 2 for comparison. <br /> 
B: false, because string comparasion compares both string's char one by one, and '2' is > '1'. <br /> 
C: true, because string '2' is mapped to int 2 for comparison. <br /> 
D: false, because === checks the equlity without type conversion. <br />
E: false, because true is mapped to int 1 for comparison. <br />
F: true, because Boolean(2) returns true, and true === true returns true.

Q15: <br />
== allows type conversion when comparing, so it returns true if both terms have the same value. === only returns true if both terms have the same type and value.

Q17: <br />
[2,4,6] is returned. doSomething is a function that doubles its parameter. doSomething and [1,2,3] are passed into the function modifyArray. In the for loop, array[i] access each element in [1,2,3] one by one, and the callback(doSomething) doubles each element in [1,2,3]. Then these elements are pushed into the new array, and the new array will be returned.

Q19: <br />
1 4 3 2