from datetime import datetime

frmt = "%a %d %b %Y %X %z"
t = int(input())
print(t) # print to std_out for testing purposes

for _ in range(t):
    dt1 = datetime.strptime(input(), frmt)
    dt2 = datetime.strptime(input(), frmt)

    td = dt1 - dt2
    print(abs(td.days * 24 * 3600 + td.seconds + td.microseconds * 10 ** 6))

