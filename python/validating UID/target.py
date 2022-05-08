import re

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
print(n)

for _ in range(n):
    in_ = input()
    print(in_)
    print('Invalid' if p.search(in_) else 'Valid')