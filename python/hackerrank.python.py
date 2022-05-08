"""
------------------------------------------------HACKERRANK SOLUTIONS------------------------------------------------
Description: This source-code is used for educational and record purposes and was intended to store short-solution-problems.
For more complex and bulky problems there will be separated files.

Table of Contents:
#
"""

import textwrap, math, cmath, itertools, collections, calendar, datetime, re, html.parser, xml.etree, operator, numpy


"""
Given two integers, a and b, print their sum, difference and product.
"""

def printOps(a,b):
    print("{0} \n{1} \n{2}".format((a + b), (a - b), (a * b)))



"""
Given superset S and integer n - number of its potential subsets, check if these potential subsets are
real subsets of this superset. 
"""

def superset_check():

    superset, n_cases = set(map(int, input().split())), int(input())
    sucess = True

    for _ in range(n_cases):
        subset = set(map(int, input().split()))

        if len(superset) > len(subset) \
        and not superset.issuperset(subset):
            sucess = False
            break

    print(True if sucess else False)




"""
Given coordinates (x, y, z) and n integer, build list of sub-lists of coordinates, where 
each sublist consists of coordinates and their sum not equals to n: el1 : 0 < x, el2: 0 < y, el3: 0 < z and 
el1 + el2 + el3 != n. el here is corresponding coordinate.
"""

def list_comprehensions():
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    print([[i,j,k] for i in range(x + 1) \
                   for j in range(y + 1) \
                   for k in range(z + 1) if i+j+k != n])



"""
Given list of scores, find second place of this scores.
"""

def find_runner_up():
    if __name__ == '__main__':
        n = int(input())
        list_ = list(map(int, input().split()))

        current_max = max(list_)
        while current_max in list_:
            list_.remove(current_max)

        print(max(list_))



"""
Problem: Read students' information, sort and then print student's name with second lowest grade.
If more than one students have the same grades, sort their names in alphabetic order and print each
on new line.
"""

def find_second_lowest():

    # Read all students:
    students = []

    print("Number of students: ",end="")
    for _ in range(int(input())):
        students.append([str(input()), float(input())])

    # Sort them all by grade:
    students = sorted(students, key=lambda student: student[1])
    print("All students after sorting by grade:", students)

    current_min = min(students, key=lambda student: student[1])[1]
    print("Lowest-grade:", current_min)

    # Remove all lowest-grade students, in order to retrieve all second-lowest-grade students:
    while current_min == students[0][1]:
        print("Student", students[0], "has been removed.")
        students.remove(students[0])

    # Add all second-lowest-grade students in list
    out_students = []
    current_min = students[0][1]

    for out_st in students:
        if out_st[1] == current_min:
            out_students.append(out_st)
        else:
            break

    # Sort them all by their names:
    out_students = sorted(out_students,key=lambda student: student[0])
    print("Second-lowest-grade(s) student(s):", out_students)



"""
Given a string, swap case of each character: HeLlO -> hElLo
"""

def swap_cases(s):
    return "".join([ch.upper() if ch.islower() else ch.lower() for ch in s])



"""
Wrap text using module wraptext
"""

def wrap_text(string, width):
    print (textwrap.fill(string, width=width))



"""
NO-COMMENTS
"""

