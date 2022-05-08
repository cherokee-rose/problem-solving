@echo on
cd "C:\Users\evgen\Desktop\Education\Python Learning\test suite\hackerrank_delta_time"
type nul > result.txt

for /L %%i in (1,1,2) do (
	py code.py < input\input0%%i.txt > outputs.txt
	type output\output0%%i.txt >> outputs.txt
	echo Case %%i: >> result.txt
	py test_script.py < outputs.txt >> result.txt
	del outputs.txt 
)




