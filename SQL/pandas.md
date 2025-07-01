### Pandas Basics

```python
import pandas as pd

df = pd.DataFrame({'Mahith': [4, 9], 'Manasvi': [9, 13], 'Yasasri': [12, 16]})
   Mahith  Manasvi  Yasasri
0       4        9       12
1       9       13       16

df = pd.DataFrame({'Mahith': [4, 9], 'Manasvi': [9, 13], 'Yasasri': [12, 16]}, index=['Grade', 'Age'])
       Mahith  Manasvi  Yasasri
Grade       4        9       12
Age         9       13       16

df.Mahith
Grade    4
Age      9
Name: Mahith, dtype: int64

ds = pd.Series(data=[4, 9, 12], name='grades')
0     4
1     9
2    12
Name: grades, dtype: int64

# index based location, uses python stdlib indexing scheme
df.iloc[1]
Mahith      9
Manasvi    13
Yasasri    16
Name: Age, dtype: int64

df.iloc[:, 1]
Grade     9
Age      13
Name: Manasvi, dtype: int64

df.iloc[:1, 1]
Grade    9
Name: Manasvi, dtype: int64
df.iloc[1:2, 1] # is same as df.iloc[-1:, 1]
Age    13
Name: Manasvi, dtype: int64

print(df.loc[:,['Yasasri']]) # loc can index any stdlib type and uses inclusive range df.iloc[0:10] == df.loc[0:9]
       Yasasri
Grade       12
Age         16
```

### Summary functions
```python
print(df.Age.describe())
count     3.000000
mean     12.666667
std       3.511885
min       9.000000
25%      11.000000
50%      13.000000
75%      14.500000
max      16.000000
Name: Age, dtype: float64

```
