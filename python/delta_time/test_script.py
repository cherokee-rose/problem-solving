n_cases = int(input())
my_answers, right_answers = [], []

for i in range(n_cases * 2):
    if i < n_cases:
        my_answers.append(input())
    else:
        right_answers.append(input())

matches = 0
for j in range(n_cases):
    if my_answers[j] == right_answers[j]:
        matches += 1

print("correctness: {:.2f}%".format(round(matches / n_cases) * 100 ))