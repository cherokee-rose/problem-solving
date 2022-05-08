t = int(input())
cases, my_out, answers = [], [], []

for i in range(t * 2):

    in_ = input()
    if i < t:
        cases.append(in_)
        my_out.append(input())
    elif i < t * 2:
        answers.append(in_)

pluses = 0
for j in range(t):
    if my_out[j] != answers[j]:
        print('Case:', cases[j] + ',', 'my answer:', my_out[j] + ',', 'right answer:', answers[j])
    else:
        pluses += 1

print('Correctness: %.2f%%' % (pluses / t * 100))