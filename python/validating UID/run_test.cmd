type nul > outputs.txt
py target.py < input\input03.txt >> outputs.txt
type output\output03.txt >> outputs.txt
py tester.py < outputs.txt > result.txt
del outputs.txt