def print_pattern(n):
    a = 1
    for b in range(n // 2):
        print((".|." * a).center(n * 3, "-"))
        a += 2

    print(("WELCOME").center(n * 3, "-"))

    a -= 2
    for b in range(n // 2):
        print((".|." * a).center(n * 3, "-"))
        a -= 2



"""
Given n integer, print integer i in range 1 - n, in decimal, binary, octal and hexadecimal format.
"""

def print_reprs(n):
    width = len(str(bin(n))) - 1
    for i in range(1, n + 1):
        print("{0:{width}d} {0:{width}o} {0:{width}X} {0:{width}b}".format(i, width=width))



"""
NO COMMENTS
"""

def print_rangoli(size):
    alps = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    pattern = ''

    step_ = -1
    i = size - 1

    while True:

        if i == -1:
            i += 2
            step_ = 1
        elif i == size:
            break

        pattern = alps[i]
        if i > -1:
            for j in range(i + 1, size):
                pattern = pattern.center(len(pattern) + 2, "-")
                pattern = pattern.center(len(pattern) + 2, alps[j])
        elif i < size:
            for k in range(i, size - i):
                pattern = pattern.center(len(pattern) + 2, "-")
                pattern = pattern.center(len(pattern) + 2, alps[k])

        print(pattern.center(size * 4 - 3, "-"))
        i += step_



"""
Given a string, where all characters are alphabetic letters with upper case. If substring begins
with consonant, then 1 point goes to Stuart and if it's vowel, then to Kevin. 
"""

def minion_game(string):
    vowels = "AEIOU"
    scores = {"Stuart": 0, "Kevin": 0}

    for i in range(len(string)):
        if string[i] in vowels:
            scores["Kevin"] += len(string) - i
        else:
            scores["Stuart"] += len(string) - i

    score_list = list(scores.values())
    winner_score = max(score_list)

    if score_list[0] == score_list[1]:
        print("Draw")
    elif score_list[0] == winner_score:
        print("Stuart", winner_score)
    else:
        print("Kevin", winner_score)



"""
Given a string and an integer k, where k is multiple of len(string). Your task is to divide the string into
(len(string) / k) substrings of k length and print each on new line. However, each substring should not contain
duplicated characters.
"""

def merge_the_tools(str_, k):
    list_ = [[] for _ in range(len(str_) // k)]

    for i in range(len(str_) // k):

        for j in range(i * k, i * k + k):
            if str_[j] not in list_[i]:
                list_[i].append(str_[j])


    list_ = list(map("".join, list_))
    print("\n".join(list_))



"""
Given an array of length n and 2 sets A and B of length m, you like set A, but dislike set B. You have initial happiness 0,
if the array contains element of set A, your happiness increases by 1 and if the array contains element of set B, your 
happiness decreases by 1. Print your happiness.
"""
def calc_happiness():
    n, m = list(map(int, input().split()))
    array = list(map(int, input().split()))
    A, B = set(map(int, input().split())), set(map(int, input().split()))

    print(sum((i in A) - (i in B) for i in array))



def perform():
    n = int(input())
    s = set(map(int, input().split()[:n]))

    """
    My solution:
    for _ in range(int(input())):
        in_put = input().split()
        command, el = in_put[0], int(in_put[1]) if in_put[0] != "pop" else None

        if command == "discard":
            s.discard(int(el))
        elif command == "pop":
            s.pop()
        elif command == "remove":
            s.remove(int(el))

    print(sum(s))
    
    Clever solution:
    """

    for _ in range(int(input())):
        eval("s.{}({})".format(*input().split()), "")

    print(sum(s))



"""
Given a list and k integer. List consists of numbers, where each number repeats k times, except one number. You need to
find that number.
"""

def find_captain():
    """
    Alghorithm:
        1. Read k integer from input and list as sorted list;
        2. Before starting iteration, check number of occurrences of the first element and the last element:
            if number of occurrences of either first or last element equals to 1, print that element.
            else start iteration
        3. Start iteration by k step, in each cycle, convert each subset[i : i + k] into set and check length:
            if length equals to 2 : break;
        4. Print a element in the list which number of occurrences in initial list equals to 1.
    """
    k, in_list = int(input()), list(sorted(map(int, input().split())))
    cap_room = 0

    print(k, "\n", in_list, sep="")

    if in_list.count(in_list[0]) == 1:
        cap_room = in_list[0]
    elif in_list.count(in_list[-1]) == 1:
        cap_room = in_list[-1]
    else:
        sub = []
        for i in range(0, len(in_list) - k, k):
            if len(set(in_list[i : i + k])) == 2:
                sub = list(set(in_list[i : i + k]))
                print("Found: ", sub)
                break

        cap_room = sub[0] if in_list.count(sub[0]) == 1 else sub[1]

    print(cap_room)



"""
Given N - integer, print pyramid of N - 1 height using only print() like this:
1
22
333
4444
55555
......
Only two 
"""

def build_pyramid1(n):
        for i in range(1, n):
            print(int(i * ((1 * (1 - pow(10, i))) / (1 - 10))))



"""
Find angle between median and adjacent side of right triangle.
"""

def find_angle():
    print(round(math.degrees(math.atan2(int(input()), int(input())))))



"""
Given N - integer, build palindromic pyramid using only print and for statements:
1
121
12321
1234321
123454321 
"""

def build_pyramid2(n):
    for i in range(1, n + 1):
        print(int((1 - 10 ** i) / -9) ** 2)



# --------------------------------------------------------ITERTOOLS SECTION--------------------------------------------------------



def cartesian_product():
    A, B = list(map(int, input().split())), list(map(int, input().split()))

    print(" ".join(map(str, sorted(itertools.product(A, B)))))



def permutate():
    s, k = input().split()

    print("\n".join(sorted(map(lambda t : "".join(t), itertools.permutations(s, int(k))))))



def combine():
    s, k = input().split()

    print("\n".join(["\n".join(sorted(map(lambda t : "".join(sorted(t)), \
                     itertools.combinations(s, i)))) for i in range(1, int(k) + 1)]))



def permutate_with_replacement():
    s, k = input().split()

    print("\n".join(sorted(map(lambda t: "".join(sorted(t)), \
                               itertools.combinations_with_replacement(s, int(k))))))



"You're given string s, print pairs of form (X, c), for each character c, where X is number of occurrences of c in s."

def compress():
    s = input()
    for i in itertools.groupby(s):
        print("(", len(list(i[1])), ", ", int(i[0]), ")", sep="", end=" ")



def char_probability():
    _, chars, k = int(input()), input().split(), int(input())
    combs = list(itertools.combinations(chars, k))

    print(round(sum([1 for t in combs if t.count('a') >= 1]) / len(combs), 3))



"""
Find the maximum sum.
"""

def maximize_sum():
    """
    Algorithm:
        1. Read input k and m;
        2. Initialize list;
        3. Run loop and in each cycle, read input and add it to the list;
        4. Initialize variable max_sum;
        5. Launch another loop in list of product:
            On each cycle perform the following operations:
                1) Map square function on each element of tuple;
                2) Sum-up the squares;
                3) Apply modulo on sum and check if it's bigger than existing maximum sum.
        6. Print max sum.
    """

    k, m = input().split()
    mega_list = []

    for _ in range(int(k)):
        n, *sub_list = input().split()
        mega_list.append(sub_list[:int(n)])

    f = lambda x: int(x) ** 2
    max_sum = 0

    for t in itertools.product(*mega_list):

        sum_ = sum(map(f, t)) % int(m)
        if sum_ > max_sum:
            max_sum = sum_

    print(max_sum)



#-----------------------------------------------------COLLECTIONS-----------------------------------------------------



"""
TOOL_NAME: Counter.

Demonstration of Counter class, which useful to count number of elements in some iterable and store it as dictionary.
"""

def count_sum():

    n = int(input())
    shoes = collections.Counter(input().split())

    sum_ = 0
    for _ in range(int(input())):
        k, v = input().split()
        if shoes[k] != 0:
            sum_ += int(v)
            shoes[k] -= 1

    print(sum_)



"""
TOOL_NAME: defaultdict.

You are given n and m integers, list of n characters and sub list of m characters. Print all indices of each character 
from sub list, those are present in main list.
"""

def print_indices():
    import collections as col

    d = col.defaultdict(list)
    n, m = input().split()

    for i in range(1, int(n) + 1):
        d[input()].append(i)

    for j in range(int(m)):
        k = input()
        indices = d[k]

        if len(indices) != 0:
            print(*indices)
        else:
            print(-1)



"""
TOOL_NAME: namedtuple.
You are given a spreadsheet with student info: ID, NAME, MARKS, CLASS. Your task is to read the spreadsheet and calculate
average for students' marks. Columns' order with info will be written randomly.
"""

def calc_mean():

    n = int(input())
    student_info = collections.namedtuple("Student_Info", input().strip().split())

    mark_sum = 0
    for _ in range(n):
        st = student_info(*input().strip().split())
        mark_sum += int(st.MARKS)

    print(mark_sum / n)



"""
TOOL_NAME: OrderedDict.

You are given list of items and their net price. Compute total sum of net prices for each product.

"""
def invetarization():
    items = collections.OrderedDict()
    n = int(input())

    for _ in range(n):
        item = input().split()
        try:
            items[" ".join(item[:-1])] += int(item[-1])
        except KeyError:
            items[" ".join(item[:-1])] = int(item[-1])

    print(items.popitem(last=False))



"""
TOOL_NAME: Counter.

Given n words, print number of unique words on the first line and number of occurrences of each word on the second line.
"""

def word_processing():
    words = collections.Counter()
    for _ in range(int(input())):
        words[input()] += 1

    print(len(words), "\n", " ".join(map(str, words.values())), sep="")



"""
TOOL_NAME: deque.

Perform operations on empty deque.

Example:
    append 1
    append 2
    append 3
    appendleft 4
    pop
    popleft

"""

def perf_ops():

    deq = collections.deque()

    for _ in range(int(input())):
        eval("deq.{0}({1})".format(*input().split(), ""))

    print(*deq)



"""
TOOL_NAME: deque.

Given a horizontal row of n cubes. Print 'Yes' if you can stack these cubes on top of each other, otherwise print 'No'.
Each time you can only pick either leftmost cube or rightmost cube.
"""

def stack_cubes():
    deq = collections.deque()
    yes = True  # Logic-flag

    for _ in range(int(input())):
        # Read input and refresh 'last variable'
        t, deq, last = int(input()), collections.deque(input().split()), 2 ** 1000

        for _ in range(t // 2):
            left, right = int(deq.popleft()), int(deq.pop())

            # Check if a minimum cube of this pair is bigger than the last maximum cube:
            if min(left, right) > last:
                yes = False
                break

            max_, min_ = max(left, right), min(left, right)

            # It's always better to pick the biggest one.
            last = max_ if max_ <= last else min_

        # Condition explanation: if yes is false, test was interrupted, if yes is true, then we've been processed the whole
        # row of cubes and if so, we need check whether the length of row was even or odd, if it's odd, then there is one
        # cube left and we need to check if this cube fits.

        print("Yes" if yes and (t % 2 == 0 or last >= int(deq.pop())) else "No")
        yes = True



"""
TOOL_NAME: Counter.

You are given string s. Perform the following operation on this string:
    Print the three most common characters along with their occurrence count.
    Sort in descending order of occurrence count.
    If the occurrence count is the same, sort the characters in alphabetical order
"""

def find_commons():
    chars = collections.Counter("".join(sorted(input())))

    commons = chars.most_common(3)
    print("\n".join([t[0] + " " + str(t[1]) for t in sorted(commons, key=lambda c: c[1], reverse=True)]))



# ------------------------------------------------------DATE AND TIME-------------------------------------------------------



"""
TOOL_NAME: calendar.

You are given a date mm/dd/yyyy, print name of that day. 
"""

def print_day_name():
    month, day, year = map(int, input().split())

    print(calendar.day_name[calendar.weekday(year, month, day)].upper())



"""
TOOL_NAME: datetime, date, time, delta.

Time delta is absolute difference between two timestamps. You are given two time stamps, these time stamps are 
reflecting the same time, but in different time-zones, your task is to print time delta of these timestamps.
"""

def abs_time_delta():
    frmt = "%a %d %b %Y %X %z"
    for _ in range(int(input())):
        dt1 = datetime.strptime(input(), frmt)
        dt2 = datetime.strptime(input(), frmt)

        td = dt1 - dt2
        print(abs(td.days * 24 * 3600 + td.seconds + td.microseconds * 10 ** 6))



#--------------------------------------------------------EXCEPTIONS-----------------------------------------------------



"""
TOOL_NAME: try-except
"""

def print_error():

    for _ in range(int(input())):
        try:
            a, b = input().split()
            print(int(a) // int(b))

        except ZeroDivisionError as err1:
            print("Error Code:", err1)
        except ValueError as err2:
            print("Error Code:", err2)



"""
TOOL_NAME: try-except.

You are given regex, print True if it's valid regex, otherwise False.
"""

def check_regex():

    for _ in range(int(input())):
        try:
            re.match(input(), "")
            print(True)
        except Exception:
            print(False)



#-------------------------------------------------------BUILT-INS-------------------------------------------------------



"""
TOOL_NAME: zip()

You are given table of students' marks, a column in this table represents student marks for one student and row represents
subject. Compute an average of marks for each student and print on newline.
"""

def calc_mark_average():
    st, sb = map(int, input().split())
    marks = []

    for _ in range(sb):
        marks.append(input().split())

    print("\n".join([str(sum(map(float, t)) / int(sb)) for t in zip(*marks)]))



"""
TOOL_NAME: sorted()

You are given table of athletes, your task is to sort the table by some attribute k. 
"""

def sort_athletes():
    atls, atrs = map(int, input().split())
    athlets = []

    for _ in range(atls):
        athlets.append(list(map(int, input().strip().split())))

    k = int(input())
    print("\n".join(map(lambda t: " ".join(map(str, t)), sorted(athlets, key=lambda a: a[k]))))



"""
TOOL_NAME: sorted(), ord()

You are given a string, which contains alphanumeric characters only. Your task is to sort the string in the following manner:
    All sorted lowercase letters are ahead of uppercase letters.
    All sorted uppercase letters are ahead of digits.
    All sorted odd digits are ahead of sorted even digits.
"""

def sort_by_criteria():
    print("".join(sorted(input(), key=lambda ch: abs(97 - ord(ch)) if ch.islower() else
                                             26 + abs(65 - ord(ch)) if ch.isupper() else
                                             52 + int(ch) if int(ch) % 2 == 1 else
                                             62 + int(ch))))



#-------------------------------------------------PYTHON-FUNCTIONALS----------------------------------------------------



"""
TOOL_NAME: re, filter()

You are given a list of email addresses, and your task is to print a new list with valid email addresses.
"""

def validate():

    emails = []
    for _ in range(int(input())):
        emails.append(input())

    pattern = re.compile('[a-zA-Z0-9_-]+@[a-zA-Z0-9]*\.[\w]{0,3}')
    print(sorted(filter(lambda e: pattern.fullmatch(e), emails)))



"""
TOOL_NAME: reduce, Fractions

You are given n rational numbers, produce their product and print it.
"""

def product_fractions():
    from functools import reduce
    from fractions import Fraction

    f = lambda x, y: x * y
    rationals = []

    for _ in range(int(input())):
        rationals.append(Fraction(*map(int, input().split())))

    print(reduce(f, rationals))



#------------------------------------------------------REGEX-----------------------------------------------------------



"""
TOOL_NAME: pattern.fullmatch()

Given a float number as string, validate it.
"""

def validate_float():
    pattern = re.compile('^[+-]?[\d]*\.[\d]+')
    for _ in range(int(input())):
        print(True if pattern.fullmatch(input()) else False)



"""
TOOL_NAME: re.split()

Split string number by ',' and '.'.
"""

def split_string():
    pattern = re.compile('[.,]')

    print("\n".join(pattern.split(input())))



"""
TOOL_NAME: re.group().
"""

def find_repetition():

    m = re.search(r'([a-zA-Z0-9])\1+', input())
    print(m.group(1) if m != None else -1)



"""
TOOL_NAME: re.findall()

You are given a string of alphanumeric characters, your task is to find all occurrences of vowels between 2 consonants. 
"""

def find_vowels():
    pattern = re.compile(
                        '[qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM]([AEIOUaeiou]{2,})'
                        '(?=[qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM])')
    m = pattern.findall(input())
    print('\n'.join(m) if len(m) != 0 else -1)



"""
TOOL_NAME: re.span(), re.finditer()

You are given string s and string k, your task is to print indices of all occurrences of k in s.
"""

def locate():

    s, k = input(), input()
    pattern = re.compile(k[:len(k) - 1] + '(?=' + k[-1] + ')')

    print("\n".join([str(m.span()) for m in pattern.finditer(s)]) \
                              if pattern.search(s) else '(-1, -1)')



"""
TOOL_NAME: re.sub()

You are given n integer and n lines of Python code, your task is to find all '&&' and '||' and substitute them with 
'and' and 'or' correspondingly.
"""

def substite():
    p1, p2 = re.compile('(?<=\s{1})&&(?=\s{1})'), re.compile('(?<=\s{1})\|\|(?=\s{1})')
    for _ in range(int(input())):
        print(p2.sub('or', p1.sub('and', input())))



"""
TOOL_NAME: re.match()

Validate roman numerals in 1 - 3999 range inclusively.
"""

def validate_romans():

    # This is poor pattern and doesn't validate all cases, but it matches all valid roman-numerals.
    pattern = re.compile('^(M{,3}(CM)?(D)?(CD)?(C){,3}(XC)?(L)?(XL)?(X){,3}(IX)?(V)?(IV)?(I){,3})$')
    print(bool(pattern.match(input())))



"""
TOOL_NAME: re.match()

Validate phone numbers.
"""

def validate_phone_numbers():
    pattern = re.compile('^[789]\d{9}$')
    for _ in range(int(input())):
        print('YES' if bool(pattern.match(input())) else 'NO')



"""
TOOL_NAME: re.match()

Validate email addresses.
"""

def validate_emails():
    pattern = re.compile(r'^<[a-zA-Z]+[\w+-.,]+@[a-zA-Z]+\.[a-zA-Z]{1,3}>$')
    for _ in range(int(input())):
        name, email = input().split()
        if pattern.match(email):
            print(name + " " + email)



"""
TOOL_NAME: re.findall()

Given css lines, validate color codes. 
"""

def validate_color():
    p = re.compile(r'.+?(#[a-fA-F0-9]{3,6})')
    for _ in range(int(input())):
        line = input()
        if p.match(line):
            print("\n".join(p.findall(line)))



"""
TOOL_NAME: html.parser

Handle html tags, attributes and print it.
"""

def handle_html():

    class MyHTML(html.parser.HTMLParser):
        def handle_starttag(self, tag, attrs):
            print('Start :', tag)
            for attr in attrs:
                print('->', attr[0], '>', attr[1])

        def handle_endtag(self, tag):
            print('End   :', tag)

        def handle_startendtag(self, tag, attrs):
            print('Empty :', tag)
            for attr in attrs:
                print('->', attr[0], '>', attr[1])

    parser = MyHTML()
    for _ in range(int(input())):
        parser.feed(input())



"""
TOOL_NAME: html.parser

Handle html comments and data.
"""

def handle_html1():

    class MyHTML(html.parser.HTMLParser):
        def handle_comment(self, data):
            print('>>> ', end='')
            if str(data).find('\n') != -1:
                print('Multi-line Comment')
            else:
                print('Single-line Comment')

            print(data)

        def handle_data(self, data):
            if data != '\n':
                print('>>> Data\n', data, sep='')

        def feed(self, data):
            self.rawdata += data + '\n'
            self.goahead(0)

    parser = MyHTML()
    for _ in range(int(input())):
        in_ = input()
        if in_ != '\n':
            parser.feed(in_)



"""
TOOL_NAME: html.parser
"""

def handle_html2():

    class MyHTML(html.parser.HTMLParser):
        def handle_starttag(self, tag, attrs):
            print(tag)
            for attr in attrs:
                print('->', attr[0], '>', attr[1])

    parser = MyHTML()
    for _ in range(int(input())):
        parser.feed(input())



"""
TOOL_NAME: re.search()

Validate user-ids.
"""

def validate_uid():
    '''
    It must contain at least 2 uppercase English alphabet characters.
    It must contain at least 3 digits (0 - 9).
    It should only contain alphanumeric characters (a - z, A - Z & 0 - 9 ).
    No character should repeat.
    There must be exactly 10 characters in a valid UID.
    '''

    p = re.compile(r'[^a-zA-Z0-9]|([a-zA-Z0-9]).*?(?=\1)|^[a-zA-Z0-9]{,9}$|' + \
                   '^[a-zA-Z0-9]{11,}|(?:^[^A-Z]*?[A-Z]?[^A-Z]*$)|(?:^[^0-9]*?[0-9]?[^0-9]*?[0-9]?[^0-9]*$)')
    n = int(input())

    for _ in range(n):
        in_ = input()
        print('Invalid' if p.search(in_) else 'Valid')



"""
TOOL_NAME: re.match()

Given credeit card number, validate them.
"""

def validate_crednums():

    '''
    ► It must start with a 4, 5 or 6.
    ► It must contain exactly 16 digits.
    ► It must only consist of digits (0 - 9).
    ► It may have digits in groups of 4, separated by one hyphen "-".
    ► It must NOT use any other separator like ' ', '_', etc.
    ► It must NOT have 4 or more consecutive repeated digits.
    '''

    p = re.compile(r'^([456])(?!\1{3})(\d)(?!\2{3}|\2{2}-\2)(\d)'
                   r'(?!\3{3}|\3-\3{2})(\d)(?!\4{3}|-\4{3})(-?)(\d)'
                   r'(?!\6{3})(\d)(?!\7{3}|\7{2}-\7)(\d)'
                   r'(?!\8{3}|\8-\8{2})(\d)(?!\9{3}|-\9{3})(-?)(\d)'
                   r'(?!\11{3})(\d)(?!\12{3}|\12{2}-\12)(\d)'
                   r'(?!\13{3}|\13-\13{2})(\d)(?!\14{3}|-\14{3})(-?)(\d)'
                   r'(?!\16{3})(?:\d){3}$')
    n = int(input())
    print()

    for _ in range(n):
        in_ = input()
        print('Valid' if p.match(in_) else 'Invalid')



"""
TOOL_NAME: re.findall(), re.match()

Validate postal codes by the following criteria:
    1. P must be a number in the range from 100000 to 999999 inclusive.
    2. P must not contain more than one alternating repetitive digit pair.
"""

def validate_pcodes():
    regex_integer_in_range = r"^[1-9]\d{4}\d$"
    regex_alternating_repetitive_digit_pair = r"(\d)(?=\d\1)"

    P = input()

    print(bool(re.match(regex_integer_in_range, P))
          and len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)



"""
TOOL_NAME: zip(), re.sub()

Given 2D matrix, with characters and you need to decode a word hidden in that matrix.
"""

def decode_matrix():

    first_multiple_input = input().rstrip().split()
    n = int(first_multiple_input[0])
    m = int(first_multiple_input[1])

    matrix = []

    for _ in range(n):
        matrix_item = input()
        matrix.append(matrix_item)

    print(matrix)
    str_ = "".join(list(map(lambda t: "".join(t), zip(*matrix))))
    print(str_)

    print(re.sub(r'(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+(?=[a-zA-Z0-9])', ' ', str_))



#-------------------------------------------------------XML PARSING----------------------------------------------------



"""
TOOL_NAME: xml.etree.ElementTree

Given xml code, count a number of all attributes.
"""

def count_attrs():
    root = xml.etree.ElementTree.parse('problems/XML/rssfeed.xml').getroot()
    n = 0

    for el in root.iter():
        n += len(el.attrib)

    print(n)



"""
TOOL_NAME: xml.etree.ElementTree

Given xml code, count the maximum depth of the tree.
"""

def identify_depth():
    maxdepth = 0

    def depth(elem, level):
        global maxdepth

        if level > maxdepth:
            maxdepth += 1

        for el in elem:
            depth(el, level + 1)

    root = xml.etree.ElementTree.parse('problems/XML/rssfeed.xml').getroot()
    depth(root, -1)
    print(maxdepth)



#--------------------------------------------------------DECORATORS-----------------------------------------------------



"""
TOOL_NAME: decorator

Given phone numbers, your task is to sort them and print in the following format : +91 ##### #####. 
"""

def format_pnumbers():

    def wrapper(f):
        def fun(l):
            form = lambda ph: '+91 {}{}{}{}{} {}{}{}{}{}'.format(*ph)

            for i in range(len(l)):
                if len(l[i]) > 10:
                    l[i] = form(l[i][len(l[i]) - 10:])
                else:
                    l[i] = form(l[i])

            f(l)

        return fun

    @wrapper
    def sort_phone(l):
        print(*sorted(l), sep='\n')

    l = [input() for _ in range(int(input()))]
    sort_phone(l)



"""
TOOL_NAME: operator.itemgetter(), decorator

Given a list of people, your task is to sort them by age and print in desired format.
"""

def print_speople():

    def person_lister(f):
        def inner(people):
            return map(f, sorted(people, key=lambda p: int(operator.itemgetter(2)(p))))

        return inner

    @person_lister
    def name_format(person):
        return ("Mr. " if person[3] == "M" else "Ms. ") + person[0] + " " + person[1]

    people = [input().split() for i in range(int(input()))]
    print(*name_format(people), sep='\n')



#--------------------------------------------------------NUMPY---------------------------------------------------------



"""
TOOL_NAME: numpy.array(), numpy.flip()

Given a list of integers, your task is to create reversed numpy-array of floats.
"""

def create_array():
    print(numpy.flip(numpy.array(input().split(), float)))



"""
TOOL_NAME: numpy.reshape()

Given a list of integers, your task is to create an array with 3x3 dimensions.
"""

def create_3x3_array():
    print(numpy.reshape(numpy.array(input().split(), int), (3, 3)))



"""
TOOL_NAME: numpy.transpose(), numpy.flatten()

Given two integers as dimensions of an array and elements of this array, your task is to print modified array using 
routines written above.
"""

def modify_array():
    n, m = map(int, input().split())
    list_ = []

    for _ in range(n):
        for i in input().split():
            list_.append(int(i))

    arr = numpy.array(list_)
    arr.shape = (n, m)

    print(numpy.transpose(arr))
    print(arr.flatten())



"""
TOOL_NAME: numpy.concatenate()

Given a dimensions of two arrays and the arrays itself, your task is to concatenate these arrays and print them on new line.
"""

def concatenate_arrays():
    n, m, _ = map(int, input().split())
    a, b = numpy.array([list(map(int, input().split())) for _ in range(n)]), \
           numpy.array([list(map(int, input().split())) for _ in range(m)])

    print(numpy.concatenate((a, b)))


"""
TOOL_NAME: numpy.zeros(), numpy.ones()

You are given a dimensions, your task is to print array of ones and zeros with the given dimensions.
"""

def zero_and_one():
    dims = tuple(map(int, input().split()))
    print(numpy.zeros(dims, int))
    print(numpy.ones(dims, int))



"""
TOOL_NAME: numpy.eye()

Given a dimensions, your task is to print an array with diagonal filled with 1s and 0s elsewhere.
"""

def identify():
    print(numpy.eye(*map(int, input().split())))



"""
TOOL_NAME: matrix operations

Your are given a dimensions and two arrays with these dimensions, your task is to perform all basic operations on these
two arrays.
"""

def perform_ops():
    n, m = map(int, input().split())
    a, b = numpy.array([input().split() for _ in range(n)], int), numpy.array([input().split() for _ in range(n)], int)

    print(a + b)
    print(a - b)
    print(a * b)
    print(a // b)
    print(a % b)
    print(a ** b)



"""
TOOL_NAME: numpy.floor(), numpy.ceil(), numpy.rint()

You are given an 1D array and your task to perform the operations above.
"""

def perform_ops1():
    arr = numpy.array(input().split(), dtype=float)

    print(numpy.floor(arr))
    print(numpy.ceil(arr))
    print(numpy.rint(arr))



"""
TOOL_NAME: numpy.sum(), numpy.prod()

You are given an NxM array, your task is to print the sum of this array and then the product of this sum.
"""

def perform_ops2():
    n, _ = map(int, input().split())
    print(numpy.prod(numpy.sum(numpy.array([input().split() for _ in range(n)], dtype=int), axis=0)))



"""
TOOL_NAME: numpy.min(), numpy.max()

You are given an NxM array, your task is to find a min values over row-axis and then print the max value of that.
"""

def perform_ops3():
    n, _ = map(int, input().split())
    print(numpy.max(numpy.min(numpy.array([input().split() for _ in range(n)], dtype=int), axis=1)))



"""
TOOL_NAME: numpy.mean(), numpy.var(), numpy.std()

You are given NxM array, your task is to perform stat. operations on this array.
"""

def perform_stat_ops():
    n, _ = map(int, input().split())
    arr = numpy.array([input().split() for _ in range(n)], dtype=int)

    print(numpy.mean(arr, axis=1))
    print(numpy.var(arr, axis=0))
    print(numpy.std(arr, axis=None))



"""
TOOL_NAME: numpy.dot()

You are given two NxN arrays, your task is to print their dot product.
"""

def dot_product():
    n = int(input())
    a, b = numpy.array([input().split() for _ in range(n)], dtype=int), \
           numpy.array([input().split() for _ in range(n)], dtype=int)

    print(a.dot(b))



"""
TOOL_NAME: numpy.inner(), numpy.outer()

Given two 1D arrays, your task is to compute their inner and outer product.
"""

def in_out_product():
    a, b = numpy.array(input().split(), dtype=int), \
           numpy.array(input().split(), dtype=int)

    print(numpy.inner(a, b))
    print(numpy.outer(a, b))



"""
TOOL_NAME: numpy.polyval()
"""

def find_poly_val():

    array = numpy.array(input().split(), dtype=float)
    print(numpy.polyval(array, int(input())))



"""
TOOL_NAME: numpy.linalg.det()

Given square matrix, compute it's determinant.
"""

def compute_determinant():

    n = int(input())
    array = numpy.array([input().split() for _ in range(n)], dtype=float)
    print(round(numpy.linalg.det(array)), 2)

















