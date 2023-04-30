Q1: <br /> 
The bug is that num1 and num2 are strings, so the + operator at line 11 is doing string concatenation.

Q2: <br /> 
To fix it, I would cast num1 and num2 to the Number datatype so that the addition operation will work and return their sum as result.